import React, { useState } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Banner from 'components/Banner'
import Hero from 'components/Hero'
import Collapse from 'utils/Collapse'
import Toggler from 'components/Toggler'
import Collapser from 'components/Collapser'
import FbIcon from 'components/FbIcon'
import TwitterIcon from 'components/TwitterIcon'
import DownloadIcon from 'components/DownloadIcon'
import Section from 'components/Section'
import CardList from 'pages/index/CardList'
import heroBg from 'images/hero-bg2.jpg'
import { Alert, Breadcrumb, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import bannerbg from 'images/li-lin-VngNE4WQp24-unsplash.jpg'

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
        <Hero.Scroll className="theme-light">
          <Section className="breadcrumb--dark d-flex justify-content-between py-3 bg-light">
            <Breadcrumb>
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item
                linkAs={Link}
                linkProps={{ to: '/visit' }}
                active
              >
                Data
              </Breadcrumb.Item>
            </Breadcrumb>
            <ul className="d-flex align-items-center mb-0">
              <li>
                <h6>Share the page</h6>
              </li>
              <li>
                <FbIcon />
              </li>
              <li>
                <TwitterIcon />
              </li>
            </ul>
          </Section>
        </Hero.Scroll>
      </Hero>
      <Footer />
    </>
  )
}

export default Visit
