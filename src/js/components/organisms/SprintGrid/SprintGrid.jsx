// Context ==================================
import { useDatabase } from "../../../context/database/useDatabase.js";

const SprintGrid = () => {

   const { sprints, taxonomy } = useDatabase();

   return (
      <div className="sprint-grid">
         The cards.
      </div>
   )
}

export { SprintGrid }