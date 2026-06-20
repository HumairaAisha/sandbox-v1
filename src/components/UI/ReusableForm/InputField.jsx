import { useFormContext } from "react-hook-form"

function InputField({name, label, type, required, requiredMessage, ...rest}) {
   const {register, formState: {errors}} = useFormContext()
  return (
    <div className="flex flex-col py-1.5">
     <div className="flex flex-col gap-1.5 py-2">
       <label htmlFor={name} className="font-semibold">{label}</label>
      <input type={type || "text"}
      {...register(name, required ? {required : requiredMessage || "This field is required"} : {})}
      {...rest}
      className="py-2 px-2 border border-gray-400 bg-gray-200 text-sm rounded"
      />
     </div>
      <div>
        {errors[name] && (<p className='text-red-600 text-sm -mt-2'>{errors[name].message}</p>)}
      </div>
    </div>
  )
}

export default InputField