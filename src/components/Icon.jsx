import React from 'react'

export default function Icon({ className = '', style = {}, children, as, variant = 'dark', ...attrs }) {
  const Component = as ? as : 'button'
  return (
    <Component
      className={`btn btn-${variant} circle p-0 text-center border-0 ${className}`}
      style={{
        width: '50px',
        height: '50px',
        lineHeight: '50px',
        ...style
      }}
      {...attrs}
    >
      {children}
    </Component>
  )
}
