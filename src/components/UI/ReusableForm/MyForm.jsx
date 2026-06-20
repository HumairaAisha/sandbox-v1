import { useForm, FormProvider } from "react-hook-form"
import SecondaryButton from "../SecondaryButton"


function MyForm({ children, onSubmit, defaultValues = {}}) {
   
   const  methods  = useForm({
      defaultValues: defaultValues
   })
   

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