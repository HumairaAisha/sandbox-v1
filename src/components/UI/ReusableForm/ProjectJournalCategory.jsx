
import { useFormContext } from "react-hook-form"
import SelectOptionField from "./SelectOptionField"

function ProjectJournalCategory({projectRecord}) {
   const {watch} = useFormContext()
    
   const selectedProject = watch("projectName")

   const  projectOption = projectRecord.map((project => ({ value: project.projectName, 
    label:project.projectName})))

   //const projectEntry = projectRecord.find(project => project.projectName === selectedProject)

   
   
  return (
    <div className="flex flex-col gap-4">
      <SelectOptionField
      name={"projectName"}
      label={"Project Name"}
      options={projectOption}
      />
    </div>
  )
}

export default ProjectJournalCategory