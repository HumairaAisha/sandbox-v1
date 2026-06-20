
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link"

function Footer() {

   const quickLinks = [
      {title: "Home", link: "/#home"},
      {title: "Features", link: "/#features"},
      {title: "How It Works", link: "/#how-it-works"},
      {title: "About Us", link:"/#about"}
   ]
  return (
    <div className="bg-sandbox-navy border-y border-sandbox-ghost/10 text-sandbox-ghost">
       <div className="md:flex gap-10 justify-between py-10 px-8">
         <div className="">
            <h1 className="text-sandbox-ghost text-2xl font-bold py-4 hover:cursor-pointer">Sandbox</h1>
            <h4 className="max-w-xl mx-auto text-sandbox-ghost">Sandbox is a developer-centric system designed to bridge the gap between learning and mastery — turning your quiet daily effort into a visible progress, ensuring your evolution as a developer is never left undocumented, and providing the structure for a lasting engineering identity.</h4>
         </div>
         <div className="">
            <ul className="space-y-2 text-sandbox-ghost "> 
               <li className="font-medium text-lg pt-8 md:pt-4">Quick Links</li>
               {quickLinks.map((menu) => (
                  <li key={menu.title}>
                     <HashLink 
                     smooth
                     to={menu.link}>
                     {menu.title}
                     </HashLink>
                  </li>
               ))}
            </ul>
         </div>

         <div className="flex flex-col">
           {/*  */}
         <div>
            <p className="my-2 text-sandbox-ghost/70">Follows Us</p>
            <div className="flex gap-4">
            <a href="https://github.com/HumairaAisha" target="_blank" rel="noopener noreferrer"
             className="hover:cursor-pointer">
               <FaGithub size={20}/>
            </a>
           <a href="https://www.linkedin.com/in/aisha-muhyiddeen01/" target="_blank" rel="noopener noreferrer"
           className="hover:cursor-pointer"><FaLinkedin size={20}/></a>
           
           <a href="https://facebook.com/aishamuhyiddeen.ahmad" target="_blank" rel="noopener noreferrer"
           className="hover:cursor-pointer"><FaFacebook size={20}/></a>
            </div>
         </div> 
        {/*  <div>
            <h4 className="font-medium text-lg pt-8 md:pt-4">Contact</h4>
            <p>sandbox@mail</p>
            <p>(+234) 8023456</p>
         </div> */}
         </div>
      </div>

      <div className="mt-6 border-t border-sandbox-ghost/15 p-8">
  
  <p className="text-sm text-sandbox-ghost/80 italic">
    Growth is a quiet process. Don’t let it go undocumented.
  </p>

  <p className="text-sm text-sandbox-ghost/80 mt-1">
    Built for the journey behind the skills.
  </p>
<div className="flex gap-8 py-6 text-sm text-sandbox-ghost/70">
      <p>&copy; 2026 Sandbox</p>
   <div className="flex gap-10">
  <a href="#">Privacy</a>
  <a href="#">Terms</a>
</div>
   </div>
</div>
</div>

  )
}

export default Footer