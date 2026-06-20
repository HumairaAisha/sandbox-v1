import { useState } from "react"
import toast from "react-hot-toast"

function ChallengeForm({onAddChallenge, closeForm}) {
   const formData = {
      date: '',
      issueTitle: '',
      categoryType: '',
      issueSummary: '',
      rootCause: '',
      solution: '',
   }
   const [formInput, setFormInput] = useState(formData)
   //const [error, setError] = useState('')

   const handleChange = (event) => {
      setFormInput({...formInput, [event.target.name] : event.target.value})
      toast.dismiss()

   }
   const handleSubmit = (event) => {
      event.preventDefault();
      const {date, issueTitle, categoryType, issueSummary, rootCause, solution} = formInput
      if (!date || !issueTitle || !categoryType || !issueSummary || !rootCause || !solution) {
         toast.error('All field are required')
         return

      } onAddChallenge(formInput)
      
      toast.success('New Challenge Fixed. \n Growth Documented!')
      setTimeout(() => {
         closeForm()}, 300);
      setFormInput(formData)
   }
   const categories = ["Logic Issue ","UI Bug","State/Effect", "Component/Props","Layout/Styling", "Form Handling",
      "Routing","Implementation Roadblock", "Execution Challenge","Structure Uncertainty", "Environment", "Performance", "Other"
   ]

  return (
    <div>
      <div className="flex flex-col px-4 py-2">
      <form onSubmit={handleSubmit}>
         <h3 className="font-bold text-xl text-center py-2">Document What You Fixed</h3>
         <p className="text-center pb-4 italic text-sm">Because every fix carries a story of patience, persistence, and growth.</p>
         <div className="flex gap-1.5 py-2">
            <label htmlFor="date" name="date" className="font-semibold">Date</label>
            <input type="date" name="date" value={formInput.date} onChange={handleChange} className="border border-gray-400 bg-gray-200 text-sm rounded"/>
         </div>
         <div className="flex flex-col gap-1.5 py-2">
            <label htmlFor="issueTitle" name="issueTitle" className="font-semibold">Issue Title</label>
            <input type="text" name="issueTitle" value={formInput.issueTitle} onChange={handleChange} className="p-1 border border-gray-400 bg-gray-200 text-sm rounded" />
         </div>
         <div className="flex flex-col gap-1.5 py-2">
            <label htmlFor="category" name="categoryType" className="font-semibold">Category</label>
            <select name="categoryType" value={formInput.categoryType} onChange={handleChange} className="py-1 border border-gray-400 bg-gray-200 text-sm rounded">
               <option value="">Select Category</option>
               {categories.map((category) => (
                  <option key={category} value={category}>
                     {category}
                  </option>
               ))}
            </select>
         </div>
         <div className="flex flex-col gap-1.5 py-2">
            <label htmlFor="issueSummary" name="issueSummary" className="font-semibold">Issue Summary</label>
            <textarea type="text" name="issueSummary" value={formInput.issueSummary} onChange={handleChange} className="px-2 py-1.5 h-[100px] border border-gray-400 bg-gray-200 text-sm rounded"/>
         </div>
         <div className="flex flex-col gap-1.5 py-2">
            <label htmlFor="rootCause" name="rootCause"  className="font-semibold">Root Cause</label>
            <textarea type="text" name="rootCause" value={formInput.rootCause} onChange={handleChange} className="px-2 py-1.5 h-[100px] border border-gray-400 bg-gray-200 text-sm rounded"/>
         </div>
         <div className="flex flex-col gap-1.5 py-2">
            <label htmlFor="solution" name="solution" className="font-semibold">Solution</label>
            <textarea type="text" name="solution" value={formInput.solution} onChange={handleChange} className="px-2 py-1.5 h-[100px] border border-gray-400 bg-gray-200 text-sm rounded"/>
         </div>
         <div className="flex justify-end">
            <button className="bg-[#0F172A] text-white font-semibold px-2 py-1.5 my-2 rounded hover:cursor-pointer">Record It</button>
         </div>
      </form>
      {/* {error && 
      <span className="text-sm text-red-700 -py-4">{error}</span>} */}
      </div>
    </div>
  )
}

export default ChallengeForm