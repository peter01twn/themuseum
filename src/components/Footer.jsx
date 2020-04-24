import React from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  FormControl,
  Nav,
} from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className="bg-shadow">
      <Container fluid="lg">
        <Row as="section" className="py-5 border-bottom border-light">
          <Col md="6">
            <h3 className="mb-3">Connect with us</h3>
            <ul className="d-flex">
              <li>
                <div className="circle-btn circle-btn--dark">
                  <i className="fab fa-facebook-f"></i>
                </div>
              </li>
              <li>
                <div className="circle-btn circle-btn--dark">
                  <i className="fab fa-twitter"></i>
                </div>
              </li>
              <li>
                <div className="circle-btn circle-btn--dark">
                  <i className="fab fa-youtube"></i>
                </div>
              </li>
              <li>
                <div className="circle-btn circle-btn--dark">
                  <i className="fab fa-instagram"></i>
                </div>
              </li>
            </ul>
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
                  <Button className="text-dark fs-md font-weight-bold">
                    Sign up
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
        <Row className="py-5">
          <Col lg="3">
            <Row>
              <Col sm="6" lg="12" className="mb-5">
                <h2 className="h4 mb-4">
                  <i
                    className="mr-2 fa-xs fas fa-ticket-alt"
                    style={{ transform: 'rotate(-45deg)' }}
                  />
                  <span>Free entry</span>
                </h2>
                <Nav className="flex-column text-light h5">
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm="6" lg="12">
                <h2 className="h4 mb-4">
                  <i
                    className="mr-2 fa-xs fas fa-ticket-alt"
                    style={{ transform: 'rotate(-45deg)' }}
                  />
                  <span>Free entry</span>
                </h2>
                <Nav className="flex-column text-light h5">
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Col>
          <Col lg="3">
            <Row>
              <Col sm="6" lg="12" className="mb-5">
                <h2 className="h4 mb-4">
                  <i
                    className="mr-2 fa-xs fas fa-ticket-alt"
                    style={{ transform: 'rotate(-45deg)' }}
                  />
                  <span>Free entry</span>
                </h2>
                <Nav className="flex-column text-light h5">
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm="6" lg="12">
                <h2 className="h4 mb-4">
                  <i
                    className="mr-2 fa-xs fas fa-ticket-alt"
                    style={{ transform: 'rotate(-45deg)' }}
                  />
                  <span>Free entry</span>
                </h2>
                <Nav className="flex-column text-light h5">
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Col>
          <Col lg="3">
            <Row>
              <Col sm="6" lg="12" className="mb-5">
                <h2 className="h4 mb-4">
                  <i
                    className="mr-2 fa-xs fas fa-ticket-alt"
                    style={{ transform: 'rotate(-45deg)' }}
                  />
                  <span>Free entry</span>
                </h2>
                <Nav className="flex-column text-light h5">
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm="6" lg="12">
                <h2 className="h4 mb-4">
                  <i
                    className="mr-2 fa-xs fas fa-ticket-alt"
                    style={{ transform: 'rotate(-45deg)' }}
                  />
                  <span>Free entry</span>
                </h2>
                <Nav className="flex-column text-light h5">
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Col>
          <Col lg="3">
            <Row>
              <Col sm="6" lg="12" className="mb-5">
                <h2 className="h4 mb-4">
                  <i
                    className="mr-2 fa-xs fas fa-ticket-alt"
                    style={{ transform: 'rotate(-45deg)' }}
                  />
                  <span>Free entry</span>
                </h2>
                <Nav className="flex-column text-light h5">
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm="6" lg="12">
                <h2 className="h4 mb-4">
                  <i
                    className="mr-2 fa-xs fas fa-ticket-alt"
                    style={{ transform: 'rotate(-45deg)' }}
                  />
                  <span>Free entry</span>
                </h2>
                <Nav className="flex-column text-light h5">
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                  <Nav.Item className="mb-2 pl-0">
                    <a href="#" className="link text-secondary">
                      asdaasdsa
                    </a>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="py-2 bg-dark text-center fs-sm">
        <Container fluid="lg">
          © 2020 The Trustees of the peter
        </Container>
      </div>
    </footer>
  )
}
