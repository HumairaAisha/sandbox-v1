import { useNavigate } from "react-router-dom"
import ReusableCard from "../../../components/UI/ReusableCard"
import Sandbox from "../../../assets/SandboxImage.png"
import SocialLinks from "./SocialLinks"
import PrimaryButton from "../../../components/UI/PrimaryButton"





function ProfileIdentity() {

   const user = JSON.parse(localStorage.getItem('sandbox:user'))
   const navigate = useNavigate()
   const projectsCounts = JSON.parse(localStorage.getItem("sandbox:projectRecord")) || []

  return (
    
      <ReusableCard>
        <div className="md:flex justify-between px-2">
          <div className="md:flex md:justify-between py-2">
         <div className="py-2 md:flex justify-center">
         <div className="md:flex gap-4">
               <div className="flex justify-between">
                   <img src={user.image || Sandbox} alt="Profile Picture" className="rounded-full w-20 h-20"/>
                  <button onClick={() => navigate("/profileEdit")} className="flex md:hidden hover:cursor-pointer">Edit</button>
               </div>
        <div className="py-2">
          <h2 className="">{user.name}</h2>
         <p className="text-sandbox-navy/75 text-sm">{user.username}</p>
         <div className="flex gap-2 flex-wrap items-center">
         <p className="text-sm">{user.role}</p>
         {user.focus && (
            <div>
         <span className="text-sandbox-navy/60 px-1">·</span>
         <span className="text-xs bg-sandbox-navy/10 text-sandbox-navy px-2 py-0.5 rounded-md">
          {user.focus}
         </span>
            </div>
         )}
        
        {user.levelExperience && (
        <div>
          <span className="text-sandbox-navy/60 px-1">·</span>
           <span className="text-xs bg-sandbox-navy/10 text-sandbox-navy px-2 py-0.5 rounded-md">
           {user.levelExperience}
         </span>
        </div>
        )}
         </div>
         
        </div>
         </div>
         </div>
      </div>
      <div className="flex flex-col justify-center">
         <button onClick={() => navigate("/profileEdit")}
         className="hidden md:flex justify-end text-sandbox-navy rounded font-semibold hover:cursor-pointer pb-4">Edit</button>
         <div className="flex justify-between py-1">
            <p className="text-sm">Total Projects</p>
            <p className="text-sm">{projectsCounts.length}</p>
         </div>
         <div className="flex gap-8 justify-between items-center">
            <p className="text-sm">View Projects</p>
            <button type="button"  onClick={() => navigate("/projectHub")}
            className="bg-sandbox-navy text-sandbox-ghost rounded-md px-2 hover:cursor-pointer text-sm"   
            >View</button>
         </div>
         {user.resume && (
            <div className="flex justify-between items-center py-0.5">
               <p className="text-sm">Resume</p>
               <a href={user.resume} target="_blank" rel="noopener noreferrer"
               className="text-sm bg-sandbox-navy text-sandbox-ghost rounded-md px-2">View</a>
            </div>
         )}
      </div>
        </div>
      <div className="pt-8 md:py-2">
         <SocialLinks/>
         <p className="text-sm text-center text-gray-500">
   Joined{" "}
   <span>
      {new Date(user.joinedDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
   </span>
</p>
      </div>
      </ReusableCard>
    
  )
}

export default ProfileIdentity