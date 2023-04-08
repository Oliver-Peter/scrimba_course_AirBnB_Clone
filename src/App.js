import React from 'react';
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Card from './components/Card.js'
import cardData from './cardData.js'



export default function App () {

  const cards = cardData.map(data => {
    return <Card 
              key={data.id} 
              img={data.coverImg} 
              rating={data.stats.rating} 
              reviewCount={data.stats.reviewCount} 
              location={data.location} 
              title={data.title} 
              price={data.price}
            />
          })

  return (
    <div className='container'>
      <Header />
      <div className='main-wrapper'>
        <Hero />
        <section className='cards-list'>
          {cards}
        </section>
      </div>
    </div>
  )
}