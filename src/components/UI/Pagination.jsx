
function Pagination({currentPage, totalPages, onPageChange}) {
 
   if (totalPages === 0 ) return null 
  return (   
    <div>
      <div className="flex gap-2 justify-end pt-8">
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} 
        className="px-2 bg-sandbox-navy text-sandbox-ghost rounded hover:cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Prev
        </button>
      <span className="text-sandbox-card"> Page {currentPage} of {totalPages}</span>
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}
         className="px-2 bg-sandbox-navy text-sandbox-ghost rounded hover:cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"  
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination