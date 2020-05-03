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

Section.Title = ({ as, className, children, ...attrs }) => {
  const Component = as ? as : 'h2'
  return <Component className={`l-section__title ${className}`}>{children}</Component>
}

export default Section
