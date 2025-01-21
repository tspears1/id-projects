// React ====================================
import { useMemo } from "react";

// Components ===============================
import { SprintGrid } from "../SprintGrid/SprintGrid.jsx";

// Context ==================================
import { useDatabase } from "../../../context/database/useDatabase.js";
import { useStore } from "../../../context/store/useStore.js";

const Main = () => {

   const { sprints } = useDatabase();
   const { activeProject, activePhase, activeLayout } = useStore();

   const dataLoaded = useMemo(() => !!sprints && !!activeProject && !!activePhase && !!activeLayout, [sprints, activeProject, activePhase, activeLayout])

   return (
      <main className="site-main">
         { dataLoaded && <SprintGrid sprints={sprints} activeProject={activeProject} activePhase={activePhase} activeLayout={activeLayout} /> }
      </main>
   )
}

export { Main }