
function SecondaryButton({onClick, lable}) {
  return (
    <div className='flex justify-end'>
      <button type='submit' onClick={onClick} className='bg-sandbox-navy text-sandbox-ghost font-semibold px-2 py-1.5 my-2 rounded hover:cursor-pointer'>
         {lable}
         </button>
    </div>
  )
}

export default SecondaryButton