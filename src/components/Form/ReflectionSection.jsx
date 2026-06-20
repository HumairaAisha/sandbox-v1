import TextAreaField from "../UI/ReusableForm/TextAreaField"



function ReflectionSection() {
  return (
    <div>
      <div>
         <h4 className="font-bold">Project Reflection</h4>
         <p className="text-sm">Any optional thoughts after finishing this project</p>
      </div>
     <TextAreaField
     name={"keyLearning"}
     label={"Key Learnings"}
     placeholder={"Key takeaways \nWhat did this project teach you?"}
     required={false}
     />

     <TextAreaField
     name={"ChallengesFaced"}
     label={"Challenges Faced"}
     placeholder={"What was hard, what blocked you along the way or things that took deep thinking to solve"}
     required={false}
     />
     <TextAreaField
     name={"improvements"}
     label={"Feature Improvements"}
     placeholder={"Any improvements or changes you’d make next time?"}
     required={false}
     />

    </div>
  )
}

export default ReflectionSection