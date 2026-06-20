// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { popIn} from "../../../animations/motion"

import TimelineStep from "../../LandingPage/TimelineStep";
import BadgeLabel from "../../../components/UI/BadgeLabel";

function Works() {

  const steps = [
    {
      title: "Step 1 — Capture the Moment",
      description: "Stop letting your daily progress fade into the complexity of a long project. As you build, log your sessions and technical breakthroughs to keep your momentum visible.",
      iconName: "PencilLine"
    },
    {
      title: "Step 2 — Document the Struggle",
      description: "Turn technical challenges into a compounding resource. Log the obstacles you face and the solutions you discover to build a personal reference for future growth.",
      iconName: "Terminal"
    },
    {
      title: "Step 3 — Evaluate the Shift",
      description: "Take a moment to reflect on your technical  confidence. It’s not just about finishing a feature — it’s about recognizing how your thinking evolves.",
      iconName: "Lightbulb"
    },
    {
      title: "Step 4 — Present the Narrative",
      description: "Turn raw data into a living professional identity. Watch your progress transform into a visible map of skill — a definitive record of the technical evolution that proves exactly what you can build.",
      iconName: "Rocket"
    }
  ];
  return (
   
   <>
    <section id="how-it-works" className="scroll-m-10">
      <div className="min-h-screen py-8 md:py-20 px-4 bg-sandbox-navy">
        <BadgeLabel title={"The Workflow"} />
        <div className="flex flex-col items-center text-center py-8">
          <motion.h1 
          variants={popIn}
          initial="initial"
          whileInView="whileInView"
          transition={{duration: 0.4}}
          viewport={{once: false, amount: 0.5}} 
          className="text-2xl md:text-4xl font-semibold mb-3 text-sandbox-ghost">
            Engineered for Evolution
          </motion.h1>
          <p className="text-gray-500">
            From the first line of code to the final breakthrough <br /> see how Sandbox maps your journey in real-time.
          </p>
        </div>
        <div className="rounded-2xl md:p-10 shadow-lg">
          {steps.map((step, index) => (
            <TimelineStep
              key={index}
              {...step}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>

    
   </>
  )
}

export default Works