import React from 'react';
import "./education.css"
import thinkful from "../../images/thinkfulicon.jpg";
import valencia from "../../images/valenciaicon.png";
function Education() {
    return ( 
        <div className="education-container">
        <h2>Education</h2>
        <div className="education-entry">
          <img src={thinkful}></img>
          <p>
            <p>Thinkful Coding Bootcamp - Certificate: Software Engineering Immersion</p>
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
     );
}

export default Education;