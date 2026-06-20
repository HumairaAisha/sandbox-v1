import { useState, useEffect } from "react";
import statData from "../components/data/stats";
import { DashboardStatsContext } from "./DashboardStatsContext";
import useLocalStorage from "../components/data/useLocalStorage";

export function DashboardStatsProvider({ children }) {
  const [learnRecords, setLearnRecords] = useLocalStorage("learnRecords", []);
  const [challengeRecords, setChallengeRecords] = useLocalStorage("challengeRecords", []);
  const [projectRecords, setProjectRecords] = useLocalStorage("projectRecord", []);
  
  const [stats, setStats] = useState(statData);

  
    useEffect(() => {
      const hoursSpent = learnRecords.reduce((sum, item) => sum + (Number(item.hours) || 0), 0);

    const updatedStats = statData.map((stat) => {
      if (stat.id === 2) return { ...stat, value: hoursSpent };
      if (stat.id === 3) return { ...stat, value: learnRecords.length };
      if (stat.id === 4) return { ...stat, value: challengeRecords.length };
      if (stat.id === 6) return { ...stat, value: projectRecords.length };
      return stat;
    });
     setStats(updatedStats);
    }, [learnRecords, challengeRecords, projectRecords])

  return (
    <DashboardStatsContext.Provider value={{ stats, 
      learnRecords, setLearnRecords,       
      challengeRecords, setChallengeRecords,
      projectRecords, setProjectRecords,
     }}>
      {children}
    </DashboardStatsContext.Provider>
  );
}


