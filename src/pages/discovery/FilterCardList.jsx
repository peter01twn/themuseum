import React from 'react'
import CardList from './CardList'
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
    time: 1,
    location: 2,
    member: 2,
  },
  {
    img: img03,
    title: 'denis-jung',
    text: 'Photo by denis-jung on Unsplash',
    time: 2,
    location: 3,
    member: 2,
  },
  {
    img: img04,
    title: 'edwin-ashitendoh',
    text: 'Photo by edwin-ashitendoh on Unsplash',
    time: 2,
    location: 1,
    member: 1,
  },
  {
    img: img05,
    title: 'ewien-van-bergeijk',
    text: 'Photo by ewien-van-bergeijk on Unsplash',
    time: 1,
    location: 3,
    member: 2,
  },
  {
    img: img06,
    title: 'gregory-rakovsky',
    text: 'Photo by gregory-rakovsky on Unsplash',
    time: 1,
    location: 4,
    member: 1,
  },
  {
    img: img07,
    title: 'james-yarema',
    text: 'Photo by james-yarema on Unsplash',
    time: 1,
    location: 3,
    member: 1,
  },
  {
    img: img08,
    title: 'james-yarema',
    text: 'Photo by james-yarema on Unsplash',
    time: 1,
    location: 4,
    member: 2,
  },
  {
    img: img09,
    title: 'james-yarema',
    text: 'Photo by james-yarema on Unsplash',
    time: 3,
    location: 2,
    member: 2,
  },
  {
    img: img11,
    title: 'meghan-schiereck',
    text: 'Photo by meghan-schiereck on Unsplash',
    time: 3,
    location: 1,
    member: 1,
  },
]

function WithFilter(Component) {
  return ({ filter, ...attrs }) => {
    const { time, location, member } = filter
    const filterData = data.filter((el) => {
      return (
        (el.time == time || !time) &&
        (el.location == location || !location) &&
        (el.member == member || !member)
      )
    })
    return <Component data={filterData} {...attrs} />
  }
}

export default WithFilter(CardList)
