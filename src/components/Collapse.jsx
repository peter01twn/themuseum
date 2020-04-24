import React, { useRef, useEffect } from 'react'

const Collapse = ({ children, isShow, expand, className, ...attrs }) => {
  const el = useRef()
  useEffect(() => {
    const container = el.current
    if (isShow) {
      container.style.height = container.scrollHeight + 'px'
    } else {
      container.style.height = ''
    }
  }, [isShow])
  return (
    <div ref={el} className={`collapse collapse-${expand} ${className}`} {...attrs}>
      {children}
    </div>
  )
}

export default Collapse
