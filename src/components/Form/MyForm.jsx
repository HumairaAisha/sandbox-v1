import { useState } from "react"
import toast from "react-hot-toast"
import learningData from "../data/LearningData.json"

function MyForm({onAddRecord,closeForm}) {
   const formData = {
      date: '',
      hours:'',
      topic: '',
      category: '',
      tech: '',
      concept: '',
      description: '',
      
   }
   const [formValue, setFormValue] = useState(formData)
   //const [error, setError] = useState ('')
   const [selectedCategory, setSelectedCategory] = useState('')
   const [selectedTech, setSelectedTech] = useState('')
   const [selectedConcept, setSelectConcept] = useState('')
   
   const handleCategoryChange = (event) => {
      const value = event.target.value;
      setSelectedCategory(value)
      setSelectedTech('')
      setSelectConcept('')
      setFormValue({ ...formValue, category: value });
   }

   const handleTechChange = (event) => {
      const value = event.target.value;
      setSelectedTech(value)
      setSelectConcept('')
      setFormValue({ ...formValue, tech: value });
   }
   const handleConceptChange = (event) => {
      const value = event.target.value;
      setSelectConcept(value)
      setFormValue({ ...formValue, concept: value });
   }

   const handleChange = (event) => {
      setFormValue({...formValue, [event.target.name] : event.target.value})
      toast.dismiss()
   }
   const handleSubmit= (event) => {
      event.preventDefault();
      const {date, hours, topic, category,tech, concept, description} = formValue
      if (!date || !hours || !topic|| !category || !tech || !concept|| !description) {
         toast.error('All fields are required!')
         //setError('All fields are required')
         return
         //pass data to parent form then child
      } onAddRecord(formValue)
      
      //setError('')
     
      toast.success('New Learning Progress Log!')
      setTimeout(() => {closeForm()}, 800);
      setFormValue(formData)
      
   }

  return (
    <div>
      <div className="flex flex-col px-4 py-2">
         <form onSubmit={handleSubmit}>
         <h3 className="font-bold text-xl text-center">Document What You Learned</h3>
         <p className="text-center pb-4">Because every step in learning tells a story</p>
         
           <div className="flex justify-between">
            <div className="flex gap-1.5 py-2">
            <label htmlFor="date" className="font-semibold">Date</label>
            <input type="date" name="date" value={formValue.date} onChange={handleChange} className="border border-gray-400 bg-gray-200 text-sm rounded"/>
           </div>
           <div className="flex gap-2 py-2">
            <label htmlFor="hours" className="font-semibold">Hours Spent</label>
            <input type="number" name="hours" value={formValue.hours} onChange={handleChange} className="p-1 w-[50px] h-[30px] border border-gray-400 bg-gray-200 text-sm rounded"/>
           </div>
           </div>
            <div className="flex flex-col gap-1.5 py-2">
            <label htmlFor="topic" className="font-semibold">What I Learn</label>
            <input type="text" name="topic" value={formValue.topic} onChange={handleChange} className="py-2 px-2 border border-gray-400 bg-gray-200 text-sm rounded" />
           </div>
           <div className="flex flex-col gap-1.5 ">
            <label htmlFor="category" className="font-semibold pt-2">Category</label>
            <select value={selectedCategory} onChange={handleCategoryChange} className="py-1 border border-gray-400 bg-gray-200 text-sm rounded">
               <option value="">Select Category</option>
              {Object.keys(learningData).map((category) => (
               <option key={category} value={category}>
                  {category}
               </option>
              ))}
            </select>
           </div>

            <div className="flex flex-col gap-1.5">
            <label htmlFor="category" className="font-semibold pt-2">Tech Stack</label>
            <select value={selectedTech} onChange={handleTechChange} disabled={!selectedCategory} className="py-1 border border-gray-400 bg-gray-200 text-sm rounded">
               <option value="">Select Technology</option>
              {selectedCategory && 
               Object.keys(learningData[selectedCategory]).map((tech) => (
               <option key={tech} value={tech}>
                  {tech}
               </option>
               )) 
            }
            </select>
           </div>
           <div className="flex flex-col gap-1.5">
            <label htmlFor="category" className="font-semibold pt-2">Select Concept</label>
            <select value={selectedConcept} onChange={handleConceptChange} disabled={!selectedTech} className="py-1 border border-gray-400 bg-gray-200 text-sm rounded">
               <option value="">Select Concept</option>
              {selectedCategory && selectedTech &&
               learningData[selectedCategory][selectedTech].map((concept) => (
               <option key={concept} value={concept}>
                  {concept}
               </option>
               )) 
            }
            </select>
           </div>
          
           <div className="flex flex-col gap-1.5 py-2">
            <label htmlFor="description" className="font-semibold">Concept Note</label>
            <textarea type="text" name="description"  value={formValue.description} rows={3} onChange={handleChange}  className="px-2 py-1.5 h-[100px] border border-gray-400 bg-gray-200 text-sm rounded">
            </textarea>
           </div>
           {/* <div className="flex flex-col">
            <label htmlFor="featureBuilt" className="font-semibold">Feature Built</label>
            <textarea type='text' name="featureBuilt" value={formValue.featureBuilt} onChange={handleChange} className="px-2 py-1.5 h-[100px] border border-gray-400 bg-gray-200 text-sm rounded"></textarea>
           </div> */}
            <div className="flex justify-end">
                <button type="submit" className="bg-[#0F172A] text-white font-semibold px-2 py-1.5 my-2 rounded hover:cursor-pointer">Record It</button>
            </div>
          
         </form>
        {/*  {error && (
            <p className="text-sm text-red-700 -py-4">{error}</p>
         )} */}
      </div>
    </div>
  )
}

export default MyForm