import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'

const HeaderSubMenu = ({ data = [], onClick, isShow }) => {
  const createMenu = () => {
    return data.map((el, i) => {
      return (
        <Col key={i} as="li" lg="4">
          <Link
            to={el.to ? el.to : '#' }
            onClick={onClick}
            className="menu-link menu-link--primary w-100 d-flex align-items-center justify-content-lg-between px-0 py-3 py-lg-4 fs-md"
          >
            <i className="d-lg-none mr-3 fas fa-arrow-alt-circle-left" />
            <span>{el.title}</span>
            <i className="d-none d-lg-block fas fa-arrow-circle-right" />
          </Link>
        </Col>
      )
    })
  }

  return (
    <Row as="ul">
      <Col as="li" lg="4" className="l-header__toggle">
        <button
          onClick={onClick}
          className="menu-link menu-link--light w-100 d-flex align-items-center px-0 py-3 py-lg-4 fs-md"
          style={{opacity: '.75'}}
        >
          <i className="mr-3 fas fa-arrow-alt-circle-left" />
          <span>back</span>
        </button>
      </Col>
      {createMenu()}
    </Row>
  )
}

export default HeaderSubMenu
