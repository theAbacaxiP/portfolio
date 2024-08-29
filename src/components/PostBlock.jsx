import React from 'react';
import { Link } from 'react-router-dom';
import './PostBlock.css';
import Footer from './Footer.jsx';
import wallpaper from '../Assets/posts-wallpaper.png';

export const Thumbnail = ({

  title, 
  thumbnail_src, 
  page_src,
  accentColor 


}) => {

  const ThumbnailStyle = {
    'border-color':`${accentColor}`,
  };


    return (
        <>
          <Link className='thumbnail' to={page_src} style={ThumbnailStyle}>
          <>
            <div className='thumbnail-contents'>
              <div className='thumbnail-image-container'>
                <img className='thumbnail-image' src={thumbnail_src}/>
              </div>
              <div className='thumbnail-title'>{title}</div>
            </div>
          </>
          </Link>
        </>
    );
};

function PostBlock({ 
  
  children, 
  pageColor,
  accentColor,
  title

}){

  const footerStyles = {
    top:`${window.document.body.offsetHeight}px`,
  };

  const postNavScreen = {
    'background-color':`${pageColor}`,
  };

  const postNavTitle = {
    color:`${accentColor}`,
  };

    return (
        <>
          <div className='post-nav-screen' style={postNavScreen}>
            <img className='post-nav-wallpaper' src={wallpaper}/>
            <h1 className='post-nav-title' style={postNavTitle}>{title}</h1>
            <div className='post-nav-container'>
              <div className='thumbnail-container'>
                  {children}
              </div>
            </div>
            <div className='post-nav-footer' style={footerStyles}>
              <Footer>
                <p>components PNG Designed By tree from https://pngtree.com/freepng/captivating-visual-of-a-computer-electronic-circuit-board-abstract-background-and-texture_15393272.html?sol=downref&id=bef</p>
              </Footer>
            </div>
          </div>
        </>
    );

};

export default PostBlock;
