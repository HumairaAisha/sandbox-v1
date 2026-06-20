

function BadgeLabel({title}) {
  return (
    <div className='flex items-center justify-center py-1 px-1.5'>
          <p className='bg-sandbox-card border border-sandbox-ghost/50 rounded-full py-1 px-3 mb-2 text-sandbox-ghost font-semibold font-mono tracking-widest uppercase'>{title}</p>
        </div>
  )
}

export default BadgeLabel