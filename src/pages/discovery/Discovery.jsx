import React, { useState } from 'react'
import Section from 'components/Section'
import { Alert, Breadcrumb, Nav, Row, Col } from 'react-bootstrap'
import FilterNav from './FilterNav'
import FilterCardList from './FilterCardList'
import img02 from '../../images/ben-garratt-HoupC-zHlLo-unsplash.jpg'
import img03 from '../../images/denis-jung-nQcmPxXZ5zU-unsplash.jpg'
import img04 from '../../images/edwin-ashitendoh-08fd3iw5pCM-unsplash.jpg'
import img05 from '../../images/ewien-van-bergeijk-kwant-GdYO8v2SISs-unsplash.jpg'
import img06 from '../../images/gregory-rakovsky-WVFOgVVma6U-unsplash.jpg'
import img07 from '../../images/james-yarema-IiWoS6Be4Fs-unsplash.jpg'
import img08 from '../../images/jerry-wang-Pvf_WTiFGng-unsplash.jpg'
import img09 from '../../images/li-lin-VngNE4WQp24-unsplash.jpg'
import img11 from '../../images/meghan-schiereck-lzRO1GmKqQE-unsplash.jpg'

const data = [
  {
    img: img02,
    title: 'ben-garratt',
    text: 'Photo by ben-garratt on Unsplash',
  },
  {
    img: img03,
    title: 'denis-jung',
    text: 'Photo by denis-jung on Unsplash',
  },
  {
    img: img04,
    title: 'edwin-ashitendoh',
    text: 'Photo by edwin-ashitendoh on Unsplash',
  },
  {
    img: img05,
    title: 'ewien-van-bergeijk',
    text: 'Photo by ewien-van-bergeijk on Unsplash',
  },
  {
    img: img06,
    title: 'gregory-rakovsky',
    text: 'Photo by gregory-rakovsky on Unsplash',
  },
  {
    img: img07,
    title: 'james-yarema',
    text: 'Photo by james-yarema on Unsplash',
  },
  {
    img: img08,
    title: 'james-yarema',
    text: 'Photo by james-yarema on Unsplash',
  },
  {
    img: img09,
    title: 'james-yarema',
    text: 'Photo by james-yarema on Unsplash',
  },
  {
    img: img11,
    title: 'meghan-schiereck',
    text: 'Photo by meghan-schiereck on Unsplash',
  },
]

const Discovery = () => {
  const [filter, setFilter] = useState({})

  return (
    <>
      <Section className="border-bottom border-bright">
        <h1 className="mb-5 display-4 font-weight-bold">Discovery</h1>
        <FilterNav getFilter={setFilter} />
      </Section>
      <Section>
        <FilterCardList filter={filter} />
      </Section>
    </>
  )
}

export default Discovery
