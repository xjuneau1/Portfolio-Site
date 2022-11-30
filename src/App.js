import React from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css"
function App() {
  return (
    <div className="bg">
      <Router>
        <Header />
        <Layout />{/* <AnimatedRoutes />*/}
      </Router>
    </div>
  );
}

export default App;
