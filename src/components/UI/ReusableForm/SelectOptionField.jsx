import { useFormContext } from "react-hook-form"

function SelectOptionField({name, label, options = [], requiredMessage, required, validate, ...rest}) {
  //const { register, formState: {errors} } = useFormContext();
  let register
  let errors

  try {
    const methods = useFormContext()
    register = methods?.register
    errors = methods?.formState?.errors
  } catch {
    register = null
    errors = null
  }
  return (
    
      <div className="flex flex-col gap-2">
        <label htmlFor={name} className="font-semibold">{label}</label>

        <select 
        id={name}
        name={name}
        className="py-1 border border-gray-400 bg-gray-200 text-sm rounded"
        {...(register
          ? register(name, {
            ...(required && {required: requiredMessage || "select option"}),
            ...(validate && {validate})
          })
          : {})}
        {...rest}
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}

        </select>
        <div>
          {errors && errors[name] && (
        <p className="text-red-600 text-sm -mt-1.5">
          {errors[name].message}
        </p>
      )}
        </div>
      </div>
      
    
  )
}

export default SelectOptionField