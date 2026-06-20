import useLocalStorage from "../components/data/useLocalStorage"
function DashboardHeader() {
  const [user] = useLocalStorage("user", null)
  const [hasLoggedIn, setHasLoggedIn] = useLocalStorage('hasLoggedIn', null)
  const firstName = user?.name ? user.name.split(' ')[0] : null

  if (user && hasLoggedIn === null) {
    setHasLoggedIn(true)
  }
  return (
    <div className="pb-2">
      <div className='p-1'>
       
         <h3 className="font-semibold text-xl py-2 text-sandbox-navy"> {user && hasLoggedIn === true ? `Welcome Back ${firstName}` : user && hasLoggedIn === null ? `Welcome ${firstName}`
          : "Welcome"}</h3>
         <p className='pb-2  text-sandbox-navy text-sm md:text-lg'>See how your journey unfolds, each number is a reflection of your progress rhythm, and milestones. <br />
            Behind every stat is the quiet effort that shapes your growth.</p>
      </div>
    </div>
  )
}

export default DashboardHeader
