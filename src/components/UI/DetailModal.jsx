import {X} from  'lucide-react'
import ActionsButton from './ActionsButton'
import { Pencil, Trash2 } from 'lucide-react';
function DetailModal({data, fields, onClose, onEdit, onDelete, className}) {

  const actions = [
        {label: "Edit", type: "neutral",  onClick: onEdit},
        {label: "Delete", type: "danger",  onClick: onDelete}
        ]
  const filtertedArray = actions.filter(action => action.onClick)
  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
    <div className={`bg-white rounded-lg shadow-lg max-h-[90vh] overflow-y-auto  ${className || ''}`}>
      <div className='flex justify-end'>
   <button onClick={onClose} className='hover:cursor-pointer '>
     <X/>
   </button>
      </div>
      <h2 className='text-center font-semibold text-xl py-2'>Details</h2>
    
       <div className='p-4'>
    {fields.map((field) => (
      data[field.key] && (
        <div key={field.key}>
      <p className='font-semibold py-0.5 text-[#0A1A29]'>{field.label}: <span className='font-normal'>{data[field.key]}</span> </p>
    </div>
      )
      
    ))}
       </div>
       {filtertedArray.length > 0 && 
       <div className='flex items-center justify-center py-4'>
         <ActionsButton actions={filtertedArray} />
       </div>
      
      }
  
    </div>
  
    </div>
  )
}

export default DetailModal