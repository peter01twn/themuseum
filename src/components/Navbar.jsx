import React, { useState, useContext } from 'react'

const Navbar = ({ expend, children, className = '' }) => {
  const [open, setOpen] = useState(false)
  return <div className={`navbar ${className}`}>{children}</div>
}

Navbar.Toggle = ({ expend, as = 'button', children, className = '' }) => {
  const Component = as
  return <Component className={`${className}`}>{children}</Component>
}
Navbar.Collapse = ({ expend, children, className = '' }) => {}

export default Navbar
