import { useFormContext } from "react-hook-form"
import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp }  from 'lucide-react'

import SelectOptionField from "../UI/ReusableForm/SelectOptionField"
import TextAreaField from "../UI/ReusableForm/TextAreaField"
import InputField from "../UI/ReusableForm/InputField"
import ReflectionSection from "./ReflectionSection"


function ProjectJournalFields({initialProjectJournalData}) {
   const [projectRecord, setProjectRecord] = useState([])
   const [collapseReflection, setCollapseReflection] = useState(false)

   const { watch } = useFormContext()
   const selectedProject = watch('projectId')
   const selectedOption = (projectRecord || []).map(project => ({
    value: project.id, 
    label: project.projectName
  })) 

  const projectStausOption = ["In Progress", "Paused", "Completed", "Archived"].map(projectStatus => ({
   value: projectStatus,
   label: projectStatus
  }))
  


  useEffect(() => {
   const stored = localStorage.getItem('sandbox:projectRecord')
   if (stored) {
      setProjectRecord(JSON.parse(stored))
   }
  }, [])
  const projectStatus = watch("projectStatus")

   
  return (
    <div>
      <div className="flex justify-between">
         <InputField 
         type={"date"}
         name={"startDate"}
         label={"Start Date"}
         required={true}
         />

         <InputField
         type={"date"}
         name={"endDate"}
         label={"End Date"}
         required={false}
         />
      </div>
      {initialProjectJournalData ? <InputField type={"text"}
      name={"projectName"}
      label={"Project Name"}
      disabled={true}/> : 
      <SelectOptionField
      name={"projectId"}
      label={"Project Name"}
      options={selectedOption}
      requiredMessage="select a project"
      />}
      
      {initialProjectJournalData ?  "" :<p className="text-xs text-red-700 mb-4">You are required to first select a project name </p>}
      
      <SelectOptionField
      name={"projectStatus"}
      label={"Project Status"}
      options={projectStausOption}
      required={true}
      disabled={!selectedProject}
      />
      
       {projectStatus === "Completed" && (
         <button type="button" onClick={() => setCollapseReflection(!collapseReflection)} className="flex py-2 hover:cursor-pointer">
          {collapseReflection ? <ChevronUp/> : <ChevronDown/>} 
          {collapseReflection ? "Hide Reflection" : "Add Reflection"}
          
        </button>
       )}
        {collapseReflection && (
          projectStatus === "Completed" && <ReflectionSection/>
        )}
       <TextAreaField
      name={"coreFeatures"}
      label={"Core Features"}
      placeholder={"The key features built (user authentication, payment)"}
      disabled={!selectedProject}
      required={true}
      />
            
      <TextAreaField
      name={"projectDescription"}
      label={"Project Description"}
      placeholder="What did you build and what problem were you solving?"
      disabled={!selectedProject}
      required={true}
      />

    </div>
  )
}

export default ProjectJournalFields