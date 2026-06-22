import FormText from '../UI/ReusableForm/FormText'
import InputField from '../UI/ReusableForm/InputField'
import MyForm from '../UI/ReusableForm/MyForm'
import InputFieldNum from '../UI/ReusableForm/InputFieldNum'
import TextAreaField from '../UI/ReusableForm/TextAreaField'
import CategoryField from '../UI/ReusableForm/CategoryField'
import SecondaryButton from '../UI/SecondaryButton'



function LearnForm({onAddRecord, closeForm, initialData}) {

   const handleSubmit = (data) => {
     
      onAddRecord(data)
      closeForm()
      
   } 

   
      
   
  return (
    <div>
      <MyForm  onSubmit={handleSubmit}
      defaultValues={initialData || { learnRecords: "" }}
      >
         <FormText
         title={"Document Your Progress"}
         text={"Because every step forward tells a story"} />
         <div className='flex justify-between gap-4'>
      <InputFieldNum label={"Date"} name={"date"} type={"date"} requiredMessage={"select date"}/>
      <InputFieldNum label={"Hours Spent"} name={"hours"} type={"number"} requiredMessage={"input hours"} />
         </div>

     <InputField label={"Concept Mastered"} name={"topic"} type={"text"}
     required={true}
     placeholder="What concept did you explore today?"
     />
     <CategoryField />
    
     <TextAreaField label={"Note"} name={"description"} requiredMessage ="concept note is required" 
     placeholder="What did you understand from this concept?"
     />
     <SecondaryButton lable={initialData? "Update" : "Record It"} />
      </MyForm>
    </div>
  )
}

export default LearnForm