import InputField from "../../../components/UI/ReusableForm/InputField"
import MyForm from "../../../components/UI/ReusableForm/MyForm"
import ImageInput from "../../../components/UI/ReusableForm/ImageInput"
import InputFieldNum from "../../../components/UI/ReusableForm/InputFieldNum"


function ProfileIdentityForm() {
   const handleSubmit = (data) => {
      console.log(data);
      
   }
  return (
    <div>
   <MyForm onSubmit={handleSubmit}>
     <div>
      <ImageInput/>
     </div>
   <InputField
   name={"fullName"}
   label={"Full Name"}
   placeholder={"Enter your name"}
   />
   <InputField
   name={"userName"}
   label={"Username"}
  
   />
   <InputField
   name={"role"}
   label={"Role"}
   placeholder={"Junior Developer"}
   />

   <InputField
   name={"track"}
   label={"Track"}
   placeholder={"Frontend Developer"}
   />
   <InputFieldNum
   name={"dateJoined"}
   label={"Date Joined"}
   />
   <p>Total Projects</p>
   <p>Link to Project Hub</p>
   </MyForm>

    </div>
  )
}

export default ProfileIdentityForm