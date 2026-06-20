import { useNavigate } from "react-router-dom"
import ProfileEdit from "../forms/ProfileEdit"

function ProfileEditPage() {
   const navigate = useNavigate()

   const user = JSON.parse(localStorage.getItem('sandbox:user')) || {}
    const onAddProfile = (data) => {
      const updated = { ...user, ...data }
      localStorage.setItem('sandbox:user', JSON.stringify(updated))
      navigate("/profile")
   }
  return (
    <>
    <ProfileEdit onAddProfile={onAddProfile}
    initialProfileData={user}/>
    </>
  )
}

export default ProfileEditPage