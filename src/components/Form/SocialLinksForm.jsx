
import InputFieldUrl from '../UI/ReusableForm/InputFieldUrl'
function SocialLinksForm() {
  return (
   <>
   <InputFieldUrl
   name={"gitHub"}
   label={"GitHub"}
   type={"url"}
   required={false}
   />   
   <InputFieldUrl
   name={"linkedIn"}
   label={"LinkedIn"}
   type={"url"}
   required={false}
   />
   <InputFieldUrl
   name={"twitter"}
   label={"X"}
   type={"url"}
   required={false}
   />
   <InputFieldUrl
   name={"facebook"}
   label={"Facebook"}
   type={"url"}
   required={false}
   />
   <InputFieldUrl
   name={"instagram"}
   label={"Instagram"}
   type={"url"}
   required={false}
   />
   
   </>
  )
}

export default SocialLinksForm