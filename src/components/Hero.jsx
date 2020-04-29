import React from 'react'

const Hero = ({ children, className = '', ...attrs }) => {
  return (
    <div className={`parallax ${className}`} {...attrs}>
      {children}
    </div>
  )
}

Hero.Fixed = ({ children, className = '', ...attrs }) => {
  return (
    <div className={`parallax__fixed ${className}`} {...attrs}>
      {children}
    </div>
  )
}

Hero.ShowWindow = ({ children, className = '', ...attrs }) => {
  return (
    <div className={`parallax__show-window ${className}`} {...attrs}>
      {children}
    </div>
  )
}

Hero.Scroll = ({ children, className = '', ...attrs }) => {
  return (
    <div className={`parallax__scroll ${className}`} {...attrs}>
      {children}
    </div>
  )
}

export default Hero
