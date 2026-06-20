
import { useNavigate } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { useState } from "react"
import { Menu, X } from 'lucide-react';
import useLocalStorage from "../../../components/data/useLocalStorage";

function NavBar() {

  const navigate = useNavigate()
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const [hasLoggedIn, setHasLoggedIn] = useLocalStorage("hasLoggedIn", null)
  
   const navItems = [
      {title: "Home", link: "/#home"},
      {title: "Features", link: "/#features"},
      {title: "How It Works", link: "/#how-it-works"},
      {title: "About Us", link:"/#about"}
   ]
  
  return (
    <div className="flex justify-between py-4 px-6 fixed top-0 left-0 right-0 bg-sandbox-navy z-10">
     
      <button className="font-bold text-2xl hover:cursor-pointer text-sandbox-ghost">Sandbox</button>
     
     <ul className='hidden md:flex items-center gap-6'>
       {navItems.map((menu) => (
         <li 
      key={menu.title} 
      className='text-lg font-semibold text-sandbox-ghost '>
      <HashLink 
      smooth 
      to={menu.link}
      className="hover:cursor-pointer hover:text-sandbox-ghost/70 p-1.5 rounded-md">
      {menu.title}
    </HashLink>
         </li>
      ))}
     </ul>
     <button className="hidden md:flex hover:cursor-pointer font-semibold text-sandbox-navy bg-sandbox-ghost py-1 px-2 rounded-md" 
     onClick={() => {navigate(hasLoggedIn ? "/dashboard" : "/onboarding")}}>{hasLoggedIn ? "Continue" : "Get Started"}
     </button>
     
     {/* mobile view */}
     <div className="md:hidden ">
      
     <div className="flex justify-between px-6 py-2 gap-4">
     <button onClick={handleClick} className="md:hidden z-30 hover:cursor-pointer">
       {!nav ? <Menu className="text-sandbox-ghost"/> : <X className="text-sandbox-ghost"/>}
     </button>
     </div>
     <ul className={!nav ?  "hidden" : "absolute top-16 left-0 w-full min-h-20 bg-sandbox-navy text-gray-400 flex flex-col justify-center px-8 gap-6 py-2"}>
      {navItems.map((menu) => (
         <li 
  key={menu.title}  
  onClick={() => {
    handleClick(); 
  }} 
  className='text-lg font-semibold text-white hover:cursor-pointer'
>
  <HashLink 
      smooth 
      to={menu.link}
      className="hover:text-sandbox-ghost/70"
    >
      {menu.title}
    </HashLink>
         </li>
      ))}
    {/*    <button className="hover:cursor-pointer font-semibold text-sandbox-navy rounded py-2 my-2 bg-sandbox-ghost text-base hover:bg-sandbox-ghost/85" onClick={() => {navigate(hasLoggedIn ? "/dashboard" :"/onboarding")}}>{hasLoggedIn ? "Continue": "Get Started"}</button> */}
      </ul> 
      
     </div>
    </div>
  )
}

export default NavBar