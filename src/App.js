import React from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Layout />
      </Router>
    </div>
  );
}

export default App;
