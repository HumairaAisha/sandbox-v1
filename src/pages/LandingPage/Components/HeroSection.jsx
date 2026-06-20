// eslint-disable-next-line no-unused-vars
import  { motion } from "framer-motion"
import { fadeUp } from "../../../animations/motion"

import HeroCard from "../../../components/UI/HeroCard";
import SandboxDashboard from "../../../assets/Screenshot 2026-02-18 214609.png"
import ReusableCard from '../../../components/UI/ReusableCard';
import BadgeLabel from "../../../components/UI/BadgeLabel";
import Sandbox from "../../../assets/Sandbox Glance.png"


import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const hasLoggedIn =
  JSON.parse(localStorage.getItem("sandbox:hasLoggedIn")) || false;
  const navigate = useNavigate()
  return (
   /*  #141B24 */
      <section id='home' className='py-24 md:py-10 px-6 md:pt-36 bg-sandbox-navy'>
        
       <div className="flex flex-col items-center justify-center max-w-7xl mx-auto animate-section-reveal">
        
        <div>
        <BadgeLabel title={"our purpose"} />
        </div>
         <div 
         className="px-4 text-center py-8">
          <motion.h1 
          variants={fadeUp}
          initial = "initial"
          transition={{duration: 0.6}}
          whileInView="whileInView"

          className='font-medium text-3xl md:text-3xl lg:text-5xl text-[#F3F4F6] animate-text-reveal tracking-tight leading-tight'>
            Make Every Effort Count.
          </motion.h1>
          <motion.h2 
      variants={fadeUp}
      initial = "initial"
      transition={{duration: 0.6}}
      whileInView="whileInView"
      viewport={{once: false, amount: 0.3}}
          className='font-medium text-3xl md:text-3xl lg:text-5xl text-sandbox-ghost animate-text-reveal racking-tight leading-tight'>
             Track Progress.  Build Intentionally.
          </motion.h2>
          <motion.p 
      variants={fadeUp}
      initial = "initial"
      transition={{duration: 0.6}}
      whileInView="whileInView"
          className="mt-4 max-w-2xl mx-auto text-sm md:text-lg text-gray-500 leading-relaxed animate-section-reveal">Sandbox is a personal space for developers to track progress, log challenges, and capture milestones, turning effort into visible growth.</motion.p>
         
            <button  className="md:hidden bg-sandbox-ghost text-sandbox-navy px-6 py-2 rounded-2xl hover:cursor-pointer my-8" onClick={() => {navigate(hasLoggedIn ? "/dashboard" : "/onboarding")}}>{hasLoggedIn ? "Continue" : "Get Started"}</button>
         
        </div>
        
     <div className="relative w-full max-w-5xl py-4">
        <img src={Sandbox} alt="Sandbox personal developer dashboard interface" className="relative rounded-md shadow-xl w-full object-cover"
      />
     </div>
     </div>
     <section className='py-2 md:pt-15 md:px-6'>
      <h2 className='font-semibold text-3xl md:text-4xl py-8 md:my-4 text-sandbox-ghost text-center'>What We Believe</h2>
      <div className="duration-500 hover:scale-[1.05]">

      </div>
      <motion.div 
      variants={fadeUp}
      initial = "initial"
      transition={{duration: 0.6}}
      whileInView="whileInView"
      viewport={{once: false, amount: 0.2}}
      className='grid grid-cols-1 md:grid-cols-3 gap-4 py-2 md:py-10'>
       <div 
       
       className='my-4 px-2 transition duration-500 hover:scale-[1.04]'>  
       <HeroCard
       iconName={"ChartNoAxesColumn"}
       title={"Clarity Over Chaos"}
       description={"Development can feel scattered — tutorials, notes, bugs, and experiments everywhere. Sandbox brings everything into one place."}
       />
      </div>

      <div className='my-4 px-2 transition duration-500 hover:scale-[1.04]'>  
       <HeroCard
       iconName={"Lightbulb"}
       title={"Effort Should Be Visible"}
       description={"Effort often disappears over time. Sandbox helps you capture your progress and look back on how far you’ve come."}
       />
      </div>
      <div className='my-4 px-2 transition duration-500 hover:scale-[1.04]'>  
       <HeroCard
       iconName={"Notebook"}
       title={"Growth Is a Journey"}
       description={"Progress is more than a checklist. It’s about capturing what challenged you, what you’ve learned, and how you’ve grown."}
       />
      </div>
      </motion.div>
     </section>
      </section>
     
    
  )
}

export default HeroSection
