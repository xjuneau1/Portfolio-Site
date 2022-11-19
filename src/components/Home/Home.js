import React from "react";
import "./home.css";
import profile from "./profile.JPG";
function Home() {
  return (
    <div className="home-container">
      <div className="intro-container">
        <div className="greeting-container">
          <p>Hello World!</p>
        </div>
        <div className="profile-picture-container">
          <img
            className="profile-picture"
            src={profile}
            alt="picture of the site creator"
          />
        </div>
      </div>

      <div className="experience-container">Experience</div>

      <div className="contact-links-container">Contact Me & My Links</div>
    </div>
  );
}

export default Home;
