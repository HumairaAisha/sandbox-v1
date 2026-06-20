import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

function ChartComponent() {
   const milestoneRecords = JSON.parse(localStorage.getItem("milestoneRecord")) || []
   milestoneRecords.sort((a, b) => Number(a.week) - (b.week))
   const DataCharts =  milestoneRecords.map((record) => ({
      week: "Week " + record.week,
      ConfidenceLevel: Number(record.confidenceLevel)
   }))
   
   
  return (
    <div className='h-screen'>
      <ResponsiveContainer width="100%" height="50%" aspect={300 / 80}>
         <LineChart width={500} height={200} data={DataCharts}>
         <CartesianGrid  />
         <XAxis dataKey="week" label={{ value: "Confidence Level", position: "insideBottom", offset: -10 }} />
         <YAxis />
         <Tooltip />
         
         <Line type="monotone" dataKey={"ConfidenceLevel"} stroke="#0F172A" fill="#0F172A"  />
      </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartComponent