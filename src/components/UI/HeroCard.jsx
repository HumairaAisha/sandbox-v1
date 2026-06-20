
import  {  ChartNoAxesColumn, Lightbulb, Notebook } from 'lucide-react';
const HeroIcons = {ChartNoAxesColumn, Lightbulb, Notebook}

function HeroCard({iconName, title, description}) {

   const Icons = HeroIcons[iconName]
  return (
    <div className='rounded-lg bg-sandbox-card text-sandbox-ghost shadow-md p-4 hover:shadow-sandbox-ghost transition cursor-pointer '>
      <div className='flex gap-4 pt-6 '>
      <div className='rounded-full bg-sandbox-ghost p-2 md:p-3 lg:p-2'>
         <Icons size={40} className='text-sandbox-navy'/>
      </div>
      <h3 className='font-semibold text-2xl mt-4 leading-tight mb-3'>{title}</h3>
    </div>
    <p className='text-sm text-gray-300 leading-relaxed my-6'>{description}</p>
    </div>
  )
}

export default HeroCard