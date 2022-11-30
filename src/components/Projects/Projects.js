import React from "react";
import "./projects.css";
import projects from "../../data/projects.json";
import {motion} from "framer-motion"
function Projects() {
  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };
  return (
    <motion.div 
      className="project-container"
      transition={{type: "ease", stiffness: 50}}
      initial={{x: -window.innerWidth, opacity: 0, transition: {duration: 1}}}
      animate={{x: 0, opacity: 1, transition: {duration: 1}}}
      exit={{x: window.innerWidth, opacity: 0, transition: {duration: 1}}}
    >
      <div className="project-header"></div>
      {projects.map((project) => {
        const {
          picture,
          alt,
          name,
          description,
          gitHubLink,
          gitHubLinkIcon,
          demoLink,
          demoLinkIcon,
          technologies,
        } = project;
        return (
          <div
            onMouseMove={(e) => handleOnMouseMove(e)}
            className="project-card"
          >
            <div className="project-card-name">{name}</div>
            <div className="project-card-row">
              <img src={picture} alt={alt} />
            </div>
            <div className="project-card-row">
              <div className="project-card-description">{description}</div>
            </div>
            <div className="project-card-row-tech">
              <h3>Technologies</h3>
              <ul>
                {technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="project-card-row">
              <a href={gitHubLink} target="_blank">
                <div className="project-card-link">
                  <img src={gitHubLinkIcon}></img>
                  <p>GitHub</p>
                </div>
              </a>
              <a href={demoLink} target="_blank">
                <div className="project-card-link">
                  <img src={demoLinkIcon}></img>
                  <p>Demo</p>
                </div>
              </a>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}

export default Projects;
