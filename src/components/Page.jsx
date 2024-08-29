import React from 'react';
import './Page.css';
import Footer from './Footer';
import DownloadIco from '../Assets/Download.png';

export function Header_1({ text }){
  return (
      <>
        <h1 className = 'text-header-1'>{text}</h1>
      </>
  );
};

export function Header_2({ text }){
  return (
      <>
        <h2 className = 'text-header-2'>{text}</h2>
      </>
  );
};

export function Media({ Float, minHeight, maxHeight, minWidth,
                        maxWidth, Width, Height, caption, source, Justify }){

  const MediaStyles = {
    height: Height ? '100%' : 'auto',
    width: Width ? '100%' : 'auto',
    
    'min-height' : minHeight ? minHeight : 'none',
    'max-height' : maxHeight ? maxHeight : 'none',
    'min-width' : minWidth ? minWidth : 'none',
    'max-width' : maxWidth ? maxWidth : 'none',
  };

  const FigureStyles = {
    'min-height' : minHeight ? `calc(${minHeight})` : 'none',
    'max-height' : maxHeight ? `calc(${maxHeight})` : 'none',
    'min-width' : minWidth ? `calc(${minWidth})` : 'none',
    'max-width' : maxWidth ? `calc(${maxWidth})` : 'none',
    height : Height ? `${Height}` : 'auto',
    width : Width ? `${Width}` : 'auto',
    float : Float,
    'justify-self' : Justify ? `${Justify}` : 'left',
  }
  const CaptionStyles = {
    float:'bottom',
    position:'relative',
    'align-self':'center',
  }

  return (
      <>
        <div className='media-content' style={FigureStyles}>
          <img className='block-media' src={source} style={MediaStyles}></img>
          <p style={CaptionStyles}>{caption}</p>
        </div>
      </>
  );
};

export function Label ({ text }) {

  return (
      <>
        <p className='text-block'> {text} </p>
      </>
  );
};

export function Credit ({ date, author }) {

  const creditStyle = {
    'margin-bottom' : '20px',
  }

  return (
      <>
        <p className='credit-block'> Posted: {date} </p>
        <p className='credit-block' style={creditStyle}> Authored by {author} </p>
      </>
  );
};

export function Block({ children}){
  return (
      <>
        <div className='block-container'> 
          {children}
        </div>
      </>
  );
};

export function Download({ source, text }){
  return (
      <>
        <a className='download-container' href={source}>
          <img src={DownloadIco} className='download-ico'></img>
          <div className='download-text'>{text}</div>
        </a>
      </>
  );
};

export function Reference({ source, refCount }){
  return (
      <>
        <a className='ref' href={source}> 
          {`[${refCount}] ${source}`}
        </a>
      </>
  );
};

const Page = ({

    children

  }) => {

  const footerStyles = {
    top:`${window.document.body.offsetHeight}px`,
  };


  return (
      <>
        <div className='post-screen'>
          <div className='post-container'>
            {children}
          </div>
          <div className='post-footer' style={footerStyles}>
            <Footer/>
          </div>
        </div>
      </>
  );
};

export default Page;

