import React, {useEffect} from 'react';
import './Home.css';
import Hero from '../components/Hero.jsx';
import ContentBlock from '../components/ContentBlock.jsx';
import Footer from '../components/Footer.jsx';

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='hero'><Hero/></div>
      <div className='parent'>
        <div className='contents'><ContentBlock/></div>
        <div className='footer'><Footer/></div>
      </div>
    </>
  );
}

export default Home;
