import React from 'react'
import { Button } from 'react-bootstrap'

export default function Icon({ className, style, children, ...attrs }) {
  return (
    <Button
      variant="dark"
      className={`circle p-0 d-flex justify-content-center align-items-center ${className}`}
      style={{
        width: '50px',
        height: '50px',
        ...style
      }}
      {...attrs}
    >
      {children}
    </Button>
  )
}
