import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap'
import Collapse from 'utils/Collapse'
import Slide from 'utils/Slide'
import SubMenu from 'components/HeaderSubMenu'

const menuData = [
  {
    id: 1,
    title: 'Visit',
    subMenu: [
      {
        title: 'Visit',
        to: '/visit',
      },
      {
        title: 'Family visit',
        to: '#',
      },
      {
        title: 'Group visit',
        to: '#',
      },
      {
        title: 'Audio guide',
        to: '#',
      },
      {
        title: 'Out-of-hours tours',
        to: '#',
      },
      {
        title: 'Tours and talks',
        to: '#',
      },
      {
        title: 'Object trails',
        to: '#',
      },
      {
        title: 'Accessbility',
        to: '#',
      },
    ],
  },
  {
    id: 2,
    title: 'Exhibitions and events',
    to: '/events'
  },
  {
    id: 3,
    title: 'Collection',
    subMenu: [
      {
        title: 'Collection',
        to: '',
      },
      {
        title: 'Collection online',
        to: '',
      },
      {
        title: 'Galleries',
        to: '',
      },
      {
        title: 'Blog',
        to: '',
      },
    ],
  },
  {
    id: 4,
    title: 'Learn',
    to: '',
  },
  {
    id: 5,
    title: 'Membership',
    to: '',
  },
  {
    id: 6,
    title: 'Support us',
    to: '',
  },
]
export default function Header() {
  const [isMenuShow, setMenuShow] = useState(false)
  const [isSubMenuShow, setSubMenuShow] = useState(false)
  const [subMenuIndex, setSubMenuIndex] = useState(null)
  const handleNavbarToggle = () => {
    setMenuShow(!isMenuShow)
    setSubMenuShow(false)
  }

  const handleMenuClick = (index) =>
  () => {
    if (isSubMenuShow && subMenuIndex === index) {
      setSubMenuShow(false)
      return
    }
    if (menuData[index].subMenu) {
      setSubMenuShow(true)
    } else {
      setSubMenuShow(false)
    }
    setSubMenuIndex(index)
  }

  const handleSubMenuClick = () => {
    setSubMenuShow(false)
  }

  const createMenu = () => {
    return menuData.map((el, i) => (
      <Col key={i} as="li" sm="6" lg="auto">
        <Link
          to={el.to ? el.to : '#'}
          onClick={handleMenuClick(i)}
          className={`menu-link ${
            isSubMenuShow && subMenuIndex === i ? 'menu-link--active' : ''
          } py-3 pt-lg-0 pb-lg-5`}
        >
          {el.title}
          <i className="d-lg-none float-right fas fa-arrow-alt-circle-right" />
        </Link>
      </Col>
    ))
  }

  return (
    <header className="l-header mb-0">
      <Navbar
        variant="dark"
        bg="dark"
        className={`py-4 py-lg-5 border-bottom ${
          isMenuShow || isSubMenuShow ? 'border-bright' : 'border-dark'
        }`}
      >
        <div className="l-section d-flex justify-content-between p-0">
          <Navbar.Brand as={Link} to="/" className="text-decoration-none vertical-middle">
            <span className="h3">COVID - 19</span>
          </Navbar.Brand>
          <div className="l-header__toggle position-relative vertical-middle">
            {!isMenuShow ? (
              <i className="fas fa-bars" />
            ) : (
              <i className="fas fa-times" />
            )}
            <Button
              variant="link"
              className="ml-3 stretched-link"
              onClick={handleNavbarToggle}
            >
              Menu
            </Button>
          </div>
          <nav className={`l-header__navbar-collapse mb-lg-n5 bg-dark px-4 px-lg-0`}>
            <Collapse expand="lg" isShow={isMenuShow} className="mb-0">
              <ul className="d-none d-lg-flex justify-content-lg-end">
                <li>
                  <a href="#" className="text-secondary">
                    <i className="mr-2 fas fa-shopping-cart" />
                    <Button variant="link" className="text-secondary">
                      Shop
                    </Button>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary">
                    <i className="mr-2 fas fa-search" />
                    <Button variant="link" className="text-secondary">
                      Search
                    </Button>
                  </a>
                </li>
              </ul>
              <Row as="ul" className="flex-lg-nowrap mt-lg-3 mb-0">
                {createMenu()}
              </Row>
              <Row as="ul" className="d-lg-none justify-content-lg-end mt-3">
                <Col as="li" sm="6" lg="auto" className="pb-3 pb-lg-0">
                  <Button
                    variant="shadow"
                    block
                    className="py-3 rounded-0 fs-lg"
                  >
                    <i className="fas fa-shopping-cart" />
                    <span className="ml-2">Shop</span>
                  </Button>
                </Col>
                <Col as="li" sm="6" lg="auto">
                  <Button
                    variant="shadow"
                    block
                    className="py-3 rounded-0 fs-lg"
                  >
                    <i className="fas fa-search" />
                    <span className="ml-2">Search</span>
                  </Button>
                </Col>
              </Row>
            </Collapse>
          </nav>
        </div>
      </Navbar>
      <div
        className={`l-header__sub-collapse bg-dark`}
        onMouseEnter={() => setSubMenuShow(true)}
        onMouseLeave={() => setSubMenuShow(false)}
      >
        <Collapse isShow={isSubMenuShow} response="md">
          <Slide isShow={isSubMenuShow} expand="lg">
            <div className="l-section py-2">
              <SubMenu
                isShow={isSubMenuShow}
                data={menuData[subMenuIndex]?.subMenu}
                onClick={handleSubMenuClick}
              />
            </div>
          </Slide>
        </Collapse>
      </div>
    </header>
  )
}
