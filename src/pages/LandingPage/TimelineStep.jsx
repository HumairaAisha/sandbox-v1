
import { useEffect, useRef, useState } from "react"
import { PencilLine, Terminal, Lightbulb , Rocket } from 'lucide-react';
const Icons = {
   PencilLine, Terminal, Lightbulb , Rocket
}

function TimelineStep ({title, description, iconName, number, isLast}) {
   const [isVisible, setIsVisible] = useState (false)
   const stepRef = useRef(null)
   const IconComponent = iconName ? Icons[iconName] : null

   useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" } 
    );

    if (stepRef.current) observer.observe(stepRef.current);

    return () => observer.disconnect();
  }, []);
  
  return (
    <div 
      ref={stepRef} 
      className={`relative flex gap-6 py-8 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* The Vertical Line Segment */}
      {!isLast && (
        <div 
          className={`absolute left-[19px] top-10 w-[2px] h-full transition-colors duration-1000 ${
            isVisible ? 'bg-blue-500' : 'bg-slate-800'
          }`} 
        />
      )}

      {/* The Icon Node */}
      <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500 ${
        isVisible ? 'border-blue-500 bg-slate-900 text-blue-500' : 'border-slate-700 bg-slate-900 text-slate-500'
      }`}>
        {IconComponent ? (
          <IconComponent size={20} />
        ) : number !== undefined ? (
          <span>{number}</span>
        ) : null}
        
      </div>

      {/* The Text Content */}
      <div className="flex flex-col pt-1">
        <h3 className={`text-lg font-bold transition-colors duration-500 ${
          isVisible ? 'text-sandbox-ghost' : 'text-slate-500'
        }`}>
          {title}
        </h3>
        <p className="mt-2 text-slate-400 leading-relaxed max-w-3xl whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  )
}

export default TimelineStep
