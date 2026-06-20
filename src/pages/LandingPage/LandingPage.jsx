import HeroSection from "./Components/HeroSection"
import NavBar from "./Components/NavBar"
import Features from "./Components/Features"
import Works from "./Components/Works"
import About from "./Components/About"
import Footer from "./Components/Footer"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import useLocalStorage from "../../components/data/useLocalStorage"


function LandingPage() {
  /* const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [user] = useLocalStorage('user', null)
  
  const forceLanding = searchParams.get('force') === 'true';
  useEffect(() => {
    if (user && !forceLanding) {
      navigate('/dashboard', {replace: true})
    }
  }, [])
  if (user && !forceLanding) {
    return <div className="min-h-screen flex items-center justify-center">Redirecting...</div>;
  } */
  return (
   
      <>
      <NavBar/>
     <HeroSection/>
     <Features/>
    <Works/>
    <About />
    <Footer />
      </>
    
  )
}

export default LandingPage