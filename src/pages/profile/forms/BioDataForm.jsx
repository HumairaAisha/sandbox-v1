import InputField from "../../../components/UI/ReusableForm/InputField"
import TextAreaField from "../../../components/UI/ReusableForm/TextAreaField"
import MyForm from "../../../components/UI/ReusableForm/MyForm"
import SecondaryButton from "../../../components/UI/SecondaryButton"


function BioDataForm({onAddBioData, initialData}) {
   const handleSubmit = (data) => {
      onAddBioData (data)
   }
  return (
    <div>
      <MyForm onSubmit={handleSubmit}
      defaultValues={initialData || { bio: "" }}
      >

      <TextAreaField
      name={"bio"}
      label={"About Me"}
      placeholder={"I am a frontend developer...."}
      required={true}
      className="h-[150px]"
      />
      <SecondaryButton lable={initialData ? "Update" : "Add"} />
      </MyForm>

    </div>
  )
}

export default BioDataForm