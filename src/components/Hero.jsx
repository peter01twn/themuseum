import React from 'react'
import heroBg from 'images/hero-bg2.jpg'

const Hero = ({ children }) => {
  return (
    <div className="parallax">
      <div className="parallax__fixed-block">
        <img className="object-cover mt-6 mt-lg-n5" src={heroBg}></img>
      </div>
      {children}
    </div>
  )
}

export default Hero
