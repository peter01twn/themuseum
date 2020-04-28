import React, { useEffect, useRef } from 'react'
import SwiperVendor from 'swiper'

export default function Swiper({ data }) {
  const swiperRef = useRef()
  useEffect(() => {
    const swiperEl = swiperRef.current
    const mySwiper = new SwiperVendor(swiperEl, {
      speed: 400,
      slidesPerView: 'auto',
      loop: true,
      loopedSlides: data?.length,
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

  const createSlides = () => {
    return data.map((el, i) => (
      <div key={i} className="swiper-slide">
        <img src={el.img} />
        <div className="swiper-slide__text mt-1">{el.text}</div>
      </div>
    ))
  }

  return (
    <div ref={swiperRef} className="swiper-container">
      <div className="swiper-wrapper">{createSlides()}</div>
      <div className="swiper-pagination" />
      <div className="swiper__pre-el btn btn-primary" />
      <div className="swiper__next-el btn btn-primary" />
    </div>
  )
}
