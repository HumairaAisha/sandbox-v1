
import { useNavigate } from "react-router-dom"
import InputField from "../UI/ReusableForm/InputField"
import MyForm from "../UI/ReusableForm/MyForm"

function SignUp() {
   const handleSubmit = (data) => {
      console.log(data);
      
   }
   const navigate = useNavigate()
  return (
    <section className="min-h-screen px-8 bg-sandbox-ghost">
      <h1 className="hidden md:flex text-4xl font-semibold cursor-pointer py-4" onClick={() => {navigate("/")}}>SandBox</h1>
      <div className="max-w-7xl mx-auto">
   <div className="py-20 md:py-0 px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
    <div className="hidden lg:flex flex-col justify-center">
      <h2 className="font-semibold text-5xl leading-tight mb-6">Growth Doesn’t <br /> Happen by Accident </h2>
      <p className="text-lg text-gray-700 leading-relaxed max-w-md">Log what you learn. Track what you build. See your progress unfold over time.</p>
  </div>

  <div className="flex justify-center lg:justify-start">
    <div className="w-full max-w-md bg-white shadow-xl rounded-3xl px-8 py-10">
      <div className="text-center">
        <h1 className="font-bold text-3xl mb-2">Create Account</h1>
    <p className="text-sm text-gray-600">Track your progress and build with intention.</p>
      </div>
    
    <MyForm onSubmit={handleSubmit} >
    <InputField
    name={"fullName"}
    label={"Full Name"}
    type={"text"}
    placeholder={"John Doe"}
    />

    <InputField
    name={"email"}
    label={"Email"}
    type={"email"}
    placeholder={"email01@example.com"}
    />
    <InputField 
    name={"password"}
    label={"Password"}
    type={"password"}
    
    />
    <InputField 
    name={"password"}
    label={"Confirm Password"}
    type={"password"}
    />
    <button className="bg-sandbox-card text-white rounded-xl w-full py-2 hover:cursor-pointer hover:bg-sandbox-navy my-6" onClick={() => {navigate("/login")}}>Create Account</button>
    <p className="py-2 text-center text-sm">Already have an account? <span className="font-bold hover:underline" onClick={() => navigate("/login")}>Sign in</span></p>
   </MyForm>
   </div>
   </div>
   </div>
      </div>
    </section>
  )
}

export default SignUp