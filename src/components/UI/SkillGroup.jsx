import ActionsButton from "./ActionsButton"
import { useState } from "react";
import { Check, X} from 'lucide-react';


function SkillGroup({label, items, variant, onAddSkill, onDeleteSkill}) {
   const [showInput, setShowInput] = useState(false)
   const [newSkill, setNewSkill] = useState("")// to add new

   

   const showInlineInput = () => setShowInput(true)

   const handleChange = (e) => {
      const value = e.target.value
      const capitalize = value.charAt(0).toUpperCase() + value.slice(1)
      setNewSkill(capitalize)
   }

   const handleAdd = () => {
      
      const trimmed = newSkill.trim()
      if (trimmed) {
         onAddSkill(trimmed)
      }
      setNewSkill("")
      setShowInput(false)
     
   }

   const handleKeyDown = (event) => {
      if (event.key === "Enter") {
         handleAdd()
      }else if (event.key === "Escape") {
         setNewSkill("")
         setShowInput(false)
      }
   }
   const Max_Skill = 8;
   const isLimit = (items ?? []).length >= Max_Skill;

  return (
    <div className="flex flex-col w-full"> 
     <div className="flex items-center justify-between">
       <div className="flex items-center gap-3 flex-wrap">
      <p className="text-sm text-gray-800 font-semibold">{label}</p>
    <div className="flex flex-wrap gap-2 relative">
         {(items ?? []).map((item) => (
            <span key={item} className={`flex gap-1 text-xs px-2 py-0.5 rounded-full ${variant === "primary" ? "bg-sandbox-navy/10 text-sandbox-navy" : "bg-gray-200 text-gray-500"}`}>
               {item}
               <button onClick={() => onDeleteSkill(item)} className="hover:cursor-pointer">
                  <X size={14} />
               </button>
            </span>
         ))}
      </div>
      
     
        
      </div>
      <div className="ml-auto">
         <ActionsButton 
      actions={[
      {label: "+", type:"ghost", onClick: showInlineInput, disabled:isLimit}
      ]}/>
      </div>
     </div>
     {isLimit && (<p>Maximum of {Max_Skill} skills reached</p>)}

      {/* inline input field */}
      {showInput && !isLimit && (
        <div className="relative flex items-center w-fit">
          <input
         type="text"
         onChange={handleChange}
         placeholder="Add new skill"
         value={newSkill}
         className="text-xs px-3 py-1 border border-gray-300 rounded-full focus:outline-none focus:border-sandbox-navy min-w-[160px] pr-11"
         onBlur={handleAdd}
         onKeyDown={handleKeyDown}
         autoFocus
         />
         <button onMouseDown={handleAdd} className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-sandbox-navy text-sandbox-ghost hover:bg-sandbox-navy/80 hover:cursor-pointer">
           <Check />
         </button>
        </div>
      )}
      
    </div>
  )
}

export default SkillGroup