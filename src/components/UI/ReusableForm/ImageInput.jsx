import { useState, useEffect } from "react"
import { useFormContext } from "react-hook-form"

function ImageInput() {
   const {register, watch} = useFormContext()
   const [preview, setPreview] = useState('')

   const file = watch('imageFile')
   useEffect(() => {
    if (file && file[0] instanceof File) {
       const url = URL.createObjectURL(file[0])
    setPreview(url)
    return () => URL.revokeObjectURL(url)
    } else {
      setPreview('')
    }
   },[file])
   
  return (
    <div className="flex flex-col py-1.5 relative">
      <div className="flex flex-col gap-1.5 py-2">
         <input type="file" {...register("imageFile")}  accept="image/*"
         className="py-2 px-2 border border-gray-400 bg-gray-200 text-sm rounded absolute"
         />
         {preview && <img src={preview} alt="preview upload" className=""/>}
      </div>
    </div>
  )
}

export default ImageInput