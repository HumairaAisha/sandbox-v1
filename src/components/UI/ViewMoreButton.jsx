
function ViewMoreButton({onClick}) {
  return (
    <div className="flex justify-end">
      <button onClick={onClick} className="bg-[#0A1A29] text-white mt-2 text-sm px-1 py-1 rounded font-semibold hover:cursor-pointer">
         View Details
         </button>
    </div>
  )
}

export default ViewMoreButton