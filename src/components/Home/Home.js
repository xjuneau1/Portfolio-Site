import React from "react";
import EmailForm from "./EmailForm";
import Intro from "./Intro";
import Education from "./Education";
import Skills from "./Skills";
import PersonalLinks from "./PersonalLinks";

import "./home.css";
function Home() {
  return (
    <div className="home-container">
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
    </div>
  );
}

export default Home;
