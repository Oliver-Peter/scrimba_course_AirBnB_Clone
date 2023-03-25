import React from 'React';

export default function Card() {
  return (
    <div className='main'>
      <div className='experiences'>
        <div className='exp'>
          <div className='exp__img'>
            <p className='lackOfName'></p>
          </div>
          <div className='exp__content'>
            <p className='rating'></p>
            <p className='description'></p>
            <p className='price'></p>
          </div>
        </div>
      </div>
    </div>
  )
}