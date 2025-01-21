// React ====================================
import { useMemo, useCallback } from "react";

// Components ===============================
import { Alert, AlertTitle, AlertDescription } from "../../ui/Alert/Alert.jsx";
import { Icon } from "../../atoms/Icon/Icon.jsx";

// Utils ====================================
import { get } from "../../../utils/objects.js";
import { Sprint } from "../../molecules/Sprint/Sprint.jsx";

const SprintGrid = ({ sprints, activeProject, activePhase, activeLayout }) => {

   // Methods ================================

   /**
    * @function getSprintData
    *
    * Get sprint data from the sprints object.
    *
    * @param {Object} sprints
    * @param {Object} project
    * @param {Object} phase
    * @returns {Array}
    */
   const getSprintData = (sprints, project = null, phase = null) => {
      const sprintData = get(sprints, `${project.slug}.${phase.value}`, [])
      return sprintData ?? []
   }

   /**
    * @function getActiveSprints
    *
    * Get active sprints from the sprints object.
    *
    * @param {Object} sprints
    * @param {Object} project
    * @param {Object} phase
    * @returns {Sprint[]}
    */
   const getActiveSprints = useCallback(( sprints, project, phase) => {
      const sprintData = getSprintData( sprints, project, phase )
      let _activeSprints = []
      for (const [key, value] of Object.entries(sprintData)) {
         _activeSprints = [..._activeSprints, { slug: key, ...value}]
      }
      return _activeSprints;
   }, [])

   // State ==================================

   /** @type {Sprint[]} */
   const activeSprints = useMemo(() => {
      return getActiveSprints( sprints, activeProject, activePhase )
   }, [sprints, activeProject, activePhase, getActiveSprints])

   return (
      <div className="sprint-grid" data-layout={activeLayout}>
         <h2 className="sr-only">Sprints</h2>
         {activeSprints.length > 0 && activeSprints.map((sprint) => (
            <Sprint key={sprint.slug} sprint={sprint} layout={activeLayout} />
         ))}
         {!activeSprints.length > 0 &&
            <Alert variant='warning'>
               <Icon icon='warning-octagon' />
               <AlertTitle>No Sprints Found</AlertTitle>
               <AlertDescription>There are no sprints yet for this project and/or phase.</AlertDescription>
            </Alert>}
      </div>
   )
}

export { SprintGrid }

// Types ====================================
/**
 * @typedef {Object} Sprint
 * @property {string} title - Sprint title.
 * @property {string} date - Sprint date.
 * @property {string} project - Sprint project.
 * @property {string} phase - Sprint phase.
 * @property {Asset[]} assetList - Array of assets.
 * @property {string} slug - Sprint slug.
 */

/**
 * @typedef {Object} Asset
 * @property {string} title - Asset title.
 * @property {string} lastModified - Asset last modified date.
 * @property {string} fileUrl - Asset file url.
 * @property {string} status - Asset status.
 */