
import { Navigate } from "react-router-dom";
import useLocalStorage from "../components/data/useLocalStorage";
import LandingPage from "../pages/LandingPage/LandingPage";
import { useEffect, useState } from "react";

function RootRedirect() {
   const [user] = useLocalStorage('user', null);
  //const alreadyVisited = sessionStorage.getItem("sandbox:visited");

  /* if (user && !alreadyVisited) {
    sessionStorage.setItem("sandbox:visited", "true");
    return <Navigate to="/dashboard" replace />;
  } */

    const [shouldRedirect] = useState(() => {
    const alreadyVisited = sessionStorage.getItem("sandbox:visited");
    return Boolean(user) && !alreadyVisited;
  });
  useEffect(() => {
    if (shouldRedirect) {
      sessionStorage.setItem("sandbox:visited", "true");
    }
  }, [shouldRedirect]);

  if (shouldRedirect) {
    return <Navigate to="/dashboard" replace />;
  }

  return <LandingPage />;
}

export default RootRedirect