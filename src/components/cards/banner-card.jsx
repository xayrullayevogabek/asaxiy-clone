import React from 'react'
import "./banner-card.css"

const Card = () => {
  return (
    <div className='card'>
      <img src="https://i.dummyjson.com/data/products/4/thumbnail.jpg" alt="banner-card-image" />
      <span className='title'>MacBook Pro</span>
      <div className="rating-container">
        <span className='rm-price'>110000</span>
        <span className='percent'>25%</span>
      </div>
      <div className="rating-container">
        <span className='price'>90000</span>
        <span className='rating'>5</span>
      </div>
      <button>05.01.2024</button>
    </div>
  )
}

export default Card