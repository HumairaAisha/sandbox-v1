import { useEffect } from "react"
import useLocalStorage from "./data/useLocalStorage"
import { CalendarDays, Hourglass, Book, Brain, FileTerminal, NotebookPen, ShieldAlert, Folder } from 'lucide-react';


function StatsCard({id, title, notes, value, auto, iconName}) {
  const storagekey = `stats-${id}`
  const [count, setCount] = useLocalStorage(storagekey, value)
  const iconMap = {
    calendar: CalendarDays,
    time: Hourglass,
    concept: Book,
    challenge: FileTerminal,
    note: NotebookPen,
    projects: Folder,
    fallback: ShieldAlert
  }
  useEffect(() => {
    if (auto) {
      setCount(value)
    }
  }, [value, auto, setCount])

  function increments() {
    if (auto) return
    if (title === "Confidence Level") {
      if (count < 10) {
        setCount(count + 1)
      }
    } else {
      setCount(count + 1)
    }
  }
  
  function decrement() {
    if(auto) return
    if (count > 0) {
      setCount(count - 1)
    }
    if (title === "Confidence Level") {
      if (count > 0) {
        setCount(count - 1)
      }
    } 
  }   
   const IconComponent = iconMap[iconName] || iconMap.fallback
  return (
    <div className="relative p-4 overflow-hidden">
      <div className="">
        
      {/* <h2>{id}</h2> */}
      <div>
       <div className="flex justify-between">
         <p className="font-bold text-3xl text-sandbox-navy">{count}</p>
        {/* <div>
          <IconComponent size={25} className="text-sandbox-navy"/>
        </div> */}
       </div>
      <h2 className="font-semibold text-gray-500 pt-1.5">
        {title}
        </h2>
      
      </div>
         <p className="text-xs text-gray-500 py-1">{notes}</p>
       <div className="flex gap-4 py-2">
        {auto ? (
        <button disabled className="px-2 py-1 bg-gray-300 rounded-full text-sandbox-card cursor-not-allowed text-xs">
          Auto Update
        </button>
       ) : (
        <>
        <button className="px-1.5 bg-sandbox-navy rounded-full text-white hover:cursor-pointer"
         onClick={increments}>+</button>
        <button className="px-2 bg-sandbox-navy rounded-full text-white hover:cursor-pointer"
        onClick={decrement}>-</button>
        </>
       )}
        
      </div>
    </div>
    </div>
  )
}

export default StatsCard