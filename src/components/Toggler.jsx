import React from 'react'

const Toggler = ({
  className,
  children,
  onClick,
  textClass = '',
  activeTextClass = '',
  active,
  horizontal,
  reverse,
  ...attrs
}) => {
  const transform = active ? 'rotate(180deg)' : ''
  const createIcon = () => {
    if (horizontal) {
      if (reverse) {
        return <i className="fas fa-chevron-circle-left" />
      }
      return <i className="fas fa-chevron-circle-right" />
    } else {
      if (reverse) {
        return <i className="fas fa-chevron-circle-up" />
      }
      return <i className="fas fa-chevron-circle-down" />
    }
  }

  return (
    <button
      className={`btn-clean d-flex justify-content-between align-items-center ${className}`}
      onClick={onClick}
      {...attrs}
    >
      <span className={`${textClass} ${active ? activeTextClass : ''}`}>{children}</span>
      <span
        style={{
          transform,
          transformOrigin: '50%, 50%',
          transition: 'transform .1s'
        }}
      >
        {createIcon()}
      </span>
    </button>
  )
}

export default Toggler
