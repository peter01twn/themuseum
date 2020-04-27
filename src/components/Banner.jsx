import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const Banner = () => {
  return (
    <section className="l-banner">
      <div className="l-banner__outer">
        <div className="l-banner__inner">
          <Row>
            <Col md="6">
              <h2 className="mb-3 text-dark">Stay connected</h2>
            </Col>
            <Col md="6">
              <p>
                Read a message from our Director, Hartwig Fischer and find out
                other ways you can experience the Museum from home.
              </p>
              <Button variant="dark">
                Find out more<i className="ml-3 fas fa-chevron-circle-right"></i>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  )
}

export default Banner
