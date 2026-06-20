import { useState } from "react"
import useLocalStorage from "../components/data/useLocalStorage"

import Modal from "../components/Form/Modal"
import MilestoneForm from "../components/Form/MilestoneForm"
import PrimaryButton from "../components/UI/PrimaryButton"
import Heading from "../components/UI/Heading"
import ReusableCard from "../components/UI/ReusableCard"
import ViewMoreButton from "../components/UI/ViewMoreButton"
import DetailModal from "../components/UI/DetailModal"
import Pagination from "../components/UI/Pagination"
import toast from "react-hot-toast"

function Milestone() {
  const [openModal, setOpenModal] = useState(false)
  const [isEditing, setIsEditing] = useState(null)

  const [milestoneRecords, setMilestoneRecords] = useLocalStorage("milestoneRecord", [])
  const [selectedMilestoneRecord, setSelectedMilestoneRecord] = useState(null)
  const [openDetailModal, setOpenDetailModal] = useState(false)

  //console.log(milestoneRecords);
  
    const openMilestoneForm = () => {
    setOpenModal(true)
    setIsEditing(null)

  }
  const closeMilestoneForm = () => {
    setOpenModal(false)
    setIsEditing(null)
  }

  const handleviewMore = (milestoneRecords) => {
  setSelectedMilestoneRecord(milestoneRecords)
  setOpenDetailModal(true)
  }

  const handleCloseDetailModal = () => {
    setSelectedMilestoneRecord(null)
    setOpenDetailModal(false)
  }

    const openEditMilestoneForm = (item) => {
      setIsEditing(item)
      setOpenModal(true)
      handleCloseDetailModal()
      
    }


  const handleNewMilestoneRecord = (newMilestone) => {
    const safeRecords = Array.isArray(milestoneRecords) ? milestoneRecords : [];
    const updateMilestone = [...safeRecords, {...newMilestone, id: Date.now()}] 
    setMilestoneRecords(updateMilestone)
     toast.success("You're doing great! \n You Just Documented a Moment of Growth")
   

    /* setTimeout(() => {
      console.log("StatsUpdated event");
      window.dispatchEvent(new Event("statsUpdated"));
    }, 200); */
  }
  //sorting by date
  //milestoneRecords.sort((a, b) => new Date(a.date) - new Date(b.date))
  const handleEditMilestone = (updatedMilestone) => {
    setMilestoneRecords((milestone) => milestone.map((item) => (
      item.id === isEditing?.id ? {...updatedMilestone, id: item.id} : item)
    ))
    toast.success("Milestone Updated Successful")
    closeMilestoneForm()
  }

  const milestonePerPage = 12 
  const [currentPage, setCurrentPage] = useState(1)
  const lastIndex = currentPage * milestonePerPage
  const firstIndex = lastIndex - milestonePerPage
  const paginatedMilestone = milestoneRecords.slice(firstIndex, lastIndex)
  const totalPages = Math.ceil(milestoneRecords.length / milestonePerPage)

  return (
    <div className="min-h-screen bg-sandbox-ghost p-4">
      <div className="bg-sandbox-navy rounded-lg text-sandbox-ghost p-2 m-2">
       <Heading title={"Your Milestone Reflections"}
       text={"Pause, look back, and see how far you've come beyond the task and timelines."}
       tagline={"Each reflection captures the lessons, wins, and turning points that define your journey."}/>
        <PrimaryButton  label={"Note It"} onClick={openMilestoneForm}/>
        {openModal && (
          <Modal onClose={closeMilestoneForm}>
            <MilestoneForm onAddMilestone={isEditing ? handleEditMilestone : handleNewMilestoneRecord} closeForm={closeMilestoneForm}
            initialData = {isEditing}/>
          </Modal>
        )}
        
      </div>
      <div className="pt-4">
        {paginatedMilestone.length > 0 ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4 py-6 p-2">
            {paginatedMilestone.map((milestoneRecord) => (
             <ReusableCard key={milestoneRecord.id}>
               <div className="flex flex-col justify-between h-32">
                 <div>
                  <p className="font-semibold my-2">Milestone Achieved: 
                <span className="font-normal"> {milestoneRecord.milestoneTitle}</span>
                </p>
                <p className="font-semibold">How It Felt:
                <span className="text-xl"> {milestoneRecord.milestoneMood.split(" ")[0]}</span>
                <span className="font-normal"> {milestoneRecord.milestoneMood.split(" ").slice(1).join(" ")}</span>
                </p>
                 </div>
               
              <div className="py-2">
                  <ViewMoreButton onClick={() => handleviewMore(milestoneRecord)}/>
              </div>
               </div>
              </ReusableCard>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 py-4 italic"> No milestone records yet. Click “Note It” to add one.</p>
          
        )}
      <div className="mt-auto py-4">
        {totalPages > 1 && (
          <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        />
      )}
      </div>
      </div>

       {openDetailModal && selectedMilestoneRecord && (
        <DetailModal className="min-w-2xs"
        data={selectedMilestoneRecord}
        onClose={handleCloseDetailModal}
        fields={[
          {key: "milestoneTitle", label: "Milestone Achieved"},
          {key: "milestoneMood", label: "How It Felt"},
          {key: "milestoneDescription", label: "Reflection"},
          
        ]}
        onEdit={() => openEditMilestoneForm(selectedMilestoneRecord)}
        />
       )}
     
    </div>
  )
}

export default Milestone