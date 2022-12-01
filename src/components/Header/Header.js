import React from 'react';
import { useLocation } from 'react-router-dom';
import "./header.css"
import { Link } from 'react-router-dom';
function Header() {
    const location = useLocation()
    console.log(location)
    return ( 
        <div id="header" className="header-container">
            <div className='header-buttons-container'>
            <Link to="/home">
                <button
                    type='button'
                    href=""
                    name='home'
                    className='header-button'
                >
                    Home
                </button>
            </Link>
            <Link to="/projects">
                <button
                    type='button'
                    href=""
                    name='projects'
                    className='header-button'
                >
                    Projects
                </button>
            </Link>
            <a href={location.pathname === "/projects" ? "/home": "#contact"}>
                <button
                    type='button'
                    href=""
                    name='about'
                    className='header-button'
                >
                    Contact
                </button>
            </a>
            </div>
        </div> 
    );
}

export default Header;