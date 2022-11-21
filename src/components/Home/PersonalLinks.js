import React from 'react';
import { Link } from 'react-router-dom';
import github from "../../images/githubicon.jpg"
import linkedin from "../../images/linkedinicon.png"
import "./personallinks.css"
function PersonalLinks() {
    return ( 
        <div className='links-container'>
            <div className='link-entry'>
                <img src={github}></img>
                <a href='https://github.com/xjuneau1' target="_blank">GitHub</a>
            </div>
            <div className='link-entry'>
                <img src={linkedin}></img>
                <a href='https://www.linkedin.com/in/xander-j-juneau/' target="_blank">LinkedIn</a>
            </div>
        </div>
     );
}

export default PersonalLinks;