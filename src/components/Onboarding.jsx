
import InputField from "./UI/ReusableForm/InputField"
import MyForm from "./UI/ReusableForm/MyForm"
import { useNavigate } from "react-router-dom";
import useLocalStorage from "./data/useLocalStorage";
import { useEffect } from "react";


function Onboarding() {
   const navigate = useNavigate()
   const [user, setUser] = useLocalStorage('user', null)
   const [hasLoggedIn, setHasLoggedIn] = useLocalStorage('hasLoggedIn', null)
  
   
   useEffect(() => {
      if (hasLoggedIn ===  true && user) {
         navigate('/dashboard', {replace: true})
      }
   }, [hasLoggedIn, user, navigate])
   const handleSumbit = (data) => {
      setUser({ ...data, joinedDate: new Date().toISOString() })
      setHasLoggedIn(true)
      navigate('/dashboard')
      
   }

   if (hasLoggedIn === true && user) {
      return null
   }
  return (
    <div className="min-h-screen px-8 py-4">
       <div className="flex flex-col justify-between">
         <button onClick={() => navigate("/home")} className="text-3xl font-semibold mt-4 text-center md:text-left cursor-pointer">Sandbox</button>

      <div className="max-w-7xl mx-auto">
         <div className="py-8 md:py-4 px-0 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center min-h-[80vh]">
            <div className="flex lg:hidden flex-col text-center mb-4">
        <h2 className="font-semibold text-xl text-sandbox-navy mb-4">
          Build Your Growth Intentionally
        </h2>
        <p className="text-gray-500 text-sm">
          Track your progress, log challenges, and reflect on the journey.
        </p>
      </div>

            <div className="hidden lg:flex flex-col justify-center">
            <h2 className="font-semibold text-5xl leading-tight mb-6 text-sandbox-navy">
              Build Your <br /> Growth Intentionally
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-md">
              Track your progress, log challenges, and reflect on the journey.
            </p>
          </div>



   <div className="flex justify-center lg:justify-start">
      <div className="w-full max-w-md shadow-xl rounded-3xl px-6 sm:px-8 py-8 bg-white">
         <MyForm onSubmit={handleSumbit}>
         <InputField
         name={"name"}
         label={"Name"}
         required={true}
         />

         <InputField 
         name={"role"}
         label={"Role"}
         required={true}
         placeholder="e.g Frontend Developer, Fullstack Engineer"
         />
      <button type="submit" className="bg-sandbox-navy text-white rounded-2xl w-full py-4 font-medium hover:bg-sandbox-navy/90 transition-colors hover:cursor-pointer">
      Go to Dashboard
      </button>

      </MyForm>
   </div>
   </div>
         </div>
      </div>
      
       </div>
    </div>
  )
}

export default Onboarding