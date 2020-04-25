import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Swiper from 'components/Swiper'
import Banner from 'pages/index/Banner'
import EventList from 'pages/index/EventList'
import { Container } from 'react-bootstrap'

const Index = () => {
  return (
    <>
      <Header />
      <div className="p-index">
        <Banner />
        <div className="l-section">
          <Container fluid="lg">
            <h2 className="l-section__title">What's online...</h2>
            <EventList />
          </Container>
        </div>
        <section className="l-section">
          <Container fluid="lg">
            <Swiper />
          </Container>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Index
