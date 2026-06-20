import InputField from "../../../components/UI/ReusableForm/InputField"
import MyForm from "../../../components/UI/ReusableForm/MyForm"
import SelectOptionField from "../../../components/UI/ReusableForm/SelectOptionField"
import SecondaryButton from "../../../components/UI/SecondaryButton"

 // Generate years from 1990 - present
  const currentYear = new Date().getFullYear()
  const years = []
  for (let year = currentYear; year >= 1990; year--){
    years.push({ value: String(year), label: String(year) })
  }
  
  const toYears = [ ...years]

function EducationForm({onAddEduData, initialData }) {

   const handleSubmit = (data) => {
      onAddEduData(data)
   } 
   

  return (
    <>
    <MyForm onSubmit={handleSubmit}
    defaultValues={initialData || {experience: "", startYear: "", endYear: ""}}
    >

      <InputField
      name={"experience"}
      label={"Experience/Education"}
      placeholder={"Frontend Engineer"}
      />
      <SelectOptionField
      name={"startYear"}
      label={"From"}
      options={years}
      requiredMessage={"Please select start year"}
     
      />

      <SelectOptionField
      name={"endYear"}
      label={"To"}
      options={toYears}
      requiredMessage={"Please select an end year"}
      validate={(value, formValues) => {
        if (value === "Present") return true
        if (formValues.startYear && value) {
          return Number(value) > Number(formValues.startYear) || "End year must after start year"
        }
      }}
      />
      <SecondaryButton lable={initialData ? "Update" : "Add"}/>
    </MyForm>
    </>
  )
}

export default EducationForm