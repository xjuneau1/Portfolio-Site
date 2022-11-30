import React from "react";
import EmailForm from "./EmailForm";
import Intro from "./Intro";
import Education from "./Education";
import Skills from "./Skills";
import PersonalLinks from "./PersonalLinks";
import {motion} from "framer-motion"
import "./home.css";
function Home() {
  return (
    <motion.div 
      className="home-container"
      transition={{type: "ease", stiffness: 50}}
      initial={{x: -window.innerWidth, opacity: 0, transition: {duration: 1}}}
      animate={{x: 0, opacity: 1, transition: {duration: 1}}}
      exit={{x: window.innerWidth, opacity: 0, transition: {duration: 1}}}
    >
      <Intro />
      <Skills />
      <div className="education-contact-links">
        <Education />
        <div className="contact-links-container">
          <h2>Contact & Links</h2>
          <div className="email-links-container">
            <EmailForm />
            <PersonalLinks />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
