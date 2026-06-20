import ProfileCard from "./ProfileCard"
import { FaUser } from "react-icons/fa"
//import profile from "../assets/Copy of IMG_2303.jpg"


function Card() {
  return (
    <div className="pb-6 flex justify-between">
      <div className="max-w-9/12 h-32 shadow rounded-lg flex p-3 items-center bg-gray-100 gap-3">
      <div>
        <FaUser className="text-white text-7xl bg-[#1F2937] rounded-full p-3" />
       {/*  <img src={profile} alt="" className="w-30 h-30  rounded-full p-3" /> */}
      </div>
      <ProfileCard 
      name="Humiara Muhyiddeen"
      role="Junior Developer"
      track="Frontend Development"
      skill={"Html, JavaScript, TailwindCss, React"}
      joined={"October 2024"} 
      FocusArea={"Learning React"}/>
      </div>
    </div>
    
    

  )
}

export default Card