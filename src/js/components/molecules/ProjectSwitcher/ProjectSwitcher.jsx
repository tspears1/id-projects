/* eslint-disable react/prop-types */
// React ====================================
import { useMemo, useEffect } from "react";

// Components ===============================
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "../../ui/DropdownMenu/DropdownMenu.jsx";
import { Icon } from "../../atoms/Icon/Icon.jsx";
import {
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from '../../ui/Sidebar/Sidebar.jsx'

// Context ==================================
import { useSidebar } from "../../../context/sidebar/useSidebar.js";
import { useStore } from "../../../context/store/useStore.js";

/**
 * @component ProjectSwitcher - Main application component.
 *
 * @param {import("react").ComponentProps} props - Component props.
 *
 * @returns {JSX.Element}
 */
const ProjectSwitcher = ({ projectData }) => {
   const { selected, icon, projects } = projectData;
   const { isMobile } = useSidebar();
   const { activeProject, setActiveProject } = useStore();

   useEffect(() => {
      if (activeProject) { return }
      const defaultProject = projects.find((project) => project.slug === selected)
      setActiveProject(defaultProject);
   }, [])

   const filteredProjects = useMemo(() => projects.filter((p) => p.archived === false), [projects])

   if (!activeProject) { return null }

   return (
      <SidebarMenu className="project-switcher">
         <SidebarMenuItem>
            { filteredProjects.length > 1 &&
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <SidebarMenuButton
                        size="lg"
                        className="project-switcher__trigger"
                        tooltip="Switch Project"
                     >
                        <div className="project-switcher__trigger-icon">
                           <Icon icon={activeProject.icon ??icon} className="project-switcher__trigger-icon-svg" />
                        </div>
                        <div className="project-switcher__trigger-title">
                              { activeProject.title }
                        </div>
                        <Icon icon='caret-up-down' className="project-switcher__trigger-icon-caret" />
                     </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                     className="project-switcher__dialog"
                     align="start"
                     side={isMobile ? "bottom" : "right"}
                     sideOffset={4}
                  >
                     <DropdownMenuLabel className="project-switcher__dialog-label">
                        Projects
                     </DropdownMenuLabel>
                     <DropdownMenuSeparator className="project-switcher__dialog-separator" />
                     {filteredProjects.map((project) => (
                        <DropdownMenuItem
                           key={project.title}
                           onClick={() => setActiveProject(project)}
                           className="project-switcher__dialog-item"
                        >
                           <div className="project-switcher__dialog-item-icon">
                              <Icon icon={project.icon ?? icon} className="project-switcher__dialog-item-icon-svg" />
                           </div>
                           {project.title}
                        </DropdownMenuItem>
                     ))}
                  </DropdownMenuContent>
               </DropdownMenu>
            }
            { filteredProjects.length === 1 &&
               <SidebarMenuButton
                  asChild
                  size="lg"
                  className="project-switcher__trigger"
                  data-placeholder="true"
                  inert='true'
               >
                  <div>
                     <div className="project-switcher__trigger-icon">
                        <Icon icon={icon} className="project-switcher__trigger-icon-svg" />
                     </div>
                     <div className="project-switcher__trigger-title">
                           { activeProject.title }
                     </div>
                  </div>
               </SidebarMenuButton>
            }
         </SidebarMenuItem>
      </SidebarMenu>
   )
}

export { ProjectSwitcher }