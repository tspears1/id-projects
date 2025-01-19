
// Components ===============================
import { Icon } from "../../atoms/Icon/Icon.jsx";
import { Button } from "../../ui/Button/Button.jsx";

// Context ==================================
import { useStore } from "../../../context/store/useStore.js";

const Filters = () =>{
   const { activeLayout, setActiveLayout } = useStore();

   const handleLayoutChange = (event) => {
      setActiveLayout(event.target.value);
   }

   return (
      <div className='filters'>
         <fieldset className='filters__fieldset'>
            <legend className='filters__legend sr-only'>Layout Filters</legend>
            <div className='filters__group'>
               <Button
                  variant='ghost'
                  size='icon'
                  tooltip='Grid View'
                  asChild
                  data-active={activeLayout === 'grid'}
               >
                  <label className="filters__filter">
                     <input
                        type='radio'
                        name='layout'
                        value='grid'
                        checked={activeLayout === 'grid'}
                        onChange={handleLayoutChange}
                     />
                     <Icon icon='squares-four' />
                  </label>
               </Button>
               <Button
                  variant='ghost'
                  size='icon'
                  tooltip='Table View'
                  data-active={activeLayout === 'table'}
                  asChild
               >
                  <label className="filters__filter">
                     <input
                        type='radio'
                        name='layout'
                        value='table'
                        checked={activeLayout === 'table'}
                        onChange={handleLayoutChange}
                     />
                     <Icon icon='table' />
                  </label>
               </Button>
            </div>
         </fieldset>
      </div>
   )
}

export { Filters }