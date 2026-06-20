import { useFormContext } from "react-hook-form"

function TextAreaField({name, label, type, required,requiredMessage, className, ...rest}) {
  const {register, formState:{errors}} = useFormContext()
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 py-2">
      <label htmlFor={name} className="font-semibold">{label}</label>
      <textarea {...register(name, required ? {required : requiredMessage || "This field is requird" , minLength: {
        value: 20,
        message: "Field required more 20 charcters information"
      },
    maxLength: {
      value:500,
      message:"Content has reached maximum limit of 500 characters"
    }
    }: {})} type={type || "text"} 
      
      {...rest} 
      className={`w-full px-2 py-1.5 h-[100px] border border-gray-400 bg-gray-200 text-sm rounded ${className || ''}`}
      />
      </div>
      {errors[name] && (<p className="text-red-600 text-sm -mt-2">{errors[name].message}</p>)}
    </div>
  )
}

export default TextAreaField