import ReusableCard from "../../../components/UI/ReusableCard"
import PrimaryButton from "../../../components/UI/PrimaryButton"

function OtherService() {
  return (
      <ReusableCard className="h-full">
   <div className="flex justify-between">
      <h3>Others</h3>
      <PrimaryButton label={"Add"}/>
   </div>
   <div className="bg-[#3c4a69] w-full h-0.5 my-1.5"></div>
      </ReusableCard>
   
  )
}

export default OtherService