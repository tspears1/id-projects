// React ====================================
import React, { useEffect } from "react";

// Components ===============================
import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarHeader,
   SidebarRail
} from "../../ui/Sidebar/Sidebar.jsx"
import { ProjectSwitcher } from "../../molecules/ProjectSwitcher/ProjectSwitcher.jsx";
import { NavPhases } from "../../molecules/NavPhases/NavPhases.jsx";

// Context ==================================
import { useDatabase } from "../../../context/database/useDatabase.js";

/**
 * @component AppSidebar - Main application component.
 *
 * @param {Object} props - Component props.
 *
 * @returns {JSX.Element}
 */
const AppSidebar = ({ ...props }) => {
   const { projects, sprints, org, taxonomy } = useDatabase();

   return (
      <>
         <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
               { projects && <ProjectSwitcher projectData={projects} /> }
            </SidebarHeader>
            <SidebarContent>
               { taxonomy && <NavPhases phases={taxonomy?.phases} /> }
            </SidebarContent>
            <SidebarFooter>
               <div style={{ fontSize: 'var(--font-size-xs)'}}>&copy; {org?.brand} {new Date().getFullYear()}</div>
            </SidebarFooter>
            <SidebarRail />
         </Sidebar>
      </>
   )
}

AppSidebar.displayName = "AppSidebar";

export { AppSidebar }