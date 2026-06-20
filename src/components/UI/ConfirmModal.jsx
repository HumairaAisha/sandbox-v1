import { X } from 'lucide-react'


function ConfirmModal({isOpen, onCancel, onConfirm,
   title, message, confirmText,  cancelText = "Cancel", type = "danger", 
}) {
   if (!isOpen) return null
   const confirmStyle = {
       danger: "bg-red-600 hover:bg-red-700 text-white",
      primary: "bg-green-600 hover:bg-blue-700 text-white"
   }


  return (
   <div className="fixed inset-0 z-20 flex items-center bg-sandbox-navy/35 justify-center">
      <div className="bg-sandbox-ghost rounded flex flex-col p-6">
         <h3 className='text-center font-semibold text-xl py-2'>{title}</h3>
         <p>{message}</p>
         <div className='flex gap-6 py-4 items-center justify-center'>
              <button onClick={onCancel} className= {`bg-gray-400 text-sandbox-ghost rounded px-2 py-1 hover:bg-gray-500 hover:cursor-pointer transition`}>{cancelText}</button>
            <button onClick={onConfirm} className={`rounded px-2 hover:cursor-pointer transition py-1 ${confirmStyle[type]}`}>{confirmText}</button>
          
         </div>
       
     </div> 
   </div>
  )
}

export default ConfirmModal