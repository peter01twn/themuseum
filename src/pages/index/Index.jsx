import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Swiper from 'components/Swiper'
import Banner from 'components/Banner'
import Hero from 'components/Hero'
import CardList from 'pages/index/CardList'

const Index = () => {
  return (
    <>
      <Header />
      <Hero>
        <div className="parallax__hover-block d-flex align-items-end">
          <div className="l-section">
            <h2 className="l-section__title">
              Welcome to the <span className="h1 text-danger">COVID-19</span>{' '}
              Museum
            </h2>
          </div>
        </div>
        <div className="parallax__scroll-block">
          <div className="p-index">
            <div className="l-section border-bottom border-light">
              <div className="d-md-flex justify-content-between">
                <h2 className="mb-4 mb-md-0">
                  Discover two million years of human history and culture.
                </h2>
                <div className="h4 pl-md-6 text-nowrap">
                  <p>
                    <i className="mr-3 fas fa-ticket-alt"></i>Free entry
                  </p>
                  <p className="mb-0">
                    <i className="mr-3 far fa-clock"></i>Day and night
                  </p>
                </div>
              </div>
            </div>
            <div className="l-section">
              <h2 className="l-section__title">What's online...</h2>
              <CardList />
            </div>
            <Banner
              title="Stay home"
              text="Come from China, spread by WHO, and take a root in the world."
              linkText="Learn more"
              href="https://www.cdc.gov.tw/Category/MPage/IJEvndG3oFaiM-h1cDhvPQ"
            />
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
