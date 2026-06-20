

function Heading({title,text,tagline}) {
  return (
    <div>
      <h3 className="font-semibold text-lg md:text-xl px-2 py-2">{title}</h3>
      <p className="text-sm my-1 px-2">{text}</p>
      <p className="text-sm px-2">{tagline}</p>
    </div>
  )
}

export default Heading