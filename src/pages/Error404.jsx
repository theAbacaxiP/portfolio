import React, { useEffect } from 'react';
import './Error404.css';
import image_404 from '../Assets/404_error.jpg';

function Error404(){

    var err404Styles = {
      width: (window.innerWidth > window.innerHeight) ? 'auto' : `50%`,
      height: (window.innerWidth > window.innerHeight) ? `50%` : 'auto',
    };

    const calcErr404Styles = () => {
      err404Styles = {
        width: (window.innerWidth > window.innerHeight) ? 'auto' : `50%`,
        height: (window.innerWidth > window.innerHeight) ? `50%` : 'auto',
      };
    }

    useEffect(() => {
      window.addEventListener('resize', calcErr404Styles);
    });

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return (
        <>
          <div className='fullscreen'>
            <div className='homeGuide'>^^^ Click here for home</div>
            <div className='image_404container'>
              <img className='image_404' src={image_404} style={err404Styles}/>
            </div>
            <div className='otherGuide'>Click here for other content ^^^</div>
            <div className='error404-footer'>
              <div className='link'>
                  <a href='https://www.freepik.com' className='error-link'>Designed by Freepik</a>
              </div>
            </div>
          </div>
        </>
    );
};

export default Error404;