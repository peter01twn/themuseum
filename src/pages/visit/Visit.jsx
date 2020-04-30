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
  const [contentShow, setContentShow] = useState(false)
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

          <div className="l-section">
            <Alert variant="secondary">
              <Toggler
                className="d-md-none"
                active={contentShow}
                onClick={() => setContentShow(!contentShow)}
              >
                Contents
              </Toggler>
              <Collapse isShow={contentShow} expand="md">
                <Nav className="nav-max-sm--vertical pt-3 pt-md-0">
                  <Nav.Item>
                    <Nav.Link className="s-link">Full opening hours</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="s-link">Getting here</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="s-link">Entering the Museum</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="s-link">Accessibility</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="s-link">Facilities</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Collapse>
            </Alert>
          </div>
          <Section>Articla</Section>
          <Section>
            <Section.Title>What to see</Section.Title>
            <CardList />
          </Section>
          <Banner
            bgImg={bannerbg}
            title="10% off for Members"
            text="Become a Member and enjoy a 10% discount at all of the Museum's cafés, restaurants and shops."
            linkText="Become a Member"
          />
          <Section>
            <Section.Title className="mb-4">Entering the Museum</Section.Title>
            <div className="py-3 border-bottom border-top border-secondary">
              <Collapser>
                <Collapser.Toggle
                  textClass="h3 s-link stretched-link"
                  className="position-relative"
                >
                  opening hours
                </Collapser.Toggle>
                <Collapser.Collapse>
                  <div className="pt-4">
                    <p>The Museum is temporarily closed.</p>
                    <ul
                      style={{
                        listStyleType: 'disc',
                        listStylePosition: 'inside',
                      }}
                    >
                      <li>Great Court: 09.00–18.00 (20.30 on Fridays)</li>
                      <li>
                        Galleries: 10.00–17.30 (most open to 20.30 on Fridays)
                      </li>
                      <li>Ticket Desk: 09.00–16.45 (19.45 on Fridays)</li>
                    </ul>
                    <p>Find out about late opening on Fridays.</p>
                    <p>
                      Please note that we begin clearing galleries 10 minutes
                      before they close.
                    </p>
                    <p>Closed 1 January and 24–26 December</p>
                  </div>
                </Collapser.Collapse>
              </Collapser>
            </div>
            <div className="py-3 border-bottom border-secondary">
              <Collapser>
                <Collapser.Toggle
                  textClass="h3 s-link stretched-link"
                  className="position-relative"
                >
                  Visitor regulations
                </Collapser.Toggle>
                <Collapser.Collapse>
                  <div className="pt-4 position-relative d-inline-block">
                    <DownloadIcon
                      as="a"
                      href={`${process.env.PUBLIC_URL}/visitor-regulations.txt`}
                      className="stretched-link"
                      download
                    />
                    <span className="ml-3">Visitor regulations</span>
                  </div>
                </Collapser.Collapse>
              </Collapser>
            </div>
          </Section>
        </Hero.Scroll>
        <Hero.ShowWindow
          className="d-flex align-items-end"
          style={{ height: '300px' }}
        />
      </Hero>
      <Footer />
    </>
  )
}

export default Visit
