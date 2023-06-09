import React from 'react'
import photoGrid from '/public/images/photo-grid.png'

export default function Hero() {
  return (
    <section className='hero'>
      <img className='hero__img' src={photoGrid} alt="Photos ordered in tiles"></img>
      <h1 className='hero__title'>Online Experiences</h1>
      <p className='hero__text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}