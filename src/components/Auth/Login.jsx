import InputField from "../UI/ReusableForm/InputField"
import MyForm from "../UI/ReusableForm/MyForm"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate(); 

  const handleSubmit = (data) => {
    if (data.email && data.password) {
      setAuthUser({
        email: data.email,
        token: "fake-jwt-token",
      });

      // redirect to dashboard
      navigate("/dashboard");
    } else {
      console.log("Please fill in all fields");
    }
  }
  return (
   <section className="min-h-screen px-8 py-4">
     <div className="flex justify-between">
      <button onClick={() => navigate("/")} className="md:flex text-2xl font-semibold cursor-pointer mt-4">SandBox</button>
     </div>
    <div className="max-w-7xl mx-auto">
        <div className="py-20 md:py-2 px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          
          {/* Left Side - Content (Hidden on small screens, shown on lg+) */}
          <div className="hidden lg:flex flex-col justify-center">
            <h2 className="font-semibold text-5xl leading-tight mb-6 text-sandbox-navy">
              Build Your <br /> Growth Intentionally
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-md">
              Track your progress, log challenges, and reflect on the journey.
            </p>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-md mx-auto shadow-xl rounded-3xl px-8 py-10">
              <div className="text-center mb-8">
                <h1 className="font-bold text-3xl mb-2 text-sandbox-navy">Welcome Back</h1>
                <p className="text-sm text-gray-600">
                  Continue tracking your progress and build with intention.
                </p>
              </div>

              <MyForm onSubmit={handleSubmit}>
                <InputField
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="email01@example.com"
                  
                />
                <InputField
                  name="password"
                  label="Password"
                  type="password"
                />

                <div className="flex justify-end text-sm mt-2 mb-6">
                  <p className="text-gray-500 hover:text-gray-700 cursor-pointer">
                    Forgot password?
                  </p>
                </div>

                <button
                  type="submit"
                  className="bg-sandbox-navy text-white rounded-2xl w-full py-3 font-medium hover:bg-sandbox-navy/90 transition-colors hover:cursor-pointer"
                >
                  Sign in to Dashboard
                </button>
                <p className="py-6 text-center text-sm">Don't have an account? <span className="font-bold hover:underline" onClick={() => navigate("/signup")}>Sign up</span></p>
              </MyForm>
            </div>
          </div>
        </div>
      </div>
   </section>
  )
}

export default Login