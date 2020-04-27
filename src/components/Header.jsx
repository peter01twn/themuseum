import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap'
import Collapse from 'utils/Collapse'
import Slide from 'utils/Slide'

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isSubMenuOpen, setSubMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!isMenuOpen)
  const toggleSubMenu = () => setSubMenuOpen(!isSubMenuOpen)
  const closeSubMenu = () => setSubMenuOpen(false)
  const handleNavbarToggle = () => {
    if (isSubMenuOpen) {
      toggleSubMenu()
    }
    toggleMenu()
  }

  return (
    <header className="l-header mb-0">
      <Navbar
        className={`pt-5 pb-4 pb-lg-0 border-bottom ${
          isMenuOpen || isSubMenuOpen ? 'border-light' : 'border-dark'
        }`}
      >
        <Container fluid="lg">
          <Link to="/" className="text-decoration-none">
            <p className="h3">The Museum</p>
          </Link>
          <Button
            variant="link"
            className="l-header__toggle"
            onClick={handleNavbarToggle}
          >
            {!isMenuOpen ? (
              <i className="fas fa-bars" />
            ) : (
              <i className="fas fa-times" />
            )}
            <span className="pl-3">Menu</span>
          </Button>
          <nav className={`l-header__navbar-collapse bg-dark`}>
            <Collapse expand="lg" isShow={isMenuOpen} className="mb-0">
              <Container fluid="lg" className="d-block px-lg-0">
                <ul className="d-none d-lg-flex justify-content-lg-end">
                  <li>
                    <a href="#" className="text-secondary">
                      <i className="fas fa-shopping-cart" />
                      <span className="ml-2 is-hover__link">Shop</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-secondary">
                      <i className="fas fa-search" />
                      <span className="ml-2 is-hover__link">Search</span>
                    </a>
                  </li>
                </ul>
                <Row as="ul" className="flex-lg-nowrap mt-lg-3 mb-0">
                  <Col as="li" sm="6" lg="auto">
                    <Link
                      to="/"
                      onClick={toggleSubMenu}
                      className="menu-link py-3 pt-lg-0 pb-lg-5"
                    >
                      Visit
                      <i className="d-lg-none float-right fas fa-arrow-alt-circle-right" />
                    </Link>
                  </Col>
                  <Col as="li" sm="6" lg="auto">
                    <Link
                      to="/"
                      onClick={toggleSubMenu}
                      className="menu-link py-3 pt-lg-0 pb-lg-5"
                    >
                      Exhibitions and events
                      <i className="d-lg-none float-right fas fa-arrow-alt-circle-right" />
                    </Link>
                  </Col>
                  <Col as="li" sm="6" lg="auto">
                    <Link
                      to="/"
                      onClick={toggleSubMenu}
                      className="menu-link py-3 pt-lg-0 pb-lg-5"
                    >
                      Collection
                      <i className="d-lg-none float-right fas fa-arrow-alt-circle-right" />
                    </Link>
                  </Col>
                  <Col as="li" sm="6" lg="auto">
                    <Link
                      to="/"
                      onClick={toggleSubMenu}
                      className="menu-link py-3 pt-lg-0 pb-lg-5"
                    >
                      Learn
                      <i className="d-lg-none float-right fas fa-arrow-alt-circle-right" />
                    </Link>
                  </Col>
                  <Col as="li" sm="6" lg="auto">
                    <Link
                      to="/"
                      onClick={toggleSubMenu}
                      className="menu-link py-3 pt-lg-0 pb-lg-5"
                    >
                      Membership
                      <i className="d-lg-none float-right fas fa-arrow-alt-circle-right" />
                    </Link>
                  </Col>
                </Row>
                <Row as="ul" className="d-lg-none justify-content-lg-end mt-3">
                  <Col as="li" sm="6" lg="auto" className="pb-3 pb-lg-0">
                    <Button
                      variant="shadow"
                      block
                      className="py-3 rounded-0 text-white fs-lg"
                    >
                      <i className="fas fa-shopping-cart" />
                      <span className="ml-2 is-hover__link">Shop</span>
                    </Button>
                  </Col>
                  <Col as="li" sm="6" lg="auto">
                    <Button
                      variant="shadow"
                      block
                      className="py-3 rounded-0 text-white fs-lg"
                    >
                      <i className="fas fa-search" />
                      <span className="ml-2 is-hover__link">Search</span>
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Collapse>
          </nav>
        </Container>
      </Navbar>
      <div
        className={`l-header__sub-collapse bg-dark`}
        onMouseEnter={() => setSubMenuOpen(true)}
        onMouseLeave={() => setSubMenuOpen(false)}
      >
        <Collapse isShow={isSubMenuOpen} response="md">
          <Slide isShow={isSubMenuOpen} expand="lg">
            <Container as="nav" fluid="lg" className="px-lg-0">
              <Row as="ul">
                <Col as="li" lg="4" className="l-header__toggle">
                  <Button
                    variant="link"
                    onClick={closeSubMenu}
                    className="menu-link menu-link--light w-100 d-flex align-items-center px-0 py-3 py-lg-4 fs-lg rounded-0"
                  >
                    <i className="mr-3 fas fa-arrow-alt-circle-left" />
                    <span>back</span>
                  </Button>
                </Col>
                <Col as="li" lg="4">
                  <a
                    href="#"
                    className="menu-link menu-link--light d-flex justify-content-between align-items-center py-3 py-lg-4"
                  >
                    <span>assadsa</span>
                    <i className="fas fa-arrow-alt-circle-right" />
                  </a>
                </Col>
                <Col as="li" lg="4" className="menu__item">
                  <a
                    href="#"
                    className="menu-link menu-link--light d-flex justify-content-between align-items-center py-3 py-lg-4"
                  >
                    <span>assadsa</span>
                    <i className="fas fa-arrow-alt-circle-right" />
                  </a>
                </Col>
                <Col as="li" lg="4" className="menu__item">
                  <a
                    href="#"
                    className="menu-link menu-link--light d-flex justify-content-between align-items-center py-3 py-lg-4"
                  >
                    <span>assadsa</span>
                    <i className="fas fa-arrow-alt-circle-right" />
                  </a>
                </Col>
              </Row>
            </Container>
          </Slide>
        </Collapse>
      </div>
    </header>
  )
}
