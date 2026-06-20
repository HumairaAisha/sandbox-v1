
import BioData from "./BioData"
import Education from "./Education"
import Skills from "./Skills"
import OtherService from "./OtherService"

function ProfileInformation() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 w-full items-stretch">
      <BioData/>
      <Skills/>
      <Education/>
      <OtherService/>
    </div>
   
  )
}

export default ProfileInformation