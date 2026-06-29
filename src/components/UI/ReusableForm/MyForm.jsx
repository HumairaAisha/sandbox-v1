import { useForm, FormProvider } from "react-hook-form"
import SecondaryButton from "../SecondaryButton"
import { useEffect } from "react";


function MyForm({ children, onSubmit, defaultValues = {}}) {
   
   const  methods  = useForm({
      defaultValues: defaultValues
   })
    useEffect(() => {
    methods.reset(defaultValues);
  }, [defaultValues, methods]);
   

   const { handleSubmit } = methods
 

   const handleFormSubmit = (data) => {
      onSubmit(data)
   }

   
  return (
    <div className='flex flex-col px-4 py-2'>
      <FormProvider {...methods}>
         <form onSubmit={handleSubmit(handleFormSubmit)}>
            {children}
         
         </form>
      </FormProvider>
    </div>
  )
}

export default MyForm