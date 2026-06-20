import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"
import Header from './Header'
import { DashboardStatsProvider} from "../../CustomHook/DashboardProviderContext"


import { useState } from "react"
function Layout() {
  const [isOpen, setIsOpen] = useState(true)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  return (
    <div className="flex bg-sandbox-ghost">
      <SideBar isOpen={isOpen} 
      setIsOpen={setIsOpen}
      mobileNavOpen={mobileNavOpen}
      setMobileNavOpen={setMobileNavOpen}
       className="w-52" />

      <div className={`${isOpen ? 'md:ml-52' : 'md:ml-16'} flex-1`}>
        <Header isOpen={isOpen}
        onMenuClick = {() => setMobileNavOpen(!mobileNavOpen)}/>
      <div className="flex-1 mt-12 bg-[#F3F4F6]">
      <DashboardStatsProvider>
        <Outlet />
      </DashboardStatsProvider>
        
      </div>
    </div>
    </div>
  )
}

export default Layout