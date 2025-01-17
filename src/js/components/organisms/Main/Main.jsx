// Components ===============================
import { SprintGrid } from "../SprintGrid/SprintGrid.jsx";

// Context ==================================
import { useDatabase } from "../../../context/database/useDatabase.js";

const Main = () => {

   const { sprints, taxonomy } = useDatabase();

   return (
      <main className="site-main">
         { sprints && taxonomy && <SprintGrid sprints={sprints} taxonomy={taxonomy} /> }
      </main>
   )
}

export { Main }