
import ProjectJournalFields from "./ProjectJournalFields"
import MyForm from "../UI/ReusableForm/MyForm"
import FormText from "../UI/ReusableForm/FormText"
import SecondaryButton from "../UI/SecondaryButton"


function ProjectJournalForm({onAddProjectRecord, initialProjectJournalData}) {

  const handleSubmit = (data) => {
      onAddProjectRecord(data)
      

  }
  return (
  
      <MyForm onSubmit={handleSubmit}
      defaultValues = {initialProjectJournalData ? {...initialProjectJournalData} :  {projectRecord:""}
      } >
      <FormText
      title={"Documenting the Why Behind the Build"}
      text={"Beacuse the process matters as much as the final outcome"}
      />
     
        <ProjectJournalFields 
        initialProjectJournalData={initialProjectJournalData}
        />
      
    <SecondaryButton lable={initialProjectJournalData ? "Update": "Record It"} />
    </MyForm>
      
    
  )
}

export default ProjectJournalForm