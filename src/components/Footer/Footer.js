import React from 'react'
import "./footer.css"
function Footer({footer}) {
    
    return ( 
        <div className={footer ? 'footer-container': 'footer-container active' }>
            <div className='footer-content'>
                <a href="#header">Scroll Top</a>
            </div>
        </div> 
    );
}

export default Footer;