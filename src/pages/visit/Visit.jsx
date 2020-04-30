import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Banner from 'components/Banner'
import Hero from 'components/Hero'
import CardList from 'pages/index/CardList'
import Gallery from 'pages/index/Gallery'
import bannerImg from 'images/chris-barbalis-x31PAWGYbGE-unsplash.jpg'
import heroBg from 'images/hero-bg2.jpg'
import { Breadcrumb } from 'react-bootstrap'

const Visit = () => {
  return (
    <>
      <Header />
      <Hero>
        <Hero.Fixed>
          <img className="object-cover mt-6 mt-lg-n5" src={heroBg}></img>
        </Hero.Fixed>
        <Hero.ShowWindow className="d-flex align-items-end">
          <div className="l-section">
            <h2 className="l-section__title">Visit the Museum</h2>
          </div>
        </Hero.ShowWindow>
        <Hero.Scroll>
          <div className="l-section">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Library
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Hero.Scroll>
      </Hero>
      <Footer />
    </>
  )
}

export default Visit
