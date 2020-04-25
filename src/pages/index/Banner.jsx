import React from 'react'
import { Carousel, Container } from 'react-bootstrap'

const Banner = () => {
  return (
    <>
      <Carousel interval={null}>
        <Carousel.Item>
          <div className="p-index__carousel-img">
            <img
              className="d-block w-100"
              src="https://fakeimg.pl/900x400/"
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="p-index__carousel-img">
            <img
              className="d-block w-100"
              src="https://fakeimg.pl/1000x300/"
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="p-index__carousel-img">
            <img
              className="d-block w-100"
              src="https://fakeimg.pl/900x900/"
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container fluid="lg">
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
                <i className="mr-3 far fa-clock"></i>Open today: 10.00 to 17.30
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Banner
