import React from "react";
import { useLocation } from "react-router-dom";

import AnimatedRoutes from "./AnimatedRoutes";
import "./layout.css"
function Layout() {

  return (
    <div className="layout-container">
      <AnimatedRoutes/>
    </div>
  );
}

export default Layout;
