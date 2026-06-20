import NavItem from './NavItem';
import { House, 
   LayoutDashboard, 
   BookOpenCheck, 
   Trophy, File, Settings, 
   CircleUserRound, ChevronRight, ChevronLeft, CircleCheckBig, Wrench, FolderOpen, Files,
   Menu, X 
   } from 'lucide-react';
import Logout from '../Auth/Logout';



function SideBar({ isOpen, setIsOpen, mobileNavOpen, setMobileNavOpen }) {
   
   /* const [nav, setNav] = useState(false)
   const handleNavButton = () => setNav(!nav) */

   const menuItems = [
      {
         title: 'Dashboard',
         icon : LayoutDashboard,
         path: '/dashboard'
      },
      {
         title: 'Progress Tracker',
         icon : BookOpenCheck,
         path: '/progress'
      },
      {
         title:'Challenge Journal',
         icon: Wrench,
         path:'/challenge'
      },
      {
         title: 'Milestone',
         icon : Trophy,
         path: '/milestone'
      },
      {
         title: 'Project Hub',
         icon: FolderOpen,
         path: '/projectHub'
      },
      {
         title: "Project Journal",
         icon: Files,
         path: '/projectJournal'
      }
      /* {
         title: 'Resources',
         icon : File,
         path: '/resources'
      }, */
      
      
   ]
   const menuItemsBottom = [
       /* {
         title: 'Settings',
         icon : Settings,
         path: '/settings'
      }, */
      {
         title: 'Profile',
         icon : CircleUserRound,
         path: '/profile'
      },
      
   ]

   
  return (
    <div>
   <div className='hidden md:flex'>
         <div className={`
        hidden md:flex flex-col ${isOpen ? 'w-52' : 'w-16'} h-full fixed top-0 left-0 z-20 bg-sandbox-navy text-sandbox-ghost transition-all duration-150 ease-in-out`}>
          <div className='flex justify-between p-2'>
            {isOpen && <h1 className='font-bold md:text-2xl cursor-pointer'>Sandbox</h1>}
         
      
           <button onClick={() => setIsOpen(!isOpen)} className='text-white  hover:cursor-pointer hover:bg-sandbox-ghost hover:rounded-2xl hover:text-sandbox-navy'>
            {isOpen ? <ChevronLeft /> : <ChevronRight  />}
         </button>
       </div>
         
         
       <nav className='flex-1 p-2'>
         
         <div className='mt-2'>
            {menuItems.map ((item, index) => (
         <NavItem key={index} icon={item.icon} title={item.title} path={item.path} showTitle={isOpen} />
         ))}
         </div>

         <div className='mt-32'>
            {menuItemsBottom.map ((item, index) => (
               /* showTitle props so that when isOpen show title + icon */
         <NavItem key={index} icon={item.icon} title={item.title} path={item.path} showTitle={isOpen}/>
         ))}
         </div>
          <Logout showTitle={isOpen} isHomeButton={true}/>
      </nav>
     
      </div>
   </div>

   {/* Mobile menu slide in drawer */}
   {mobileNavOpen && (
      <div className='fixed inset-0 z-50 bg-black/50 md:hidden'
      onClick={() => setMobileNavOpen(false)}>

         <div className={`fixed top-0 left-0 z-40 h-full w-64 bg-sandbox-navy text-sandbox-ghost flex flex-col transition-transform duration-200 ease-in-out md:hidden
        ${mobileNavOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
         {/* Header with page title and close button */}
         <div className='flex items-center justify-between p-3 border-b border-sandbox-ghost/20'>
         
            <h1 className='text-lg' >Sandbox</h1>
            <button onClick={() => setMobileNavOpen(false)}>
               <X className='hover:cursor-pointer'/>
            </button>
         </div>
      <nav>
         {menuItems.map((item, index) => (
            <NavItem
            key={index}
            icon={item.icon}
            title={item.title}
            path={item.path}
            showTitle={true}
            onClick={() => setMobileNavOpen(false)}
            />
         ))}
      </nav>
         <div>
            {menuItemsBottom.map((item, index) => (
              <NavItem  key={index}
              icon={item.icon}
              title={item.title}
              path={item.path}
              showTitle={true}
              onClick={() => setMobileNavOpen(false)}
              />
            ))}
         </div>
         <Logout showTitle={true} isHomeButton={true}/>
         </div>
      </div>
   )}
   
    </div>
      
  )
}

export default SideBar