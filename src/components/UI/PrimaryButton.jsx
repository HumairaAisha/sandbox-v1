
function PrimaryButton({onClick, label}) {
  return (
     <div className="flex justify-end px-4 items-center -my-2 mb-1 pt-4 md:pt-0">
       <button onClick={onClick} className="bg-sandbox-ghost text-sandbox-navy px-1.5 py-1 rounded font-semibold hover:cursor-pointer">
      {label}
      </button>
     </div>
     
    
  )
}

export default PrimaryButton