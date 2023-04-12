import React from 'react';
import Star from '/public/images/star.png';





export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOULD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  } else {
    badgeText = `${props.openSpots} SPOTS`
  }
  return (
    
    <div className='card'>
      {badgeText && <div className='card__badge'>{badgeText}</div> }
      <img className='card__img' src={`../images/${props.coverImg}`}></img>
      <div className='card__content'>
        <div className='rating'> 
          <img className='rating__symbol' src={Star}></img>
          <p className='rating__text'>{props.stats.rating}<span>({props.stats.reviewCount}) / {props.location}</span></p>
        </div>
        <p className='card__description'>{props.title}</p>
        <span className='card__price'>From ${props.price}</span><span> / person</span>
      </div>
    </div>
  )
}