import React from "react";
import "./projects.css";
import projects from "../../data/projects.json";
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
    <div className="project-container">
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
    </div>
  );
}

export default Projects;
