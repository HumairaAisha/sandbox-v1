import ReusableCard from "../../../components/UI/ReusableCard"
import ActionsButton from "../../../components/UI/ActionsButton"
import EducationForm from "../forms/EducationForm"
import Modal from "../../../components/Form/Modal"
import useLocalStorage from "../../../components/data/useLocalStorage"
import { useState } from "react"
import { Pencil, Trash2 } from 'lucide-react';
import ConfirmModal from "../../../components/UI/ConfirmModal"
import toast from "react-hot-toast"


function Education() {
  const [experience, setExperience] = useLocalStorage("experience", [])

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isEditing, setIsEditing] = useState(null)

  const [isconfirmOpen, setIsConfirmOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState(null)

  const openForm = () => {
    setIsOpenModal(true)
    setIsEditing(null)
  }

  const openEditForm = (item) => {
    setIsEditing(item)
    setIsOpenModal(true)
  }
  const closeForm = () => {
    setIsOpenModal(false)
    setIsEditing(null)
  }

  

  const handleAdd = (newExperience) => {
    setExperience ((exp) => [...exp, {...newExperience, id: Date.now() }])
    toast.success("Add Successfully!")
    closeForm()
  }

  const handleEdit = (updateExperience) => {
    setExperience((exp) => exp.map((item) => (
      item.id === isEditing?.id ? {...updateExperience, id:item.id} : item
    )))
    toast.success("Changes Saved!")
    closeForm()
  }
  const openDeleteConfirm = (item) => {
    setItemToDelete(item)
    setIsConfirmOpen(true)

  }

  const handleConfirmDelete = () => {
    setExperience((exp) => exp.filter((item) => item.id !== itemToDelete.id)) 
    setItemToDelete(null) // to clear the item 
    setIsConfirmOpen(false)
    toast.success("Delete Successful")
   
    
  }

  const handleCancelDelete = ()  => {
    setItemToDelete(null)
    setIsConfirmOpen(false)
  }

  return (
      <ReusableCard className="h-full">
   <div className="flex flex-col">
       <div className="flex justify-between items-center">
          <h3>Education/Experience</h3>
       <ActionsButton actions={[{label: "Add", type:"primary", onClick: openForm}]}
       />
        </div>
    <div className="bg-[#3c4a69] w-full h-0.5 my-1.5"></div>

        {experience.length > 0 ? (
          <div>
            <div className="flex flex-col gap-1 overflow-y-auto max-h-48 pr-1">
            {experience.map((item) =>
         
              <div key={item.id} className="flex flex-col gap-1 py-1.5">
                 
               <div className="flex gap-2">
                <div className="bg-[#3c4a69] w-0.5 h-12 my-1.5"></div>
                <div className="flex justify-between gap-4">
                  <div className="flex flex-col">
              <p>{item.experience}</p>
              <div className="flex justify-between py-1.5 gap-10 w-full">
              <p>{item.startYear} - {item.endYear}</p>
              <ActionsButton actions={[
                  {label: "Edit", type: "ghost", icon:Pencil, onClick: () => openEditForm(item)},
                  {label: "Delete", type: "danger", icon: Trash2, onClick: () => openDeleteConfirm(item)}
                  ]}  className="flex items-start gap-2"/>
              </div>
              </div>
                </div>
                  
               </div>
              
            
             </div>
           
       
            )}
            
          </div>
          </div>
        ) : (
          <p className="text-sm italic text-gray-500 py-2">No Experinece yet add one</p>
        )}
      {isOpenModal && 
      <Modal onClose={closeForm} className="w-2xl">
        <EducationForm
        onAddEduData={isEditing ? handleEdit : handleAdd}
        initialData={isEditing}
        />
        </Modal>
        
        }
   </div>

   <ConfirmModal
   isOpen={isconfirmOpen}
   title={"Delete Experience"}
   message={`Are you sure you want to delete "${itemToDelete?.experience}"?`}
   confirmText={"Delete"}
   type="danger"
   onCancel={handleCancelDelete}
   onConfirm={handleConfirmDelete}
   
   />
      </ReusableCard>
  
  )
}

export default Education