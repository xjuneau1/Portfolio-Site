import React from "react";
import skills from "../../data/skills.json"
import "./home.css";
import profile from "./profile.JPG";
import thinkful from "../../images/thinkfulicon.jpg";
import valencia from "../../images/valenciaicon.png";
function Home() {
  const {frontend, backend, other} = skills

  return (
    <div className="home-container">
      {/*Intro Section*/}
      <div className="intro-container">
        <div className="greeting-container">
          <h1>Hi, I'm Xander!</h1>
          <p>
            Full-stack Developer proficient in Javascript, React.js, Node.js,
            PostgreSQL, and CSS.
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
      {/*Education Section*/}
      <div className="education-container">
        <h2>Education</h2>
        <div className="education-entry">
          <img src={thinkful}></img>
          <p>
            <p>Thinkful Coding Bootcamp - Software Engineering Immersion</p>
            <p>June 2022 - November 2022</p>
          </p>
        </div>
        <div className="education-entry">
          <img src={valencia}></img>
          <p>
            <p>
              Valencia College - Associates in Science: Electrical Engineering
              Technology
            </p>
            <p>April 2016 - May 2019</p>
          </p>
        </div>
      </div>
      {/*Skills Section*/}
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="skill-cards-container">
          <div className="skill-card">
            <h3>Frontend Technologies</h3>
            <ul>
            {frontend.map((skill)=> <li>{skill}</li>)}
            </ul>
          </div>
          <div className="skill-card">
            <h3>Backend Technologies</h3>
            <ul>
              {backend.map((skill)=><li>{skill}</li>)}
            </ul>
          </div>
        </div>
      </div>
      {/*Contact & Links Section*/}
      <div className="contact-links-container">
        <h2>Links & Contact</h2>
        <div className="contact-links-entry"></div>
      </div>
    </div>
  );
}

export default Home;
