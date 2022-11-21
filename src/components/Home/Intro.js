import React from 'react';
import profile from "../../images/profile.JPG";
import "./intro.css"
function Intro() {
    return ( 
        <div className="intro-container">
        <div className="greeting-container">
          <h1>Hi, I'm Xander!</h1>
          <p>
            Full-stack Developer and CSS Ninja, proficient in Javascript, React.js, Node.js,
            and PostgreSQL. I build eye-pleasing responsive websites, REStful APIs and SQL Databases.
          </p>
        </div>
        <div className="profile-picture-container">
          <img
            className="profile-picture"
            src={profile}
            alt="picture of the site creator"
          />
        </div>
      </div>
     );
}

export default Intro;