import PrimaryButton from "../../../components/UI/PrimaryButton";
import ReusableCard from "../../../components/UI/ReusableCard";
import SkillGroup from "../../../components/UI/SkillGroup";
import useLocalStorage from "../../../components/data/useLocalStorage";
import ActionsButton from "../../../components/UI/ActionsButton";
import { X } from "lucide-react";

function Skills() {
  const [skillGroups, setSkillGroups] = useLocalStorage ("skillGroup", [
  
    {id: "primary-stack", label: "Primary Stack", items: [], variant: "primary"},
    {id: "tools", label: "Tools", items: [], variant: "secondary"},
    {id: "familiar-with", label: "Familiar With", items: [], variant: "secondary"},
    {id: "exploring", label: "Exploring", items: [], variant: "secondary"}
 ])

  const handleAddSkill = (skillId, newSkill) => {
    setSkillGroups((prev) => prev.map((skill) => (
      skill.id === skillId ? {...skill, items: [...skill.items, newSkill]} : skill
    )))
  }

  const handleDeleteSkill = (SkilltoDeleteId, deleteSkill) => {
    setSkillGroups((prev) => prev.map((skill) => (
      skill.id === SkilltoDeleteId ? {...skill, items: skill.items.filter(item => item !== deleteSkill)} : skill
    )))
  }
  return (
       <ReusableCard className="h-full">
   <div className="flex justify-between">
      <h3 className="text-sandbox-navy">Skills</h3>
   </div>
   <div className="bg-[#3c4a69] w-full h-0.5 my-1.5"></div>
    {skillGroups.map((skill) => (
      <div className="flex w-full" key={skill.id}>
          <SkillGroup
      
      label={skill.label}
      items={skill.items}
      variant={skill.variant}
      onAddSkill={(newSkill) => handleAddSkill(skill.id, newSkill)}
      onDeleteSkill={(itemToDelete) => handleDeleteSkill(skill.id, itemToDelete)}
      />
      </div>

    ))}

      </ReusableCard>
    
  )
}

export default Skills