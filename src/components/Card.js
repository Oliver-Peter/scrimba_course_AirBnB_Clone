import React from 'react';
import CardLogo from '../images/katie-zaferes.png';
import Star from '../images/star.png';

export default function Card() {
  return (
    <section className='cards'>
      <div className='card'>
        <img className='card__img' src={CardLogo}></img>
        <div className='card__content'>
          <img className='card__rating' src={Star}></img>
          <p className='card__description'></p>
          <p className='card__price'></p>
        </div>
      </div>
    </section>
  )
}