import React from 'react';
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Card from './components/Card.js'


export default function App () {
  return (
    <div className='container'>
      <Header />
      <div className='main-wrapper'>
        <Hero />
        <Card />
      </div>
    </div>
  )
}