import { useContext, useState } from "react"
import { DashboardStatsContext } from "../CustomHook/DashboardStatsContext"
import { sendEvent } from "../lib/analytics"

import Modal from "../components/Form/Modal"
import PrimaryButton from "../components/UI/PrimaryButton"
import Heading from "../components/UI/Heading"
import ReusableCard from "../components/UI/ReusableCard"
import DetailModal from "../components/UI/DetailModal"
import ViewMoreButton from "../components/UI/ViewMoreButton"
import LearnForm from "../components/Form/LearnForm"
import Pagination from "../components/UI/Pagination"
import toast from "react-hot-toast"
import ConfirmModal from "../components/UI/ConfirmModal"

function LearnTrack() {
  
  const [openModal, setOpenModal] = useState()
  const [categoryOpen, setCategoryOpen] = useState({})
  const [technologyOpen, setTechnologyOpen] = useState({})
  const [techCurrentPage, setTechCurrentPage] = useState({})
  const [selectedRecord, setSelectedRecord] = useState(null)
  const [openDetailModal, setOpenDetailModal] = useState(false)
  const [isEditing, setIsEditing] = useState(null)
  const [itemToDelete, setItemToDelete] = useState(null)
  const [confirmOpen, setconfirmOpen] = useState(false)


  const handleViewMore = (record) => {
  setSelectedRecord(record)
  setOpenDetailModal(true)
}

const closeDetailModal = () => {
  setSelectedRecord(null)
  setOpenDetailModal(false)
}


  const openLearningTrackerForm = () => { 
    setOpenModal(true)
    setIsEditing(null)
  }
  const closeLearningTrackerForm = () => {
    setOpenModal(false)
    setIsEditing(null)
  }
  const openEditLearningForm = (item) => {
    setIsEditing(item)
    setOpenModal(true)
    closeDetailModal()
  }

  const openDeleteConfirmation = (item) => {
    setconfirmOpen(true)
    setItemToDelete(item)
    closeDetailModal()
  }

  const handleCancelDelete = () => {
    setItemToDelete(null)
    setconfirmOpen(false)
  }

   const {learnRecords: records, setLearnRecords: setRecords} = useContext(DashboardStatsContext)
   
   const handleNewRecords = (newRecord) => {
    
   const updatedRecords = [...records, {...newRecord, id:Date.now()}];
    setRecords(updatedRecords);
    sendEvent("create,", "progress")
     toast.success("Progress log successfully")
  }

  const toggleCategory = (categoryName) => { 
    setCategoryOpen((category) => ({
      ...category, [categoryName] : !category[categoryName]
    }))
  }

  const handleCurrentPage = (technologyName, page) => {
    setTechCurrentPage((prev) => ({
      ...prev, [technologyName] : page
    }))
  }

  const toggleTechnology = (technologyName) => {
   setTechnologyOpen((tech) => ({
    ...tech, [technologyName] : !tech[technologyName]
   }))
  }
  const handleEdit = (updatedRecord) => {
    setRecords((learn) => learn.map((item) => (
      item.id === isEditing?.id ? {...updatedRecord, id: item.id} : item)
    )) 
    toast.success("Update Successfully")
    closeLearningTrackerForm()
  }

  const handleConfrimDelete = () => {
    setRecords((learn) => learn.filter((item) => item.id !== itemToDelete.id))
    setItemToDelete(null)
    setconfirmOpen(false)
    toast.success("Delete Successful")

  }
  const recordsPerPage = 12 
  const sortedLearnTracker = [...records].sort((a, b) => new Date(a.date) - new Date(b.date))
  const groupedCategory = Object.groupBy(sortedLearnTracker, (item) => item.category)
  
  return (
    <div className="min-h-screen bg-sandbox-ghost p-4">
      <div>
        <div className="bg-sandbox-navy rounded-lg text-sandbox-ghost p-2 m-2">
          <Heading
        title={"Your Progress Footprints"}
        text={"Log your activity, track hours spent, and see how your progress unfolds over time, with ideas that shape your journey."}
        tagline={"Every new entry builds a record that tells a story."}
         />
           <PrimaryButton label={"Note It"}
           onClick={openLearningTrackerForm}/>
             {openModal && (
              <Modal onClose={closeLearningTrackerForm}>
                <LearnForm key="learning-form"
                onAddRecord={isEditing ? handleEdit : handleNewRecords} closeForm={closeLearningTrackerForm}
                initialData = {isEditing} /> 
              </Modal>
             )}
        </div>
    
   <div className="mt-4 flex flex-col gap-3">
    {Object.entries(groupedCategory).map(([categoryName, categoryRecords]) => {
     const groupedTechnology = Object.groupBy(categoryRecords, (item) => item.technology)
     const totalEntries = categoryRecords.length
     return (
    <div key={categoryName} className="px-2">

    {/* Category card */}
    <div
       onClick={() => toggleCategory(categoryName)}
       className="flex items-center justify-between bg-sandbox-navy text-sandbox-ghost p-4 my-4 rounded-lg cursor-pointer">
       <span className="font-semibold text-lg">{categoryName}</span>
       <div className="flex items-center gap-3">
      <span className="text-sm opacity-70">{totalEntries} {totalEntries === 1 ? 'Entry' : 'Entries'}</span>
      <span className={`transition-transform duration-200 ${categoryOpen[categoryName] ? 'rotate-180' : ''}`}>▼</span>
      </div>
      </div>

     {/* Technology cards */}
     {categoryOpen[categoryName] && (
    <div className="mt-2 flex flex-col gap-2">
    {Object.entries(groupedTechnology).map(([technologyName, technologyRecords]) => {
      if (technologyRecords.length === 0) return null

      const currentPage = techCurrentPage[technologyName] || 1
      const lastIndex = currentPage * recordsPerPage
      const firstIndex = lastIndex - recordsPerPage
      const paginatedRecords = technologyRecords.slice(firstIndex, lastIndex)
      const totalPages = Math.ceil(technologyRecords.length / recordsPerPage)
      return (
    <div key={technologyName}>
    {/* Technology card */}
    <div
      onClick={(e) => { e.stopPropagation(); toggleTechnology(technologyName) }}
      className="flex items-center justify-between bg-white text-sandbox-navy border border-sandbox-navy p-2 gap-4 rounded-lg cursor-pointer">
      <span className="font-medium">{technologyName}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">{technologyRecords.length} {technologyRecords.length === 1 ? 'Entry' : 'Entries'}</span>
        <span className={`transition-transform duration-200 ${technologyOpen[technologyName] ? 'rotate-180' : ''}`}>▼</span>
      </div>
  </div>

    {/* Entry cards */}
    {technologyOpen[technologyName] && (
     <div>
       <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {paginatedRecords.map((record) => (
          <ReusableCard key={record.id}>
     <p className="font-semibold py-0.5">Date: <span className="font-normal">{record.date}</span></p>
     <p className="font-semibold py-0.5">Hours Spent: <span className="font-normal">{record.hours} Hours</span></p>
     <p className="font-semibold py-0.5">Concept: <span className="font-normal">{record.concept}</span></p>
      <ViewMoreButton onClick={(e) => { e.stopPropagation(); handleViewMore(record) }} />
    </ReusableCard>
    ))}
  </div>
  {totalPages > 1 && (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={(page) => handleCurrentPage(technologyName, page)}
  />
  )}
     </div>
 )}
</div>
      )
        
       })}
       </div>
        )}

     </div>
        )
          })}
        </div>
        
{openDetailModal && selectedRecord && (
  <DetailModal className="min-w-md"
  data={selectedRecord}
  onClose={closeDetailModal}
  fields={[
  { key: "date", label: "Date" },
  { key: "hours", label: "Hours Spent" },
  {key: "topic", label: "Concept Mastered"},
  { key: "category", label: "Category" },
  { key: "technology", label: "Focus Area" },
  { key: "concept", label: "Concept" },
  { key: "outcome", label: "key outcome" },
  { key: "description", label: "Notes / Description" },
    ]}
    onEdit={() => openEditLearningForm(selectedRecord)}
    onDelete={() => openDeleteConfirmation(selectedRecord)}
          />
        )}
      </div>
      <ConfirmModal
    isOpen={confirmOpen}
    title={`Delete `}
    message={`Are you sure you want to delete "${itemToDelete?.concept}"`}
    confirmText={"Delete"}
    cancelText={"Cancel"}
    type="danger"
    onConfirm={handleConfrimDelete}
                  onCancel={handleCancelDelete}
        />
     </div>
  )
}

export default LearnTrack


