import React from 'react'
import {
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  FormControl,
  Nav,
} from 'react-bootstrap'
import Icon from 'components/Icon'

export default function Footer() {
  return (
    <footer className="l-footer bg-shadow">
      <div className="l-section">
        <Row as="section" className="pb-4 border-bottom border-light">
          <Col md="6" className="mb-3 mb-md-0">
            <h3 className="l-section__title mb-3">Connect with us</h3>
            <Nav className="d-flex">
              <Nav.Item>
                <Icon>
                  <i className="fab fa-facebook-f" />
                </Icon>
              </Nav.Item>
              <Nav.Item>
                <Icon>
                  <i className="fab fa-twitter" />
                </Icon>
              </Nav.Item>
              <Nav.Item>
                <Icon>
                  <i className="fab fa-youtube"></i>
                </Icon>
              </Nav.Item>
              <Nav.Item>
                <Icon>
                  <i className="fab fa-instagram"></i>
                </Icon>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md="6">
            <Form.Group controlId="userEmail">
              <Form.Label className="mb-3 fs-lg">
                Enter your email address to receive our newsletter
              </Form.Label>
              <InputGroup size="lg">
                <FormControl
                  placeholder="your email"
                  aria-label="userEmail"
                  aria-describedby="basic-addon1"
                  className="bg-shadow"
                />
                <InputGroup.Append>
                  <Button variant="primary" className="fs-md font-weight-bold">
                    Sign up
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
        <Row className="pt-5 text-wrap">
          <Col lg="3">
            <Row>
              <Col sm="6" lg="12" className="mb-5">
                <h2 className="h4 mb-3">
                  <i
                    className="mr-2 fa-xs fas fa-ticket-alt"
                    style={{ transform: 'rotate(-45deg)' }}
                  />
                  <span>Free entry</span>
                </h2>
                <p className="text-secondary">
                  Every street and every branch road, carefully, COVID-19 is right by your side
                </p>
                <Button variant="link" className="text-secondary">
                  Go out, go get
                </Button>
              </Col>
              <Col sm="6" lg="12" className="mb-5">
                <h2 className="h4 mb-3">
                  <i className="mr-2 fa-sm far fa-clock"></i>
                  <span>Opening hours</span>
                </h2>
                <p className="text-secondary">
                  Day and night
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs="6" lg="4" className="pb-3">
                <h2 className="h4 mb-3">About us</h2>
                <Nav className="flex-column">
                  <Nav.Item>
                    <Button variant="link" className="text-secondary">
                      Governance
                    </Button>
                  </Nav.Item>
                  <Nav.Item>
                    <Button variant="link" className="text-secondary">
                      The COVID-19 Museum story
                    </Button>
                  </Nav.Item>
                  <Nav.Item>
                    <Button variant="link" className="text-secondary">
                      Jobs
                    </Button>
                  </Nav.Item>
                  <Nav.Item>
                    <Button variant="link" className="text-secondary">
                      Press
                    </Button>
                  </Nav.Item>
                  <Nav.Item>
                    <Button variant="link" className="text-secondary">
                      Contact us
                    </Button>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col xs="6" lg="4" className="pb-3">
                <h2 className="h4 mb-3">Visit</h2>
                <Nav className="flex-column">
                  <Nav.Item>
                    <Button variant="link" className="text-secondary">
                      Museum map
                    </Button>
                  </Nav.Item>
                  <Nav.Item>
                    <Button variant="link" className="text-secondary">
                      Exhibitions and events
                    </Button>
                  </Nav.Item>
                  <Nav.Item>
                    <Button variant="link" className="text-secondary">
                      Accessbility
                    </Button>
                  </Nav.Item>
                  <Nav.Item>
                    <Button variant="link" className="text-secondary">
                      Food and drink
                    </Button>
                  </Nav.Item>
                  <Nav.Item>
                    <Button variant="link" className="text-secondary">
                      Audio guide
                    </Button>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col xs="6" lg="4" className="pb-3">
                <h2 className="h4 mb-3">Comnercial</h2>
                <Nav className="flex-column">
                  <Nav.Item>
                    <Button variant="link" className="text-secondary">
                      Comnercial hire
                    </Button>
                  </Nav.Item>
                  <Nav.Item>
                    <Button variant="link" className="text-secondary">
                      Filming
                    </Button>
                  </Nav.Item>
                  <Nav.Item>
                    <Button variant="link" className="text-secondary">
                      Travel trade tours
                    </Button>
                  </Nav.Item>
                  <Nav.Item>
                    <Button variant="link" className="text-secondary">
                      British Museum Press
                    </Button>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col xs="6" lg="4" className="pb-3">
                <h2 className="h4 mb-3">Our work</h2>
                <Nav className="flex-column">
                  <Nav.Item>
                    <Button variant="link" className="text-secondary">
                      Departments
                    </Button>
                  </Nav.Item>
                  <Nav.Item>
                    <Button variant="link" className="text-secondary">
                      National
                    </Button>
                  </Nav.Item>
                  <Nav.Item>
                    <Button variant="link" className="text-secondary">
                      International
                    </Button>
                  </Nav.Item>
                  <Nav.Item>
                    <Button variant="link" className="text-secondary">
                      How to borrow
                    </Button>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col xs="6" lg="4" className="pb-3">
                <h2 className="h4 mb-3">Resources</h2>
                <Nav className="flex-column">
                  <Nav.Item>
                    <Button variant="link" className="text-secondary">
                      Study rooms
                    </Button>
                  </Nav.Item>
                  <Nav.Item>
                    <Button variant="link" className="text-secondary">
                      Library and archive
                    </Button>
                  </Nav.Item>
                  <Nav.Item>
                    <Button variant="link" className="text-secondary">
                      Search the collection
                    </Button>
                  </Nav.Item>
                  <Nav.Item>
                    <Button variant="link" className="text-secondary">
                      Blog
                    </Button>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="bg-dark py-2 text-center fs-sm">
        © 2020 The Trustees of the peter
      </div>
    </footer>
  )
}
