import React, { useEffect, useRef } from 'react'
import SwiperVendor from 'swiper'

export default function Swiper() {
  const swiperRef = useRef()
  useEffect(() => {
    const swiperEl = swiperRef.current
    const mySwiper = new SwiperVendor(swiperEl, {
      speed: 400,
      slidesPerView: 'auto',
      loop: true,
      loopedSlides: 5,
      spaceBetween: 42,
      navigation: {
        nextEl: '.swiper__next-el',
        prevEl: '.swiper__pre-el',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        modifierClass: 'swiper__pagination-',
        bulletClass: 'swiper__pagination-item',
        bulletActiveClass: 'swiper__pagination-item--active',
      },
    })
  }, [])
  return (
    <div ref={swiperRef} className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide border">
          <img src="https://fakeimg.pl/320x460/"></img>
        </div>
        <div className="swiper-slide border">
          <img src="https://fakeimg.pl/400x400/"></img>
        </div>
        <div className="swiper-slide border">
          <img src="https://fakeimg.pl/250x100/"></img>
        </div>
        <div className="swiper-slide border">
          <img src="https://fakeimg.pl/500x200/"></img>
        </div>
        <div className="swiper-slide border">
          <img src="https://fakeimg.pl/200x500/"></img>
        </div>
      </div>
      <div className="swiper-pagination" />
      <div className="swiper__pre-el" />
      <div className="swiper__next-el" />
    </div>
  )
}
