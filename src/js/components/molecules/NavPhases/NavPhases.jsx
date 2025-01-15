// React ====================================
import { useEffect} from "react";

// Components ===============================
import {
   SidebarGroup,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from "../../ui/Sidebar/Sidebar.jsx";

// Context ==================================
import { useStore } from "../../../context/store/useStore.js";
import { useSidebar } from "../../../context/sidebar/useSidebar.js";
import { Icon } from "../../atoms/Icon/Icon.jsx";

const NavPhases = ({ phases, ...props }) => {
   const { activePhase, setActivePhase } = useStore();
   const { isMobile } = useSidebar();

   const handleClick = (phase) => {
      setActivePhase(phase);
   }

   useEffect(() => {
      // Set initial phase.
      setActivePhase(phases[0])

   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   return (
      <SidebarGroup>
         <SidebarGroupLabel>Phases</SidebarGroupLabel>
         <SidebarMenu>
            {phases.map((phase) => (
               <SidebarMenuItem
                  key={phase.value}
               >
                  <SidebarMenuButton
                     onClick={() => handleClick(phase)}
                     className="nav-phases__menu-button"
                     size="lg"
                     variant="ghost"
                     isActive={activePhase?.value === phase.value}
                     data-phase={phase.value}
                  >
                     { phase.icon && <Icon icon={phase.icon} className="nav-phases__menu-button-icon" /> }
                     <div className="nav-phases__menu-button-label">
                        {phase.label}
                     </div>
                  </SidebarMenuButton>
               </SidebarMenuItem>
            ))}
         </SidebarMenu>
      </SidebarGroup>
   )
}

export { NavPhases }