import React, { useRef, useEffect } from 'react'
import { addClass, removeClass } from 'utils/toggleClass'

const Slide = ({
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
      newClass = removeClass('slide--sliding')(className)
    } else {
      newClass = removeClass(['slide--show', 'slide--sliding'])(className)
    }
    container.className = newClass
  }

  useEffect(() => {
    const container = el.current
    const className = container.className
    if (isShow) {
      const newClass = addClass(['slide--sliding', 'slide--show'])(className)
      container.className = newClass

      // force Reflow
      let forceReflow = container.scrollWidth

      container.style.transform = 'translateX(0)'
    } else {
      const newClass = addClass(['slide--sliding'])(className)
      container.className = newClass

      // force Reflow
      let forceReflow = container.scrollWidth

      container.style.transform = ''
    }
  }, [isShow])

  return (
    <div
      ref={el}
      onTransitionEnd={handleTransitionEnd}
      className={`slide slide-${response} slide-expand-${expand} ${className}`}
      {...attrs}
    >
      {children}
    </div>
  )
}

export default Slide
