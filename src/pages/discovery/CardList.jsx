import React from 'react'
import { Row, Col, CardDeck } from 'react-bootstrap'
import Card from '../../components/Card'
import img02 from '../../images/ben-garratt-HoupC-zHlLo-unsplash.jpg'
import img03 from '../../images/denis-jung-nQcmPxXZ5zU-unsplash.jpg'
import img04 from '../../images/edwin-ashitendoh-08fd3iw5pCM-unsplash.jpg'
import img05 from '../../images/ewien-van-bergeijk-kwant-GdYO8v2SISs-unsplash.jpg'
import img06 from '../../images/gregory-rakovsky-WVFOgVVma6U-unsplash.jpg'
import img07 from '../../images/james-yarema-IiWoS6Be4Fs-unsplash.jpg'
import img08 from '../../images/jerry-wang-Pvf_WTiFGng-unsplash.jpg'
import img09 from '../../images/li-lin-VngNE4WQp24-unsplash.jpg'
import img11 from '../../images/meghan-schiereck-lzRO1GmKqQE-unsplash.jpg'

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
