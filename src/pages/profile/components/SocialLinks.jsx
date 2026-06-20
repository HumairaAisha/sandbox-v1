
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail  } from "react-icons/hi";


function SocialLinks() {
 const user = JSON.parse(localStorage.getItem('sandbox:user'))  

   
  return (
     <div className="flex gap-4 justify-center items-center py-2">
      {user.gitHub && (
         <a href={user.gitHub} target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer">
         <FaGithub size={16}/>
         </a>
      )}
      
      {user.linkedIn  && (
         <a href={user.linkedIn}
          target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer">
            <FaLinkedin size={16}/>
         </a>
      )}
      {user.twitter && (
         <a href={user.twitter}>
            <FaXTwitter size={16}/>
         </a>
      )}
      {user.facebook && (
         <a href={user.facebook}>
             <FaFacebook size={16}/>
         </a>
      )}
     {user.instagram && (
      <a href={user.instagram}>
          <FaInstagram size={16}/>
      </a>
     )}
    </div>
  )
}

export default SocialLinks