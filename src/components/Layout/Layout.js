import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";

function Layout() {
  return (
  <Routes>
    <Route path="/" element={<Navigate to="/home" />}/>
    <Route path="/home" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
  </Routes>
  );
}

export default Layout;
