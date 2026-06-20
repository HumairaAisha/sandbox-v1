import MyForm from "../../../components/UI/ReusableForm/MyForm"
import InputField from "../../../components/UI/ReusableForm/InputField"
import SecondaryButton from "../../../components/UI/SecondaryButton"
import SocialLinksForm from "../../../components/Form/SocialLinksForm"
import InputFieldUrl from "../../../components/UI/ReusableForm/InputFieldUrl"
import ImageInput from "../../../components/UI/ReusableForm/ImageInput"


function ProfileEdit({onAddProfile, initialProfileData}) {
   const handleSubmit = (data) => {
      const file = data.imageFile?.[0]
      // console.log("Form submitted:", data)
       if (!file || !(file instanceof File)) {
        onAddProfile({
          ...data, image: initialProfileData?.image || null,
          
        }) 
        return
       }
       //convert to string 
       const reader =  new FileReader()
       reader.onloadend = () => {
        //const base64Image = reader.result
         onAddProfile({
      ...data,
      image: reader.result,
    })
    
      setTimeout(() => {}, 1000);
       }
   
   reader.readAsDataURL(file)

   }
  return (
    <div>
      <MyForm onSubmit={handleSubmit} defaultValues={initialProfileData || {user: ""}}>
       <div className="mb-4">
         <ImageInput/>
       </div> 
      <InputField
      name={"name"}
      label={"Name"}
      type={"text"}
      />

      <InputField
      name={"username"}
      label={"Username"}
      type={"username"}
      placeholder={""}
      />

      <InputField
      name={"role"}
      label={"Role"}
      placeholder="Fullstack Engineer"
      />
      <InputField
      name={"focus"}
      label={"Focus Area"}
      placeholder="e.g System Design, "
      />
      <InputField 
      name={"levelExperience"}
      label={"level of Experince"}
      placeholder="Mid-Level, Senior Engineer"/>
      <InputFieldUrl
      name={"resume"}
      label={"Insert Resume Link"}
      type={"url"}
      />
      <SocialLinksForm/>
      <SecondaryButton lable={"Update"}/>
      </MyForm>
    </div>
  )
}

export default ProfileEdit