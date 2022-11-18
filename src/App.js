import React from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router} from 'react-router-dom';
import Header from "./components/Header/Header";
function App() {
  return (
    <Router>
      <Header />
      <Layout />
    </Router>
  );
}

export default App;
