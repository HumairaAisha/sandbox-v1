import Card from "../components/Card"
import StatsCard from "../components/StatsCard"
import DashboardHeader from "./DashboardHeader"
import Chart from "../components/data/Chart"
import ChartComponent from "../components/data/ChartComponent"
import { useContext } from "react"
import { DashboardStatsContext } from "../CustomHook/DashboardStatsContext"


  function Dashboard() {

  const {stats} = useContext(DashboardStatsContext)

   
  return (
    <div className="px-8 py-6 w-full min-h-screen bg-sandbox-ghost ">
     
      {/*  <Card /> */}
        <DashboardHeader />
 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
         {stats.map((stat) => (
            <div key={stat.id} className="rounded-lg bg-gray-50 shadow hover:shadow-sandbox-card hover:cursor-pointer">
               <StatsCard id={stat.id} title={stat.title} value={stat.value} notes={stat.notes} auto={stat.auto} iconName={stat.iconName}/>
            </div>
         ))}
      </div>
    
    </div>
  )
}

export default Dashboard