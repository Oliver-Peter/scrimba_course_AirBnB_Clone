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
        <section className='cards'>
          <Card 
            img="katie-zaferes.png"
            rating='5.0'
            reviewCount={6}
            country='USA'
            title='Life lessons with Katie Zaferes'
            price={136}
          />
        </section>
      </div>
    </div>
  )
}