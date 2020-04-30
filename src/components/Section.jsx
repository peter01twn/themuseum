import React from 'react'

const Section = ({ className, children, ...attrs }) => {
  return (
    <div
      className={`l-section border-bottom border-secondary ${className}`}
      {...attrs}
    >
      {children}
    </div>
  )
}

Section.Title = ({ className, children, ...attrs }) => {
  return <h2 className={`l-section__title ${className}`}>{children}</h2>
}

export default Section
