import { useContext, useState } from "react"
import { DashboardStatsContext } from "../CustomHook/DashboardStatsContext"

import Modal from "../components/Form/Modal"
import ChallengeJournalForm from "../components/Form/ChallengeJournalForm"
import PrimaryButton from "../components/UI/PrimaryButton"
import Heading from "../components/UI/Heading"
import ReusableCard from "../components/UI/ReusableCard"
import DetailModal from "../components/UI/DetailModal"
import ViewMoreButton from "../components/UI/ViewMoreButton"
import toast from "react-hot-toast"




function Challenges() {
  
  const [modalOpen, setModalOpen] = useState(false)
  const [openCategory, setOpenCategory] = useState({})
  const [openTechnology, setOpenTechnology] = useState({})
  const [currentTechPage, setCurrentTechPage] = useState({})
  const [isEditing, setIsEditing] = useState(null)
  const [selectedChallengeRecord, setSelectedChallengeRecord] = useState(null)
  const [openDetailModal, setOpenDetailModal] = useState(false)



  const openChanllengeForm = () => {
    setModalOpen(true)
    setIsEditing(null)
  }
  const closeChallengeForm = () => {
    setModalOpen(false)
    setIsEditing(null)
  }

  const handleEditForm = (item) => {
    setIsEditing(item)
    setModalOpen(true)
    closeChallengeForm()
  }


  const {challengeRecords: newUpdatedChallengeRecords, setChallengeRecords: setNewUpdatedChallengeRecords} = useContext(DashboardStatsContext)

  const handleChallenge = (newChallengeRecord) => {

      const updateChallengeRecord = [...newUpdatedChallengeRecords, {...newChallengeRecord, id:Date.now()}]

      setNewUpdatedChallengeRecords(updateChallengeRecord)
      toast.success('New Challenge Fixed. \n Growth Documented!')

  }

   
  const handleViewMore = (newUpdatedChallengeRecords) => {
    setSelectedChallengeRecord(newUpdatedChallengeRecords)
    setOpenDetailModal(true)

  }
  const handleCloseDetailModal = () => {
    setSelectedChallengeRecord(null)
    setOpenDetailModal(false)
  }

  const handleEditJournal = (updatedChallengeRecord) => {
    setNewUpdatedChallengeRecords((challenge) => challenge.map((item) => (
      item.id === isEditing?.id ? {...updatedChallengeRecord, id: item.id} : item )))
      toast.success("Chanllenge Journal Updated Successfully")
  }

  const toggleCategory = (categoryName) => {
    setOpenCategory((category) => ({
      ...category, [categoryName] : !category[categoryName]
    }))
  }

  const toggleTechnology = (technologyName) => {
    setOpenTechnology((tech) => ({
      ...tech, [technologyName] : !tech[technologyName]
    }))
  } 

  const handleCurrentPage = (technologyName, page) => {
    setCurrentTechPage((prev) => ({
      ...prev, [technologyName] : page
    }))
  }
    const chanllengePerPage = 12 
     const sortedChallengeRecords = [...newUpdatedChallengeRecords].sort((a, b) => new Date(a.date) - new Date(b.date))
     const groupedCategory =  Object.groupBy(sortedChallengeRecords, (item) => item.challengeCategory)
  return (
    <div className="min-h-screen bg-sandbox-ghost p-4">
      <div className="bg-sandbox-navy rounded-lg text-sandbox-ghost p-2 m-2">
      <Heading title={"Your Challenge Footprints"}
      text={"Every challenge was a teacher revealing growth hidden in the details."}
      tagline={"Each fix tells more than a story of lessons learned; it speaks of patience, curiosity, and quiet breakthroughs"}/>
    
     <PrimaryButton 
     label={"Note It"}
     onClick={openChanllengeForm}/>
      {modalOpen && (
        <Modal onClose={closeChallengeForm}>
          <ChallengeJournalForm key="challenge-form"
          onAddChallenge = {isEditing ? handleEditJournal : handleChallenge} closeForm={closeChallengeForm}
          initialChallengeData = {isEditing}/>

        </Modal>
      )}
     
      </div>

      <div className="py-2">
    {Object.entries(groupedCategory).map(([categoryName, catergoryRecords]) => {
      const groupedTechnology = Object.groupBy(catergoryRecords, (item) => item.challengeTechnology)
      const totalEntries = catergoryRecords.length
      return (
        <div key={categoryName} className="px-2">
      <div onClick={() => toggleCategory(categoryName)} 
      className="flex items-center justify-between bg-sandbox-navy text-sandbox-ghost p-4 rounded-lg cursor-pointer my-4">
        <span>{categoryName}</span>
          <div className="flex items-center gap-3">
        <span>{totalEntries} {totalEntries === 1 ? 'Entry' : 'Entries'}</span>
        <span className={`transition-transform duration-200 ${openCategory[categoryName] ? 'rotate-180' : ''}`}>▼</span>
  </div>
    </div>
    {openCategory[categoryName] && (
      <div className="mt-2 flex flex-col gap-4">
        {Object.entries(groupedTechnology).map(([technologyName, technologyRecords]) => {
        if (technologyRecords.length === 0) return null
        const currentPage = currentTechPage[technologyName] || 1
    const lastIndex = currentPage * chanllengePerPage
    const firstIndex = lastIndex - chanllengePerPage
    const paginatedRecords = technologyRecords.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil(technologyRecords.length / chanllengePerPage)
    
    return (
      <div key={technologyName}>
        {/* Tech Card */}
        <div onClick={(e) => {e.stopPropagation(); toggleTechnology(technologyName) }}
          className="flex items-center justify-between bg-white text-sandbox-navy border border-sandbox-navy p-2 gap-4 rounded-lg cursor-pointer">
              <span>{technologyName}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">{technologyRecords.length} {technologyRecords.length === 1 ? "Entry" : 'Entries'}</span>
                <span className={`transition-transform duration-200 ${openTechnology[technologyName] ? 'rotate-180' : ''}`}>▼</span>
              </div>
              </div>
                {/* Entry Cards  */}
                    {openTechnology[technologyName] && (
                      <div>
                        <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {paginatedRecords.map((challenge) => (
                          <ReusableCard key={challenge.id}>
                           <p className="font-semibold py-0.5">Date: <span className="font-normal">{challenge.date}</span></p>
                           <p className="font-semibold py-0.5">Issue Title <span className="font-normal">{challenge.issueTitle}</span></p>
               <p className="font-semibold py-0.5">Challenge Type: <span className="font-normal">{challenge.challenge}</span></p>
              
              <ViewMoreButton onClick={(e) =>{e.stopPropagation(); handleViewMore(challenge)}}/>
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
      {openDetailModal && selectedChallengeRecord && (
        <DetailModal
        data={selectedChallengeRecord}
        onClose={handleCloseDetailModal}
        fields={[
          {key: "date", label: "Date"},
          {key: "issueTitle", label: "Issue Title"},
          {key: "challengeCategory", label: "Challenge Type"},
          {key: "challengeTechnology", label: "Technolgy"},
          {key: "challenge", label: "Challenge Type"},
          {key: "issueSummary", label: "Issue Summary"},
          {key: "rootCause", label: "Root Cause"},
          {key: "solution", label: "Solution"},
          
        ]}
        onEdit={handleEditForm}
        />
      )}
    </div>
  )
}

export default Challenges