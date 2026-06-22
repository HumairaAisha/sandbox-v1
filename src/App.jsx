import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import LearnTrack from "./pages/LearnTrack";
import Milestone from "./pages/Milestone";
import Resources from "./pages/Resources";
import Profile from "./pages/profile/Profile";
import Challenges from "./pages/Challenges";
import ProjectHub from "./pages/ProjectHub";
import ProjectJournal from "./pages/ProjectJournal";
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Onboarding from "./components/Onboarding";
import ProfileEditPage from "./pages/profile/components/ProfileEditPage"
import RootRedirect from "./components/RootRedirect";


function App() {
  
  return (
    <>
    
   
    <Routes>
      {/* <Route path="/app" element ={
        hasLoggedIn === "true"
        ? <Navigate to="/dashboard" replace />
        : <Navigate to="/onboarding" replace />
      }/> */}

      <Route path="/" element={<RootRedirect/>}/>
      <Route path="/home" element={<LandingPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/> 
      <Route path="/onboarding" element={<Onboarding />}/>

     {/*  <Route path="/" element={<Navigate to="/" replace />} /> */}

      <Route element={<Layout />}>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/progress"  element={<LearnTrack/>}/>
      <Route path="/milestone"  element={<Milestone/>}/>
      <Route path="/challenge" element={<Challenges/>}/>
      <Route path="/resources"  element={<Resources/>}/>
      <Route path="/projectHub" element={<ProjectHub/>} />
      <Route path="/projectJournal" element={<ProjectJournal/>}/>
      <Route path="/profile"  element={<Profile/>}/>
      <Route path="/profileEdit" element={<ProfileEditPage/>}/>
      
      
      </Route>
    </Routes>
    

    <Toaster position="top-right" reverseOrder={false}
    toastOptions={{
      success: {
        duration:2000,
        style: {
          width: "320px",
          background:"#0F172A",
          color:"#fff",
          padding: "12px 16px"

        }
      },
      error: {
        duration: 2500,
        style: {
          background:"#dc2626",
          color: '#fff',
          width: "300px",
          padding: "12px 16px",
          borderRadius: "10px"
        }
      }
    }}
    />
    </>
  )
}

export default App
