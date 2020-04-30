import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Banner from 'components/Banner'
import Hero from 'components/Hero'
import CardList from 'pages/index/CardList'
import Gallery from 'pages/index/Gallery'
import bannerImg from 'images/chris-barbalis-x31PAWGYbGE-unsplash.jpg'
import heroBg from 'images/hero-bg2.jpg'

const Index = () => {
  return (
    <>
      <Header />
      <Hero>
        <Hero.Fixed>
          <img className="object-cover mt-6 mt-lg-n5" src={heroBg}></img>
        </Hero.Fixed>
        <Hero.ShowWindow className="d-flex align-items-end">
          <div className="l-section">
            <h2 className="l-section__title">
              Welcome to the <span className="h1 text-danger">COVID-19</span>{' '}
              Museum
            </h2>
          </div>
        </Hero.ShowWindow>
        <Hero.Scroll>
          <div className="p-index">
            <div className="l-section border-bottom border-bright">
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
              bgImg={bannerImg}
              title="Stay home"
              text="Come from China, spread by WHO, and take a root in the world."
              linkText="Learn more"
              href="https://www.cdc.gov.tw/Category/MPage/IJEvndG3oFaiM-h1cDhvPQ"
            />
            <section className="l-section px-0">
              <Gallery />
            </section>
          </div>
        </Hero.Scroll>
      </Hero>
      <Footer />
    </>
  )
}

export default Index
