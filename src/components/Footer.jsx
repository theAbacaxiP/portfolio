import React from 'react';
import './Footer.css';
import gmail from '../Assets/gmail.png';
import linkedin from '../Assets/linkedin.png';
import github from '../Assets/github.png';

function Footer({ children }){
    return (
        <>
        <div className='Footer'>
            <div className='link'>
                <div className='ico'><img src={linkedin}></img></div>
                <a href='https://www.linkedin.com/in/kyane-perera-524b2b21a/' className='footer-link'>https://www.linkedin.com/in/kyane-perera-524b2b21a/</a>
            </div>
            <div className='link'>
                <div className='ico_round'><img src={github}></img></div>
                <a href='https://github.com/theAbacaxiP' className='footer-link'>https://github.com/theAbacaxiP</a>
            </div>
            <div className='attribution'>{children}</div>
        </div>
        </>
    );
};

export default Footer;
