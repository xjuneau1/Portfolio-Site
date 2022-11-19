import React, { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css"
function App() {
  // const [scrollTop, setScrollTop] = useState(0)

  // useEffect(()=>{
  //   function watchForScroll(){
  //     window.addEventListener("scroll", ()=>{
  //       setScrollTop(window.scrollY) 
  //       console.log("scrollY value:", window.scrollY)
  //       console.log("scrollTop value:", scrollTop)
        
  //     })
  //   }
  //   watchForScroll()
  //   return () => {
  //     window.removeEventListener("scroll", setScrollTop(window.scrollY))
  //   }
  // },[scrollTop])

  // function setHeaderBackground(){
  //   const header = document.querySelector(".header-container")
  //   if(scrollTop > 140){
  //     header.style.backgroundColor = "black"
  //   }
  // }

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
