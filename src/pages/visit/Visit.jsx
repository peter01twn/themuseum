import React, { useState } from 'react'
import Banner from 'components/Banner'
import Hero from 'components/Hero'
import Collapse from 'utils/Collapse'
import Toggler from 'components/Toggler'
import Collapser from 'components/Collapser'
import FbIcon from 'components/FbIcon'
import TwitterIcon from 'components/TwitterIcon'
import DownloadIcon from 'components/DownloadIcon'
import Section from 'components/Section'
import CardList from './CardList'
import heroBg from 'images/edward-howell-Jbf9nNe_qaE-unsplash.jpg'
import { Alert, Breadcrumb, Nav, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import bannerbg from 'images/li-lin-VngNE4WQp24-unsplash.jpg'

const Visit = () => {
  const [contentShow, setContentShow] = useState(false)
  return (
    <>
      <Hero>
        <Hero.Fixed>
          <img className="object-cover mt-6 mt-lg-n5" src={heroBg}></img>
        </Hero.Fixed>
        <Hero.ShowWindow className="d-flex align-items-end">
          <div className="l-section">
            <h2 className="display-4">Visit here</h2>
          </div>
        </Hero.ShowWindow>
        <Hero.Scroll className="theme-light">
          <Section className="d-sm-flex justify-content-between py-3 bg-light">
            <Breadcrumb className="breadcrumb--dark border-bottom">
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item
                linkAs={Link}
                linkProps={{ to: '/visit' }}
                active
              >
                Visit
              </Breadcrumb.Item>
            </Breadcrumb>
            <Nav className="d-flex align-items-center mb-0">
              <Nav.Item>
                <h6>Share the page</h6>
              </Nav.Item>
              <Nav.Item>
                <FbIcon />
              </Nav.Item>
              <Nav.Item>
                <TwitterIcon />
              </Nav.Item>
            </Nav>
          </Section>
          <Section className="border-bottom-0 pb-0">
            <Alert variant="secondary">
              <Toggler
                className="d-md-none"
                active={contentShow}
                onClick={() => setContentShow(!contentShow)}
              >
                Contents
              </Toggler>
              <Collapse isShow={contentShow} expand="md">
                <Nav className="p-visit__list-lg nav-max-sm--vertical pt-3 pt-md-0">
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
          </Section>
          <Section>
            <Row className="flex-column-reverse flex-lg-row">
              <Col lg="8">
                <Section.Title>
                  The COVID - 19 place is open now.
                  <p className="h6 mt-2">China of Virus in Disease</p>
                </Section.Title>
                _______________________________
                <br />
                <br />
                <p>
                  Immerse yourself in two million years of human history, art
                  and culture.
                </p>
                <p>Plan your visit:</p>
                <ul>
                  <li>
                    Admission is free and advance booking is only required for
                    groups of 10 or more.
                  </li>
                  <li>We charge for some exhibitions, events and tours.</li>
                  <li>
                    Exhibitions are free for Members and concessions are
                    available.
                  </li>
                  <li>
                    Please note that we begin clearing galleries 10 minutes
                    before they close.
                  </li>
                  <li>
                    From mid-March 2020 scaffolding will be erected at the front
                    of the Museum (Great Russell Street entrance), to facilitate
                    conservation work on our iconic colonnade. Find out more
                    about the 'Conservation work on the Colonnade' below
                  </li>
                </ul>
                <p>
                  Please note that items of large luggage (including some bags
                  and rucksacks, and all wheeled suitcases) are not permitted.
                  See Entering the Museum below for more details.{' '}
                </p>
              </Col>
              <Col lg="4 pb-5">
                <Section.Title>Free entry</Section.Title>
                <hr />
                <div className="h6">
                  <i className="far fa-clock mr-1" />
                  The Museum always open.
                </div>
                <hr />
                <div className="h6 mb-3">
                  <i className="fas fa-map-marker-alt mr-1" />
                  The British Museum
                </div>
                <span>Street and alley</span>
                <p>road and every fork</p>
                <hr />
                <Button
                  variant="dark"
                  block
                  className="d-flex justify-content-between align-items-center"
                >
                  View more information
                  <i className="fas fa-chevron-circle-right" />
                </Button>
              </Col>
            </Row>
          </Section>
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
    </>
  )
}

export default Visit
