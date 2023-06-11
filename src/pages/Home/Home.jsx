import React from 'react'
import Hero from './img/Hero.png'
import './style.scss'

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="text-content">
          <h1>50+ login and signup from for free</h1>
        </div>
        <div className="img-content">
          <img src={Hero} alt="50+ landing pages" />
        </div>
      </div>
    
    </>
  )
}

export default Home