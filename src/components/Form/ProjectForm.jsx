import MyForm from "../UI/ReusableForm/MyForm"
import FormText from "../UI/ReusableForm/FormText"
import InputField from "../UI/ReusableForm/InputField"
import InputFieldNum from "../UI/ReusableForm/InputFieldNum"
import InputFieldUrl from "../UI/ReusableForm/InputFieldUrl"
import TextAreaField from "../UI/ReusableForm/TextAreaField"
import ImageInput from "../UI/ReusableForm/ImageInput"
import SecondaryButton from "../UI/SecondaryButton"
import toast from "react-hot-toast"


function ProjectForm({onAddProject, initialProjectData}) {
   const handleSubmit = (data) => {  
    if (!data.demoUrl && !data.repoUrl) {
      toast.error("please add at least a demo or a repo link")
      return
    }
    const file = data.imageFile?.[0]
      // console.log("Form submitted:", data)
       if (!file || !(file instanceof File)) {
        onAddProject({
          ...data, image: initialProjectData?.image || null,
          
        }) 
        return
       }
       //convert to string 
       const reader =  new FileReader()
       reader.onloadend = () => {
        //const base64Image = reader.result
         onAddProject({
      ...data,
      image: reader.result,
    })
    
      setTimeout(() => {}, 1000);
       }
   
   reader.readAsDataURL(file)

   
   }
  return (
    <div>
      <MyForm onSubmit={handleSubmit}
      defaultValues={initialProjectData || {projectRecord : ""}}
      >
         <FormText
         title={"Documenting Work That Matters"}
         text={"Because every project tells a story of challenges overcome and lessons learned"}
         />
       <div className="mb-4">
         <ImageInput/>
       </div>

         <InputField
         name={"projectName"}
         label={"Project Name"}
         type={"text"}
         required={true}
         />
         <InputFieldUrl 
         name={"demoUrl"}
         label={"Demo URL"}
         type={"url"}
         />

         <InputFieldUrl
         name={"repoUrl"}
         label={"GitHub Repo link"}
         type={"url"}
         />
                <p className="text-xs">Add at least one link, a live demo, a repository, or both.</p>
        <SecondaryButton lable={initialProjectData ?  "Update":"Record It"} />
      </MyForm>
    </div>
  )
}

export default ProjectForm