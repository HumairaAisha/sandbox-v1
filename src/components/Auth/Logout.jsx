import { useNavigate } from "react-router-dom"
import { LogOut } from 'lucide-react';
import toast from "react-hot-toast";
import useLocalStorage from "../data/useLocalStorage";


function Logout({showTitle, isHomeButton = false}) {
  
  const navigate = useNavigate()
  const [, , removeUser] = useLocalStorage('user', null)
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false)
  const [hasLoggedIn, setHasLoggedIn] = useLocalStorage('hasLoggedIn', null)
  
  const handleLogout = () => {
    removeUser()
    setIsLoggedIn(false)
    setHasLoggedIn(null)
    setTimeout(() => {}, 2000)
    toast.success('You have logged out')
    navigate('/home', {replace:true})
    
  }
  const handleClick = isHomeButton ? () => navigate('/home', { replace: true }) : handleLogout
  return (
   <div onClick={handleClick}
   className="hover:bg-gray-700 text-white p-2 rounded-md hover:cursor-pointer">
      {showTitle ? (
        <div className="flex">
          <LogOut size={16} />
          <button  className="px-1 text-sm cursor-pointer">Home</button>
        </div>
      ) : (
        <LogOut size={16}/>
      )}
    </div>
  )
}

export default Logout