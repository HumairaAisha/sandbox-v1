import MyForm from "../UI/ReusableForm/MyForm"
import InputFieldNum from "../UI/ReusableForm/InputFieldNum"
import TextAreaField from "../UI/ReusableForm/TextAreaField"
import InputField from "../UI/ReusableForm/InputField"
import FormText from "../UI/ReusableForm/FormText"
import SelectOptionField from "../UI/ReusableForm/SelectOptionField"
import SecondaryButton from "../UI/SecondaryButton"

function MilestoneForm({onAddMilestone, closeForm, initialData}) {
   const milestoneMood = ["🎉 Excited", "😅 Relieved", "😎 Confident", "🤔 Reflective","😌 Calm" ,"🤯 Suprised", "💡 Inspired", "❤️ Accomplished", "🐛 Fustrated"].map(milestoneMoodType => ({
      value: milestoneMoodType,
      label: milestoneMoodType
   }))

   const handleSubmit = (data) => {
      onAddMilestone(data)
      closeForm()
   }
  return (
    <div>
      <MyForm onSubmit={handleSubmit}
      defaultValues={initialData || {milestoneRecord: ""}}
      >
         <FormText  
         title={"Marking the Moments That Matter"}
         text={"Because each milestone holds a lesson, a proof of how far you've come"}
         />
         <InputField
         name={"milestoneTitle"}
         label={"Title"}
         placeholder={"First time API's clicked"}
         required={true}
        
         />
         <SelectOptionField
         name={"milestoneMood"}
         label={"How This Moment Felt"}
         placeholder={"How did this moment feel?"}
         options={milestoneMood}
         required={true}
         />
         <TextAreaField
         name={"milestoneDescription"}
         label={"Description/Reflection"}
         placeholder={"Describe what you achieved and what you learned from it."}
         required={true}
         />
        
         <SecondaryButton lable={initialData ? "Update" :"Record It"} />
      </MyForm>
    </div>
  )
}

export default MilestoneForm