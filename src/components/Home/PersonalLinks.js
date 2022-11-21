import React from "react";
import { Link } from "react-router-dom";
import github from "../../images/githubicon.jpg";
import linkedin from "../../images/linkedinicon.png";
import "./personallinks.css";
function PersonalLinks() {
  return (
    <div className="links-container">
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
