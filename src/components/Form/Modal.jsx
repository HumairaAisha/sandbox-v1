import {X} from  'lucide-react'

function Modal({children, onClose, className}) {
  return (
    <div className='pt-6 fixed inset-0 flex justify-center items-center z-30 text-sandbox-navy bg-black/70'>
      <div className={`max-h-[90vh] overflow-y-auto shadow-lg bg-sandbox-ghost ${className || ''}`}>
         
   <button onClick={onClose} className='hover:cursor-pointer '>
      <X />
   </button>
   {children}
      </div>
    </div>
  )
}

export default Modal