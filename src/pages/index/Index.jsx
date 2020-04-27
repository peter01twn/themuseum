import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Swiper from 'components/Swiper'
import Banner from 'components/Banner'
import Hero from 'components/Hero'
import EventList from 'pages/index/EventList'

const Index = () => {
  return (
    <>
      <Header />
      <Hero>
        <div className="parallax__hover-block">
          <div className="l-section">
            <h2 className="l-section__title">
              Welcome to the <span className="h1 text-danger">COVID-19</span> Museum
            </h2>
          </div>
        </div>
        <div className="parallax__scroll-block">
          <div className="p-index">
            <div className="l-section">
              <h2 className="l-section__title">What's online...</h2>
              <EventList />
            </div>
            <Banner />
            <section className="l-section px-0">
              <Swiper />
            </section>
          </div>
          <Footer />
        </div>
      </Hero>
    </>
  )
}

export default Index
