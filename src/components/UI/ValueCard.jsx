
import { Repeat, SearchCode, Layers, Compass } from 'lucide-react';
 const Icons = {Repeat, SearchCode, Layers, Compass}

function ValueCard({iconName, title, desc}) {
  

   const IconsComponent = Icons[iconName]

  return (
    <div className='rounded-lg bg-sandbox-card shadow-md p-6 hover:shadow-sandbox-ghost transition cursor-pointer duration-500 hover:scale-[1.03] flex flex-col items-center text-center justify-center'>
     
       <div className='rounded-lg bg-sandbox-ghost text-center p-2 mb-4'>
         <IconsComponent size={32}/>
      
     </div>
     <p className="text-lg font-medium my-1 px-2 text-sandbox-ghost">{title}</p>
      <p className="text-sm px-2 text-sandbox-ghost">{desc}</p>
    </div>
  )
}

export default ValueCard