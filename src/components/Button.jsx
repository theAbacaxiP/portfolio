import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--nav', 'btn--nav-ico'];

const Button = ({
        children, 
        type,
        to, 
        onClick, 
        buttonStyle
    }) => {

        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
        
        return (
            <>
                <Link to={to} className='btn'>
                    <button className={checkButtonStyle} onClick={onClick} type={type}>
                        {children}
                    </button>
                </Link>
            </>
        );
};

export default Button;
