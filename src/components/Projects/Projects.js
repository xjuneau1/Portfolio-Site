import React from 'react';
import "./projects.css"

function Projects() {
    const handleOnMouseMove = (e) => {
        const {currentTarget: target} = e;

        const rect = target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        target.style.setProperty("--mouse-x", `${x}px`)
        target.style.setProperty("--mouse-y", `${y}px`)
    }
    

    return ( 
    <div className='project-container'>
        <div className='project-header'></div>
        <div className='project-entry'>
            <div onMouseMove={(e)=>handleOnMouseMove(e)} className='project-card'></div>
            <div className='project-description'></div>
        </div>
        <div className='project-entry'>
            <div onMouseMove={(e)=>handleOnMouseMove(e)} className='project-card'></div>
            <div className='project-description'></div>
        </div>
        <div className='project-entry'>
            <div onMouseMove={(e)=>handleOnMouseMove(e)} className='project-card'></div>
            <div className='project-description'></div>
        </div>
        <div className='project-entry'>
            <div onMouseMove={(e)=>handleOnMouseMove(e)} className='project-card'></div>
            <div className='project-description'></div>
        </div>
    </div> 
    );
}

export default Projects;