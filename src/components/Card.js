import React from 'react';
import Star from '/public/images/star.png';





export default function Card(props) {
  return (
    
    <div className='card'>
      <img className='card__img' src={`../images/${props.img}`}></img>
      <div className='card__content'>
        <div className='rating'> 
          <img className='rating__symbol' src={Star}></img>
          <p className='rating__text'>{props.rating}<span>({props.reviewCount}) / {props.location}</span></p>
        </div>
        <p className='card__description'>{props.title}</p>
        <span className='card__price'>From ${props.price}</span><span> / person</span>
      </div>
    </div>
  )
}