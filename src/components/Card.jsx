import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card({
  path,
  src,
  text
}) {
  return (
    <>
      <div className='card'>
      <li className='cards__item'>
        <Link className='cards__item__link' to={path}>
          <div className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt=''
              src={src}
            />
          </div>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{text}</h5>
          </div>
        </Link>
      </li>
      </div>
    </>
  );
}

export default Card;
