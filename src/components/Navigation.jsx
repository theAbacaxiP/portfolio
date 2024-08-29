import React, {useState, useEffect} from 'react';
import './Navigation.css';
import Button from './Button.jsx';

const Navigation = () => {
     
    const [mobile, setMobile] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > (window.innerHeight * 0.3)) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        };
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const divStyles = {
      width: 'auto',
      position: 'fixed',
      top: isVisible ? '0' : '-50px',
      transition: 'top 300ms ease-in-out',
      // possible bug when scrolling that exceeds scroll length
    };

    const checkMobile = () => {return window.innerWidth <= 600};
    const handleResize = () => {
      const mobileUpdate = checkMobile;
      if (mobileUpdate != mobile){
        setMobile(mobileUpdate);
      }
    };

    useEffect(() => {
      window.addEventListener('load', setMobile(checkMobile));
    }, []);

    useEffect(() => {
      window.addEventListener('resize', handleResize);
    });
    
 
    return ( 
        <>
          <nav className='navbar' style={divStyles}>
            <div className='navbar-container'>
              <Button
                to='/'
                className='navbar-logo'
                buttonStyle='btn--nav-ico'>{mobile ? 'cd' + String.fromCharCode(160) + '~' : 'C:/Users/home>'}
              </Button>
              <ul className='nav-list'>
                <li className='nav-item'>
                    <Button 
                    to='/about-me' 
                    className='nav-link'
                    buttonStyle='btn--nav'>cd ./about_me</Button>
                </li>
                <li className='nav-item'>
                    <Button 
                    to='/projects' 
                    className='nav-link'
                    buttonStyle='btn--nav'>cd ./projects</Button>
                </li>
                <li className='nav-item'>
                    <Button 
                    to='/blog' 
                    className='nav-link'
                    buttonStyle='btn--nav'>cd ./blog</Button>
                </li>
              </ul>
            </div>
          </nav>
        </>
    );
};

export default Navigation;
