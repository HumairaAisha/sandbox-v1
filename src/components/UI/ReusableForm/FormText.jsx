
function FormText({title,text}) {
  return (
    <div>
      <h3 className="font-bold text-xl text-center py-2">{title}</h3>
      <p className="text-center pb-6 italic text-sm">{text}</p>
    </div>
  )
}

export default FormText