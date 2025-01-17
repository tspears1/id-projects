import { Icon } from "../../atoms/Icon/Icon.jsx";
import {
   Tooltip,
   TooltipContent,
   TooltipTrigger,
} from "../../ui/Tooltip/Tooltip.jsx";

const StyleToggle = ({ tooltip, className = "", ...props }) => {
   const button = (
      <button
         className={`style-toggle button ${className}`}
         data-variant='outline'
         data-size='icon'
      >
         <Icon icon="paint-roller" />
         <span className="sr-only">Style Toggle</span>
      </button>
   )

   if (!tooltip) {
      return button;
   }

   if (typeof tooltip === "string") {
      tooltip = {
         children: tooltip,
      };
   }

   return (
   <Tooltip>
      <TooltipTrigger asChild>
         {button}
      </TooltipTrigger>
      <TooltipContent
         side="bottom"
         align="center"
         {...tooltip}
      />
   </Tooltip>
   );
}

export { StyleToggle }