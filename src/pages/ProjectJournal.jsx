import { useState } from "react";
import { useLocation } from "react-router-dom";
import Heading from ".//../components/UI/Heading";
import PrimaryButton from "../components/UI/PrimaryButton";
import Modal from "../components/Form/Modal"
import ProjectJournalForm from "..//components/Form/ProjectJournalForm";
import useLocalStorage from "../components/data/useLocalStorage";
import ReusableCard from "../components/UI/ReusableCard";
import ViewMoreButton from "../components/UI/ViewMoreButton";
import DetailModal from "../components/UI/DetailModal";
import SelectOptionField from "../components/UI/ReusableForm/SelectOptionField";
import toast from "react-hot-toast";
import Pagination from "../components/UI/Pagination";
import ConfirmModal from "../components/UI/ConfirmModal";
import { sendEvent } from "../lib/analytics"

function ProjectJournal() {
  const location = useLocation()
  const selectedProjectId = location.state?.projectId

  const [openProjectJournal, setOpenProjectJournal] = useState(false)
  const [isEditing, setIsEditing] = useState(null)
  const [itemToDelete, setItemToDelete] = useState(null)
  const [isconfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false)

  const openProjectJournalForm = () => {
    setOpenProjectJournal(true)
    setIsEditing(null)
  }
  const closeProjectJournalForm = () => {
    setOpenProjectJournal(false)
    setIsEditing(null)
  }
  const [selectedStatus, setSelectedStatus] = useState("allStatus")

  const [selectedJournal, setSelectedJournal] = useState(null)
  const [openMoreDetail, setOpenMoreDetail] = useState(false)
  

  const [projectJournalRecords, setProjectJournalRecords] = useLocalStorage("projectJournalRecords", [])

  const handleNewProjectJournal = (newProjectJournal) => {
    const safeRecords = Array.isArray(projectJournalRecords) ? projectJournalRecords : [];

    // find project in localStorage 
    const storedProjects = JSON.parse(localStorage.getItem('sandbox:projectRecord') || '[]');
    const matchedProject = storedProjects.find(project => 
   String(project.id) === String(newProjectJournal.projectId)
  )
    if (!matchedProject) {
    toast.error("Selected project not found. Please try again.");
    return;
  }
    const projectIsDuplicate = safeRecords.some(journal => 
    String(journal.projectId) === String(newProjectJournal.projectId)
  );
  if (projectIsDuplicate) {
    toast.error(`Journal for ${matchedProject.projectName} already exists!`);
    return; 
  }
  
  // create a new journal entry 
    const journalEntry = {
      ...newProjectJournal, id: Date.now(),  projectName: matchedProject.projectName,
    }
    const updatedProjectJournal = [...safeRecords, journalEntry]
    setProjectJournalRecords (updatedProjectJournal)
    sendEvent("create", "journal")
    toast.success("Great \n you documented a project journal")
    closeProjectJournalForm()
  }

    //// Find the actual project details
  const projectJournal = JSON.parse(localStorage.getItem('sandbox:projectRecord') || '[]')
  const selectedJournalProject = projectJournal.find(project => String(project.id) === String(selectedProjectId))


  const handleViewMore = (journalRecord) => {
    setSelectedJournal(journalRecord)
    setOpenMoreDetail(true)
  }
  const handleJournalDetail = () => {
    setSelectedJournal(null)
    setOpenMoreDetail(false)
  }

  const openEditJournal = (item) => {
    setIsEditing(item)
    setOpenProjectJournal(true)
    handleJournalDetail()
  }

  const handleEditProjectJournal = (updatedJournal) => {
    setProjectJournalRecords((journal) => journal.map((item) => (
      item.id === isEditing?.id ? {...updatedJournal, id: item.id, projectId: isEditing.projectId, projectName: isEditing.projectName} : item
    ))
  )
  toast.success("Project Journal Updated")
  closeProjectJournalForm()
  }
  const openConfirmModal = (item) => {
    setItemToDelete(item)
    setIsConfirmDeleteOpen(true)
    setOpenMoreDetail(false)
  }
  const handleConfrimDelete = () => {
    setProjectJournalRecords((item) => item.filter((item) => item.id !== itemToDelete.id))
    setItemToDelete(null)
    setIsConfirmDeleteOpen(false)
    toast.success("Project Journal Delete Successfully")
  }

  const handleCancelDelete = () => {
    setIsConfirmDeleteOpen(false)
    setItemToDelete(null)
    
  }
  const getStatusStyles = (status) => {
  switch (status) {
    case "Completed":   return "bg-[#009933] text-white";
    case "In Progress": return "bg-[#ff9900] text-black";
    case "Paused":       return "bg-[#ebcb4b] text-black";
    case "Archived":    return "bg-[#9CA3AF] text-white";
    default:            return "bg-[#6B7280] text-black";
  }
};
  const statusFiltered =
  selectedStatus === "allStatus" ? projectJournalRecords
    : projectJournalRecords.filter(
      record => record.projectStatus === selectedStatus)

      const filteredRecords = selectedProjectId  ? statusFiltered.filter(
        record => String(record.projectId) === String (selectedProjectId)) :  statusFiltered

  const journalsPerPage = 12
  const [currentPage, setCurrentPage] = useState(1)
  const lastIndex = currentPage * journalsPerPage
  const firstIndex = lastIndex - journalsPerPage
  const paginatedProjectJournals = filteredRecords.slice(firstIndex, lastIndex)
  const totalPages = Math.ceil(filteredRecords.length / journalsPerPage)

  return (
    <div className='min-h-screen bg-sandbox-ghost p-4 flex flex-col'>
      <div className="bg-sandbox-navy rounded-lg text-sandbox-ghost p-2 m-2">
      <Heading
      title={"Behind the Build"}
      text={"Capture the thoughts, choices, and lessons that unfolded as the project took shape."}
      tagline={"Because every project holds more than what’s visible at the end."}
      />    
     <PrimaryButton  label={"Note It"} onClick={openProjectJournalForm}
     />
     {openProjectJournal && (
      <Modal onClose={closeProjectJournalForm}>
        <ProjectJournalForm onAddProjectRecord={isEditing ? handleEditProjectJournal : handleNewProjectJournal} closeForm={closeProjectJournalForm}
        initialProjectJournalData = {isEditing}
        />
      </Modal>
     )}
      </div>
      <div className="flex justify-end">
        
          <SelectOptionField
          name={"statusFilter"}
          value={selectedStatus}
          onChange={(event) => {
          setSelectedStatus(event.target.value)
          setCurrentPage(1)
        }}
        label={""}
        options={[
          {label: "All Status", value: "allStatus"},
          {label: "Completed", value: "Completed"},
          {label: "In Progress", value: "In Progress"},
          {label: "Paused", value: "Paused"},
          {label: "Archived", value: "Archived"}

        ]}
        className="border rounded hover:cursor-pointer"
        />
        
      </div>
      <div className="rounded-2xl pt-2 flex-1 flex flex-col">
        {projectJournalRecords.length === 0 ? (
          <p className="text-center text-gray-600 py-4 italic">No project journal documentated yet. Click “Note It” to add one.</p>
      ) :  
        filteredRecords.length === 0 && selectedProjectId ? (
          <p className="text-center text-gray-600 italic">No Journal for this project {selectedJournalProject?.projectName ||"this project"} yet</p>
        ) : 
        filteredRecords.length === 0 ? (
          <p className="text-center text-gray-600 py-4 italic">No projects found under status {selectedStatus}.</p>
        ) : 
        (
          
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-y-6 gap-x-4 p-2">
            {paginatedProjectJournals.map((projectJournalRecord) => (
              
            <div >
              <ReusableCard key={projectJournalRecord.id}>
              <p className="font-semibold py-0.5">Start Date: <span className="font-normal">{projectJournalRecord.startDate}</span></p>
              <p className="font-semibold py-0.5">Project Name: <span className="font-normal">{projectJournalRecord.projectName}</span></p>
              <p className={`font-semibold py-0.5`}>Project Status: <span className={`text-sm px-2 py-0.5 rounded-full font-medium
                ${getStatusStyles(projectJournalRecord.projectStatus)}`}>
                  {projectJournalRecord.projectStatus}
                  </span></p>
             
               <ViewMoreButton onClick={() => handleViewMore(projectJournalRecord)}/>
            </ReusableCard>
            </div>
            ))}
          
          </div>
        )}
        <div className="mt-auto py-8">
          {totalPages > 1 && (
            <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            />
          )}
        </div>
      </div>
      {openMoreDetail && selectedJournal && (
        <DetailModal className="min-w-sm"
        data={selectedJournal}
        onClose={handleJournalDetail}
         fields={[
          { key: "startDate", label: "Start Date"},
          { key: "projectName", label: "Project Name"},
          { key: "projectStatus", label: "Project Status"},
          { key: "coreFeatures", label: "Core Features"},
          { key: "projectDescription", label: "Project Description"},
        ]
      }
      onEdit={() => openEditJournal(selectedJournal)}
      onDelete={() => openConfirmModal(selectedJournal)}
        />
      )}

      <ConfirmModal
      isOpen={isconfirmDeleteOpen}
      title={"Delete Project Journal"}
      message={`Are you sure you want to delete the project journal for "${itemToDelete?.projectName}"`}
      confirmText={"Delete"}
      onConfirm={handleConfrimDelete}
      onCancel={handleCancelDelete}
      type="danger"
      />
    </div>
    
  )
}




export default ProjectJournal

