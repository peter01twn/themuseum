import React, { useRef, useEffect } from 'react'
import { addClass, removeClass } from 'utils/toggleClass'

const Collapse = ({
  children,
  isShow = false,
  response = '',
  expand = '',
  className = '',
  ...attrs
}) => {
  const el = useRef()
  const handleTransitionEnd = (e) => {
    const container = el.current
    let className = container.className
    let newClass = ''

    if (e.target !== e.currentTarget) return
    if (isShow) {
      newClass = removeClass('collapse--collapsing')(className)
      container.style.height = ''
    } else {
      newClass = removeClass(['collapse--show', 'collapse--collapsing'])(className)
    }

    container.className = newClass
  }

  useEffect(() => {
    const container = el.current
    const className = container.className
    if (isShow) {
      const newClass = addClass(['collapse--collapsing', 'collapse--show'])(
        className
      )
      container.className = newClass
      container.style.height = container.scrollHeight + 'px'
    } else {
      container.style.height = container.scrollHeight + 'px'
      const newClass = addClass(['collapse--collapsing'])(className)
      container.className = newClass
      // reflow
      const h = container.scrollHeight + 'px'
      container.style.height = ''
    }
  }, [isShow])

  return (
    <div
      ref={el}
      onTransitionEnd={handleTransitionEnd}
      className={`collapse collapse-${response} collapse-expand-${expand} ${className}`}
      {...attrs}
    >
      {children}
    </div>
  )
}

export default Collapse
