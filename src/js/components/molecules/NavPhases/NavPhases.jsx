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
                     className="nav-phases__menu-button"
                     isActive={activePhase?.value === phase.value}
                     data-phase={phase.value}
                     tooltip={phase.label}
                     asChild
                  >
                     <label className="nav-phases__menu-button-label">
                        <input
                           type="radio"
                           name="phases"
                           value={phase.value}
                           className="nav-phases__menu-button-input focus-visible-ring"
                           checked={activePhase?.value === phase.value}
                           onChange={() => setActivePhase(phase)}
                        />
                        { phase.icon && <Icon icon={phase.icon} className="nav-phases__menu-button-icon" /> }
                        <span>{phase.label}</span>
                        <div className="nav-phases__menu-button-radio-icon">
                           <Icon icon='circle' weight={ activePhase?.value === phase.value ? 'fill' : 'bold' } />
                        </div>
                     </label>
                  </SidebarMenuButton>
               </SidebarMenuItem>
            ))}
            {/* TODO: Add tooltip to phases. */}
         </SidebarMenu>
      </SidebarGroup>
   )
}

export { NavPhases }