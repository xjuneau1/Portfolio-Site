import React, {useEffect, useState} from 'react';
import "./header.css"
import { Link } from 'react-router-dom';
function Header() {
    const [navbar, setNavbar] = useState(false)

    const changeHeaderBackground = () => {
        if(window.scrollY < 20){
           return setNavbar(true)
        }
        setNavbar(false)
    }

    useEffect(()=>{
        window.addEventListener("scroll", changeHeaderBackground)
        return () => {
            window.removeEventListener("scroll", changeHeaderBackground);
          }
    },[])
    
    return ( 
        <div className={navbar ? "header-container": "header-container active"}>
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
            {/* <Link to="/about">
                <button
                    type='button'
                    href=""
                    name='about'
                    className='header-button'
                >
                    About Me
                </button>
            </Link> */}
            </div>
        </div> 
    );
}

export default Header;