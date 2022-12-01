import React from "react";
import "./personallinks.css";

const github = process.env.PUBLIC_URL + "/images/githubicon.jpg"
const linkedin = process.env.PUBLIC_URL + "/images/linkedinicon.png"

function PersonalLinks() {
  return (
    <div id="contact" className="links-container">
      <a href="https://github.com/xjuneau1" target="_blank">
        <div className="link-entry">
          <img src={github}></img>
          <p>GitHub</p>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/xander-j-juneau/" target="_blank">
        <div className="link-entry">
          <img src={linkedin}></img>
          <p>LinkedIn</p>
        </div>
      </a>
    </div>
  );
}

export default PersonalLinks;
