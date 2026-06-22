// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

import { fadeIn, popIn, slideLeft } from "../../../animations/motion"


import ValueCard from '../../../components/UI/ValueCard';
import TimelineStep from "../../LandingPage/TimelineStep";
import BadgeLabel from '../../../components/UI/BadgeLabel';

function About() {
   const steps = [
      {
      iconName: "Repeat",
      title: "Consistency Over Intensity",
      desc: "Small daily effort compounds into meaningful growth.",
    },
      {
      iconName: "SearchCode",
      title: "Reflection Matters",
      desc: "Growth is not just about doing more — it’s about understanding what you’re doing.",
    },
      {
      iconName: "Layers",
      title: "Clarity Creates Confidence",
      desc: "When progress is visible, self-doubt reduces.",
    },
      {
      iconName: "Compass",
      title: "Intentional Learning",
      desc: "Learning should be structured, not scattered.",
    },
   ]

   const buildSteps = [
    {title: "State 01: The Question",
    description: '"How do I know I’m actually progressing? "\n Sandbox didn’t start as a feature list. It started with a 16-week roadmap built to move beyond tutorials and cloned projects. \n I needed proof that the effort was compounding.',
    number: "01"
    },
    {title: "State 02: The Structure",
    description: 'That structure made the invisible, visible. \n The hours. The challenges. The concepts that finally clicked. Documentation turned the daily struggle into a measurable map of growth.',
    number: "02"
    },
    {title: "State 03: The System",
    description: 'But over time, it became more than structure. It became a system. \n A way to understand how everything connects data, logic, and decisions working together. \n As Sandbox evolved, it stopped being a tracker. It became a space to think in systems.',
    number: "03"
    },
   ]
  return (
    <>
    
    <section id="about" className="scroll-m-10">
      <div className="min-h-screen py-20 px-4 bg-sandbox-navy">
      <div className="flex flex-col">
        
      <div className="max-w-4xl mx-auto px-6 flex flex-col justify-center">
        <BadgeLabel title={"The Cataylst"} />
      <motion.h2
      variants={popIn}
      initial="initial"
      whileInView="whileInView"
      transition={{duration: 0.5}}
      viewport={{once: false, amount: 0.5}}
      className="text-4xl md:text-4xl font-bold mt-4 text-sandbox-ghost">
        Our Origin
      </motion.h2>
      {/* <div className="h-1 w-15 bg-sandbox-ghost mt-2 rounded-full"></div> */}
      </div>
      
      <motion.div
      variants={fadeIn}
      initial="initial"
         whileInView="whileInView"
         transition={{duration: 0.5}}
         viewport={{once: false, amount: 0.5}}
      className="max-w-5xl mx-auto md:py-10 px-4 space-y-8 md:text-lg text-slate-400 leading-relaxed">
            <p className="text-lg md:text-xl my-4">
              Sandbox began as a response to a fundamental gap: progress in software development is often invisible.
            </p>
            <p>
              While building complex systems, the hours spent, the bugs triaged, and the concepts mastered frequently vanish into the daily grind. 
              What started as a personal tracker <span className="text-slate-300 italic">"How do I quantify and track my learning progress?" </span>evolved into a dedicated dashboard for intentional documentation.
            </p>
            <p>
              Sandbox was born to turn the <code className="text-sandbox-ghost">"black box"</code> of the development process into a transparent map of growth.
            </p>
          </motion.div>
          </div>
        
      
     
      {/* Behind the Build */}
      <section className='py-4'>
        <div className='py-12 px-6 flex justify-center gap-2'>
          {/*   <div className='flex items-start py-1 px-1.5 max-w-5xl mx-auto'>
          <p className=' bg-sandbox-card border border-sandbox-ghost/50 rounded-full py-1 px-3 mb-2 text-sandbox-ghost font-semibold font-mono tracking-widest uppercase'>The Narrative</p>
        </div> */}
        <div className='max-w-4xl mx-auto bg-sandbox-card px-5 sm:px-6 md:px-10 py-8 md:py-10 rounded-2xl shadow-sm'>
          
          <div className='flex items-start gap-4 mb-8'>
            <div className="h-14 w-1 bg-sandbox-ghost/70 mt-2 rounded-full"></div>
          <div>
            <motion.h2
            variants={popIn}
            initial="initial"
         whileInView="whileInView"
         transition={{duration: 0.5}}
         viewport={{once: false, amount: 0.5}}
            className='text-2xl sm:text-3xl md:text-4xl font-bold text-sandbox-ghost leading-tigh'>Behind the Build</motion.h2>
            <motion.p 
            variants={slideLeft}
            initial="initial"
         whileInView="whileInView"
         transition={{duration: 0.5}}
         viewport={{once: false, amount: 0.5}}
            className='text-sm md:text-base text-sandbox-ghost/70 italic'> A Note from the Founder</motion.p>
          </div>
          </div>
          {/* Contents */}
          <motion.div 
          variants={fadeIn}
          initial="initial"
         whileInView="whileInView"
         transition={{duration: 0.8}}
         viewport={{once: false, amount: 0.2}}
          className='space-y-5 text-[15px] md:text-base leading-8 text-sandbox-ghost'>
            <p className='text-lg md:text-xl font-medium max-w-4xl'>I didn’t build Sandbox to prove I could code; I built it because I needed a place to see who I was becoming.</p>
            <div className='space-y-2 md:space-y-3'>
              <p>I was learning quietly, consistently, solving bugs, pushing through confusion, but none of it felt visible. And when growth isn’t visible, doubt gets louder.</p>
              <p className='italic text-sandbox-ghost/80'>You start to question if the effort is enough.</p>
              <p>I had no system to show me the hours I had invested. The bugs I had solved. The concepts that once confused me but now made sense.</p>
            </div>

            <div className='space-y-2 border-l border-sandbox-ghost/30 pl-4'>
              <p>As developers, we spend so much time in the unseen — figuring things out, getting stuck, the things that don’t work before they finally do. But when that process isn’t documented, it fades.</p>
      
              <p className='text-sandbox-ghost/80'>Challenges feel like failures instead of experience. Progress feels invisible. Doubt gets louder.</p>
            </div>
            <div className='flex gap-2 items-start pt-2'>
              <div className="h-8 w-0.5 bg-sandbox-ghost/80 mt-2 rounded-full"></div>
              <h3 className='text-lg md:text-xl font-semibold italic leading-snug mt-2'>Sandbox is my response to that silence. </h3>
            </div>
            <div>
              <p>It isn't another productivity tool. It’s a system for documenting the journey, not just the destination. A place where every bug solved and every concept mastered becomes a proof of who you are becoming.</p>
            </div>
            <div className='flex gap-2 items-start pt-2'>
              <div className="h-12 md:h-8 w-0.5 bg-sandbox-ghost/80 mt-2 rounded-full"></div>
            <p className='text-sm md:text-xl font-semibold italic leading-snug mt-2'>From the first line of code to the final deployment, it’s built from lived experience — not assumptions.</p>
            </div>
            <div className='space-y-2'>
              <p>If you’re using Sandbox, I hope it helps you see what you’ve already built.</p>
              <p>Because growth doesn’t always announce itself.</p>
              <p>Sometimes, it’s quiet. Subtle. Easy to miss.</p>
              <p className='font-medium'>But it deserves to be seen.</p>
            </div>
            <p className='italic font-semibold text-lg pt-2'> — Built by a developer, for the journey.</p>
          </motion.div>
          <motion.div
          variants={fadeIn}
         initial="initial"
         whileInView="whileInView"
         transition={{duration: 0.5}}
         viewport={{once: false, amount: 0.2}}
           className='flex flex-col items-end mt-14 pt-6 border-t border-sandbox-ghost/10 text-sandbox-ghost/90'>
            <h4 className='font-semibold text-lg'>Aisha Muhyiddeen Ahmad</h4>
            {/* <p className=''>Founder, Sandbox</p> */}
          </motion.div>
        </div>
        </div>
        </section> 

        {/* system built */}
    <section>
    <div className='min-h-screen md:py-15 px-4 bg-sandbox-navy'>
      <BadgeLabel title={"The Blueprint"}/>
      <motion.h2
      variants={popIn}
      initial="initial"
      whileInView="whileInView"
      transition={{duration: 0.4}}
      viewport={{once: false, amount: 0.5}}
      className='text-2xl md:text-4xl font-semibold text-sandbox-ghost py-8 text-center'>Where Progress Became a System</motion.h2>
      <div className='md:py-8'>
        {buildSteps.map((build, index) => (
          <TimelineStep key={index} {...build} 
          isLast={index === buildSteps.length - 1}/>
        ))}
      </div>
    </div>
   </section>

   {/* Our Standard  */}
   <section>
      <div className='py-15 max-w-5xl mx-auto flex flex-col items-center justify-center'>
        <BadgeLabel title={"The Standard"}/>
         <div className='py-4 px-6 flex flex-col justify-center'>
            <motion.h2
            variants={popIn}
         initial="initial"
         whileInView="whileInView"
         transition={{duration: 0.3}}
         viewport={{once: false, amount: 0.1}}
            className='text-4xl md:text-4xl font-bold  text-sandbox-ghost'>Our Core Values</motion.h2>
          {/* <div className="h-1 w-12 bg-sandbox-ghost mt-2 rounded-full"></div> */}
         </div>
         <motion.div 
         variants={popIn}
         initial="initial"
         whileInView="whileInView"
         transition={{duration: 0.3}}
         viewport={{once: false, amount: 0.1}}
         className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 pt-8 md:pt-20 hover-lift'>
            {steps.map((step, index) => (
               <ValueCard key={index} {...step}/>
            ))}
         </motion.div>

         
      </div>
      </section> 
   </div> 

   
    </section>
    </>
  )
}

export default About