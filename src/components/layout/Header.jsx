import { Settings,Bell, Menu, UserRound } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';



function Header({isOpen, onMenuClick}) {
  const location = useLocation()
  const navigate = useNavigate()

  const pageTitle = {"/dashboard": "Dashboard", "/progress": "Progress Tracker", "/challenge" : "Challenge Journal", "/milestone": "Milestone","/projectHub": "Project Hub", "/projectJournal": "Project Journal", "/resources": "Resources", "/profile": "Profile"}
  const {pathname} = location
  const title = pageTitle[pathname] || "SandBox"
 
  return (
    <header className={`w-full ${isOpen ? "md:w-[calc(100%-13rem)]" : "md:w-[calc(100%-4rem)]"} h-12 fixed top-0 z-30 md:flex-2 border-b-* border-b border-b-[#0F172A] bg-[#F3F4F6]`}>
      <div className="flex justify-between items-center p-2 h-full">
     <div className='flex items-center gap-2'>
      <button onClick={onMenuClick} className="md:hidden text-sandbox-navy hover:cursor-pointer">
            <Menu />
          </button>
      <h1 className='font-bold text-lg md:text-xl text-sandbox-navy px-2'>{title}</h1>
      </div>
      {pathname !== '/profile' && (
        <div className='flex bg-sandbox-navy rounded-full text-sandbox-ghost p-1'>
        <UserRound size={20} onClick={() => navigate('/profile')} className='hover:cursor-pointer'/>
      </div>
      )}
       
     </div>
    
    </header>
  )
}

export default Header