import React from 'react';
import "./header.css"
import { Link } from 'react-router-dom';
function Header() {
    return ( 
        <div className='header-container'>
            <div className='header-buttons-container'>
            <Link>
                <button
                    type='button'
                    href=""
                    className='header-button'
                >
                    Home
                </button>
            </Link>
            <Link>
                <button
                    type='button'
                    href=""
                    className='header-button'
                >
                    Projects
                </button>
            </Link>
            <Link>
                <button
                    type='button'
                    href=""
                    className='header-button'
                >
                    About Me
                </button>
            </Link>
            </div>
        </div> 
    );
}

export default Header;