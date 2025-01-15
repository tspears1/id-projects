import React, { useEffect, useState } from "react";

// Context ==================================
import { StoreContext } from "./useStore.js";

/**
 * @component StoreProvider - Provides store context.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.children - Component children.
 *
 * @returns {JSX.Element} component - Component JSX.
 */
const StoreProvider = ({ children }) => {
   const [activePhase, setActivePhase] = useState(null);

   useEffect(() => {
      console.log('activePhase', activePhase)
   }, [activePhase])

   return (
      <StoreContext.Provider
         value={{
            activePhase,
            setActivePhase,
         }}
      >
         {children}
      </StoreContext.Provider>
   );
};

StoreProvider.displayName = "StoreProvider";

export { StoreProvider }