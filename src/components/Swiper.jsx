import React, { useEffect, useRef } from 'react'
import SwiperVendor from 'swiper'

export default function Swiper() {
  const swiperRef = useRef()
  useEffect(() => {
    const swiperEl = swiperRef.current
    console.log(swiperEl)
    const mySwiper = new SwiperVendor(swiperEl, {
      speed: 400,
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
      },
      navigation: {
        nextEl: '.swiper__next-el',
        prevEl: '.swiper__pre-el',
      },
    })
  }, [])
  return (
    <div ref={swiperRef} className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide border">Slide 1</div>
        <div className="swiper-slide border" style={{ width: '200px', height: '300px' }}>
          Slide 2
        </div>
        <div className="swiper-slide border">Slide 3</div>
        <div className="swiper-slide border">Slide 4</div>
        <div className="swiper-slide border">Slide 5</div>
      </div>
      <div className="swiper-pagination" />
      <div className="swiper__pre-el" />
      <div className="swiper__next-el" />
    </div>
  )
}
