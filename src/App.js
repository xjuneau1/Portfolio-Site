import React, { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css"
function App() {
  const [footer, setFooter] = useState(false)
  const handleSetFooter = (yPosition) => {
    console.log(yPosition)
    if (window.innerWidth <= 800){
      if(yPosition <= 2600){
        return setFooter(true)
      }
      setFooter(false)
    }
    if (window.innerWidth <= 600){
      if(yPosition <= 3100){
        return setFooter(true)
      }
      setFooter(false)
    }
    if (window.innerWidth >= 800){
      if(yPosition <= 1200){
        return setFooter(true)
      }
      setFooter(false)
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll", () => {handleSetFooter(window.scrollY)})
    return () => window.removeEventListener("scroll", ()=> handleSetFooter)
  },[])
  return (
    <div className="bg">
      <Router>
        <Header />
        <Layout />{/* <AnimatedRoutes />*/}
        <Footer footer={footer}/>
      </Router>
    </div>
  );
}

export default App;
