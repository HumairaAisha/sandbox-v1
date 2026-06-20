import { useState } from "react"
import useLocalStorage from "../../../components/data/useLocalStorage"
import ActionsButton from "../../../components/UI/ActionsButton"
import BioDataForm from "../forms/BioDataForm"
import ReusableCard from "../../../components/UI/ReusableCard"
import Modal from "../../../components/Form/Modal"



function BioData() {
   const [openBioData, setOpenBioData] = useState(false)

   const openBioDataModal = () => {
      setEditing(currentBio)
      setOpenBioData(true)
      
   }

   const closeBioDataModal = () => {
      setOpenBioData(false)
      setEditing(null)
   }

   const [editing, setEditing] = useState(null)

   const [bioData, setBioData] = useLocalStorage("bioData", []) 


   const handleAdd = (newBioData) => {
     setBioData([ {...newBioData, id:Date.now() }]);
     closeBioDataModal()
   }
   const handleEdit = (updateBioData) => {
    setBioData([{ ...updateBioData, id: bioData[0]?.id || Date.now() }]) 
   closeBioDataModal()
}

   const currentBio = bioData[0]


  return (
      <ReusableCard className="h-full">
         <div className="flex justify-between">
            <p>About Me</p>
            <ActionsButton 
            actions={[
               {label: currentBio ? "Edit" : "Add", type: "primary", onClick: openBioDataModal}
            ]}/>
         </div>
          <div className="bg-[#3c4a69] w-full h-0.5 my-1.5"></div>

          {bioData.length > 0 ? (
            <div>
               {bioData.map((item) => (
                  <div key={item.id}>
                     <p>{item.bio}</p>

                  </div>
               ))}
            </div>
          ) : (
            <p className="text-sm italic text-gray-500 py-2">No bio added yet</p>
          )}

          {openBioData && (
            <Modal onClose={closeBioDataModal} className="w-xl">
               <BioDataForm onAddBioData={editing ? handleEdit : handleAdd}
               initialData = {editing}
               />
            </Modal>
          )

          }
            
      </ReusableCard>
  
  )
}

export default BioData