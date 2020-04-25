import React from 'react'
import { Container, Row, Col, Card, CardDeck } from 'react-bootstrap'

const EventList = () => {
  return (
    <Row className="row--wrap">
      <Col md="6">
        <Card as="a" href="#">
          <div className="card-img">
            <Card.Img
              variant="top"
              src="https://fakeimg.pl/900x400/"
              className="img-fluid"
            />
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md="6">
        <Card>
          <div className="card-img">
            <Card.Img
              variant="top"
              src="https://fakeimg.pl/800x500/"
              className="img-fluid"
            />
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md="6">
        <Card as="a" href="#">
          <div className="card-img">
            <Card.Img
              variant="top"
              src="https://fakeimg.pl/900x400/"
              className="img-fluid"
            />
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md="6">
        <Card>
          <div className="card-img">
            <Card.Img
              variant="top"
              src="https://fakeimg.pl/800x500/"
              className="img-fluid"
            />
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default EventList
