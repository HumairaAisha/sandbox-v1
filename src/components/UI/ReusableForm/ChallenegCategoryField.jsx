import SelectOptionField from "./SelectOptionField"
import ChallengeData from "../../data/ChallengeData.json"
import { useFormContext } from "react-hook-form"

function ChallenegCategoryField() {
   const {watch} = useFormContext()
   
   const selectedCategory = watch("challengeCategory")
   const selectedTecnology = watch("challengeTechnology")

   const categoryOption = Object.keys(ChallengeData).map((category) => (
      {value: category,
      label: category,
      }
   ))

   const technologyOption = selectedCategory ? Object.keys(ChallengeData[selectedCategory]).map((tech) => (
      {value: tech,
         label: tech,
      }
   )) : []

   const challengeOption = selectedTecnology ? ChallengeData[selectedCategory][selectedTecnology].map((challenge) => (
      {value: challenge,
         label: challenge,
      }
   )) : []
   
  return (
    <div className="flex flex-col gap-4">
      <SelectOptionField
      name={"challengeCategory"}
      label={"Category"}
      options={categoryOption}
      />

       <SelectOptionField
      name={"challengeTechnology"}
      label={"Focus Area"}
      options={technologyOption}
      disabled={!selectedCategory}
      />

       <SelectOptionField
      name={"challenge"}
      label={"Challenge Type"}
      options={challengeOption}
      disabled={!selectedTecnology}
      />
    </div>
  )
}

export default ChallenegCategoryField