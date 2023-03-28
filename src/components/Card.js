import React from 'react';
import CardLogo from '../images/katie-zaferes.png';
import Star from '../images/star.png';

export default function Card() {
  return (
    <section className='cards'>
      <div className='card'>
        <img className='card__img' src={CardLogo}></img>
        <div className='card__content'>
          <div className='rating'> 
            <img className='rating__symbol' src={Star}></img>
            <p className='rating__text'>5.0<span>(6) / USA</span></p>
          </div>
          <p className='card__description'>Life lessons with Katie Zaferes</p>
          <p className='card__price'><span>From $136</span> / person
</p>
        </div>
      </div>
    </section>
  )
}