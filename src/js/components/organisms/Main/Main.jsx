// React ====================================
import { useMemo } from "react";

// Components ===============================
import { SprintGrid } from "../SprintGrid/SprintGrid.jsx";

// Context ==================================
import { useDatabase } from "../../../context/database/useDatabase.js";
import { useStore } from "../../../context/store/useStore.js";

const Main = () => {

   const { sprints } = useDatabase();
   const { activeProject, activePhase } = useStore();

   const dataLoaded = useMemo(() => !!sprints && !!activeProject && !!activePhase, [sprints, activeProject, activePhase])

   return (
      <main className="site-main">
         { dataLoaded && <SprintGrid sprints={sprints} activeProject={activeProject} activePhase={activePhase} /> }
      </main>
   )
}

export { Main }