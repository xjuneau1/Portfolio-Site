import React from "react";
import "./projects.css";
import projects from '../../data/projects.json'

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
        const {picture, name, description, link, linkIcon} = project
        return (
          <div className="project-entry">
            <div
              onMouseMove={(e) => handleOnMouseMove(e)}
              className="project-card"
            >
              <div className="project-card-row">
                <div className="project-card-image">
                    <img src={picture} />
                </div>
                <div className="project-card-name">{name}</div>
              </div>
              <div className="project-card-row">
                <div className="project-card-description">{description}</div>
              </div>
              <div className="project-card-row-links">
                <div className="project-card-links">
                    
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
