import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter={true}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
