import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Card from '../../components/Card'

const CardList = ({ data }) => {
  return (
    <Row className="row--wrap">
      {data.map((el, i) => (
        <Col key={i} md="4">
          <Card
            img={el.img}
            title={el.title}
            text={el.text}
            className="p-visit__card h-100"
          />
        </Col>
      ))}
    </Row>
  )
}

export default CardList
