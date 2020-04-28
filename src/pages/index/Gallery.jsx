import React from 'react'
import Swiper from 'components/Swiper'
import img01 from 'images/gallery/chloe-evans-erHBElNC1DU-unsplash.jpg'
import img02 from 'images/gallery/debby-hudson-bb8_zSReIF0-unsplash.jpg'
import img03 from 'images/gallery/juan-rojas-Fs_RNpOMmF8-unsplash.jpg'

export default function Gallery() {
  const data = [
    { img: img01, text: 'Photo by chloe-evans on Unsplash' },
    { img: img02, text: 'Photo by debby-hudson on Unsplash' },
    { img: img03, text: 'Photo by Juan Rojas on Unsplash' }
  ]
  
  return <Swiper data={data} />
}
