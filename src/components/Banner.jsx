import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const Banner = ({img, title, text, linkText, onClick, href}) => {
  return (
    <section className="l-banner">
      <div className="l-banner__outer">
        <div className="l-banner__inner">
          <Row>
            <Col md="6">
              <h2 className="mb-3 text-dark">{title}</h2>
            </Col>
            <Col md="6">
              <p>
                {text}
              </p>
              <Button href={href} variant="dark" onClick={onClick} target="_blank">
                {linkText}<i className="ml-3 fas fa-chevron-circle-right"></i>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  )
}

export default Banner
