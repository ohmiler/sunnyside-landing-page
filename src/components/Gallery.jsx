import React from 'react'
import imgMilk from '../assets/img/desktop/image-gallery-milkbottles.jpg'
import imgOrange from '../assets/img/desktop/image-gallery-orange.jpg'
import imgCone from '../assets/img/desktop/image-gallery-cone.jpg'
import imgSugarCubes from '../assets/img/desktop/image-gallery-sugarcubes.jpg'


function Gallery() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <img src={imgMilk} alt="milk" />
        <img src={imgOrange} alt="orange" />
        <img src={imgCone} alt="cone" />
        <img src={imgSugarCubes} alt="sugar" />
    </div>
  )
}

export default Gallery