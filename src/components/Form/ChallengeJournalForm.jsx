import MyForm from "../UI/ReusableForm/MyForm"
import FormText from "../UI/ReusableForm/FormText"
import InputField from "../UI/ReusableForm/InputField"
import InputFieldNum from "../UI/ReusableForm/InputFieldNum"
import TextAreaField from "../UI/ReusableForm/TextAreaField"
import ChallenegCategoryField from "../UI/ReusableForm/ChallenegCategoryField"
import SecondaryButton from "../UI/SecondaryButton"


function ChallengeJournalForm({onAddChallenge, closeForm, initialChallengeData }) {
  console.log("Initial Data in Form:", initialChallengeData);
   const handleSubmit = (data) => {
     onAddChallenge(data) 
      closeForm()
      

   }
  return (
    <div>
      <MyForm  onSubmit={handleSubmit}
      key={initialChallengeData?.id || 'new'}
      defaultValues={initialChallengeData || {challengeRecords: ""}}
      >
      <FormText title={initialChallengeData ?  "Edit Challenge Data" : "Document What You Fixed"}
      text={"Because every fix carries a story of patience, persistence, and growth."}/>
      <InputFieldNum
      name="date"
      label={"Date"}
      type={"date"}
      requiredMessage={"select a date"}
      />
      <InputField
      name="issueTitle"
      label={"Issue Title"}
      requiredMessage="Issue title is required"
      placeholder="e.g. Login button not working"
      />
      <ChallenegCategoryField/>
      
      <TextAreaField 
      name={"issueSummary"}
      label={"Issue Summary"}
      placeholder="Briefly describe the issue you encountered..."
      requiredMessage="Describe the issue you faced"
      />

      <TextAreaField
      name={"rootCause"}
      label={"Root Cause"}
      placeholder="What caused the issue? Missing state update? Wrong API endpoint?"
      requiredMessage="Explain what caused the issue"
      />

      <TextAreaField
      name={"solution"}
      label={"Solution"}
      placeholder="Describe the steps you took to fix the issue..."
      requiredMessage="Describe how you solved it"
      />
      <SecondaryButton lable={initialChallengeData  ? "Update" : "Record It"} />
      </MyForm>
    </div>
  )
}

export default ChallengeJournalForm
