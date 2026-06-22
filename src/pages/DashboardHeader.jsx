import useLocalStorage from "../components/data/useLocalStorage"
import { useEffect } from "react"

function DashboardHeader() {
  const [user] = useLocalStorage("user", null)
  const [hasLoggedIn, setHasLoggedIn] = useLocalStorage('hasLoggedIn', false)
  const firstName = user?.name ? user.name.split(' ')[0] : null
  const isFirstVisit = user && !hasLoggedIn

 useEffect(() => {
   if (user && !hasLoggedIn) {
      setHasLoggedIn(true)
    }
 },[user, hasLoggedIn])
 
  return (
    <div className="pb-2">
      <div className='p-1'>
       
         <h3 className="font-semibold text-xl py-2 text-sandbox-navy">{greeting}</h3>
         <p className='pb-2  text-sandbox-navy text-sm md:text-lg'>See how your journey unfolds, each number is a reflection of your progress rhythm, and milestones. <br />
            Behind every stat is the quiet effort that shapes your growth.</p>
      </div>
    </div>
  )
}

export default DashboardHeader
