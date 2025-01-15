import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.scss'
import App from './js/App.jsx'

const domNode = document.getElementById("_root")
const root = createRoot(domNode)
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// React ============================================
// import './main.scss'
// import React, { StrictMode } from "react";
// import { hydrateRoot } from "react-dom/client";
// import { renderToString } from "react-dom/server";

// // Components ============================================
// import App from "./js/App.jsx";

// // Render ============================================
// const domNode = document.getElementById("_root")
// const ssr = renderToString(React.createElement(App));
// domNode.innerHTML = ssr;

// const render = () => {
//   hydrateRoot(domNode, <StrictMode><App /></StrictMode>);
// }

// render();