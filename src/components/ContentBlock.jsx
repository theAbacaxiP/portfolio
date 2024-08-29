import React from 'react';
import './ContentBlock.css';
import Card from './Card.jsx';
import projectsImage from '../Assets/projects-icon.jpg';
import blogsImage from '../Assets/blogs-icon.svg';
import profileImage from '../Assets/about-me-full.jpg';
import fsociety from '../Assets/fsociety.png';
import mrRobot from '../Assets/mr robot.png';

function ContentBlock(){
    return (
        <>
          <div className='cards'>
          <ul className='decorator'>
            <li className='manchester-1'>
                <img className='manchester-image' src={mrRobot}></img>
            </li>
            <li className='manchester-2'>
                <img className='manchester-image' src={fsociety}></img>
            </li>
            <li className='manchester-1'>
                <img className='manchester-image' src={mrRobot}></img>
            </li>
            <li className='manchester-2'>
                <img className='manchester-image' src={fsociety}></img>
            </li>
          </ul>
            <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Card
                    src={profileImage}
                    text='About Me'
                    path='/about-me'
                    />
                    <Card
                    src={projectsImage}
                    text='Projects'
                    path='/projects'
                    />
                    <Card
                    src={blogsImage}
                    text='Blog'
                    path='/blog'
                    />
                    <div className='invis'></div>
                </ul>
            </div>
            </div>
            <ul className='decorator'>
            <li className='manchester-1'>
                <img className='manchester-image' src={mrRobot}></img>
            </li>
            <li className='manchester-2'>
                <img className='manchester-image' src={fsociety}></img>
            </li>
            <li className='manchester-1'>
                <img className='manchester-image' src={mrRobot}></img>
            </li>
            <li className='manchester-2'>
                <img className='manchester-image' src={fsociety}></img>
            </li>
          </ul>
    </div>
        </>
    );
};

export default ContentBlock;
