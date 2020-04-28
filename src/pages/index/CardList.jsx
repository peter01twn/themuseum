import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Card from './Card'
import img02 from '../../images/ben-garratt-HoupC-zHlLo-unsplash.jpg'
import img03 from '../../images/denis-jung-nQcmPxXZ5zU-unsplash.jpg'
import img04 from '../../images/edwin-ashitendoh-08fd3iw5pCM-unsplash.jpg'
import img05 from '../../images/ewien-van-bergeijk-kwant-GdYO8v2SISs-unsplash.jpg'
import img06 from '../../images/gregory-rakovsky-WVFOgVVma6U-unsplash.jpg'
import img07 from '../../images/james-yarema-IiWoS6Be4Fs-unsplash.jpg'
import img08 from '../../images/jerry-wang-Pvf_WTiFGng-unsplash.jpg'
import img09 from '../../images/li-lin-VngNE4WQp24-unsplash.jpg'
import img11 from '../../images/meghan-schiereck-lzRO1GmKqQE-unsplash.jpg'

const CardList = () => {
  const data = [
    { img: img02, title: 'ben-garratt', text: 'ben-garratt' },
    { img: img03, title: 'denis-jung', text: 'denis-jung' },
    { img: img04, title: 'edwin-ashitendoh', text: 'edwin-ashitendoh' },
    { img: img05, title: 'ewien-van-bergeijk', text: 'ewien-van-bergeijk' },
    { img: img06, title: 'gregory-rakovsky', text: 'gregory-rakovsky' },
    { img: img07, title: 'james-yarema', text: 'james-yarema' },
    { img: img08, title: 'james-yarema', text: 'james-yarema' },
    { img: img09, title: 'james-yarema', text: 'james-yarema' },
    { img: img11, title: 'meghan-schiereck', text: 'meghan-schiereck' },
  ]

  return (
    <Row className="row--wrap">
      {data.map((el) => (
        <Col md="6">
          <Card img={'el.img'} title={el.title} text={el.text} />
        </Col>
      ))}
    </Row>
  )
}

export default CardList
