import ProfileIdentity from "./components/ProfileIdentity"
import ProfileInformation from "./components/ProfileInformation"


function Profile() {
  /* const [openSnapshot, setOpenSnapshot] =  useState(false)
  const openSnapshotModal = () => setOpenSnapshot(true)
  const closeSnapshotModal = () => setOpenSnapshot(false) */
  return (
    <div className="min-h-screen w-full px-6 py-8">
     {/* <div className="flex justify-end p-4">
      <button onClick={openSnapshotModal}
      className="bg-sandbox-navy text-sandbox-ghost px-2 py-1 rounded hover:cursor-pointer">View My Journey</button>
      {openSnapshot && (
         <Modal onClose={closeSnapshotModal}>
        <MyJourney />
       </Modal>
      )}
     </div> */}
      <div className="flex flex-col gap-8">
    
       <ProfileIdentity/>
        <ProfileInformation/>
     
      </div>
    </div>
  )
}

export default Profile