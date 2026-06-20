import SelectOptionField from "./SelectOptionField"
import LearningData from '../../data/LearningData.json'


import { useFormContext } from "react-hook-form"

function CategoryField() {

   const {watch} = useFormContext()

   const selectedCategory = watch("category");
   const selectedTechnology = watch("technology")
  

   //category option
   const categoryOption = Object.keys(LearningData).map((category) => (
      {value: category,
      label: category, 
      }
   ))

   //technology depends on selectedcategory 
   const technologyOption = selectedCategory ? Object.keys(LearningData[selectedCategory]).map((tech) =>(
      {value: tech,
         label: tech
      }
   )) : []

   // concept depends on technology 
   const conceptOption = selectedTechnology ? LearningData[selectedCategory][selectedTechnology].map((concept) => (
      {value: concept,
         label: concept,
      }
   )) : []

   

  return (
    <div className="flex flex-col gap-4">
      <SelectOptionField
      name="category"
      label="Category"
      requiredMessage="category is required"
      options={categoryOption}
      />

      <SelectOptionField
      name="technology"
      label="Focus Area"
      requiredMessage="select required technology"
      options={technologyOption}
      disabled={!selectedCategory}
      />

      <SelectOptionField
      name="concept"
      label="Concept"
      requiredMessage="concept is required"
      options={conceptOption}
      disabled={!selectedTechnology}

      />



    </div>
  )
}

export default CategoryField