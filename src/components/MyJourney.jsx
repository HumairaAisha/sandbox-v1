import statData from "./data/stats"
function MyJourney() {
  
  const milestone = JSON.parse(localStorage.getItem("sandbox:milestoneRecord")) || []

  // Read the values StatsCard already saved
  const stats = statData.map((stat) => {
    const saved = localStorage.getItem(`sandbox:stats-${stat.id}`)
    return {
      ...stat,
      value: saved !== null ? JSON.parse(saved) : 0
    }
  })

  return (
    <div className="px-4 py-4 bg-sandbox-ghost">
      <h2 className="font-semibold text-xl my-2">The Journey</h2>
      <div className="flex gap-3">
        {stats.filter(stat => stat.auto === true)
        .map((stat) => (
          <div className="flex gap-2" key={stat.label}>
            <p className="text-gray-600">{stat.value} {stat.label}</p>
             <span className="text-sandbox-navy/60 text-3xl -my-2">·</span>
          </div>
        ))}
        <p className="text-gray-600">{milestone.length} Milestones</p>
      </div>
      <div className="py-4">
        <p>⚡ Struggled with async/await</p>
        <p>📖 Finally understood TypeScript basics  </p>
        <p>📖 Began understanding how things connect</p>
        <p>⚡ Debugged responsive layout issue</p>
        <p>🎯 Designed my own learning system  </p>
      </div>
      <div>

      </div>
    </div>
  
  )
}

export default MyJourney