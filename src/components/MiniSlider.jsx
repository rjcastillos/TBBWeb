import React from 'react'
import '../styles/MiniSlider.css'
import MyConfig from '../Configuration.json'
const DEBUG=MyConfig['DEBUG']
const featuredCategories = MyConfig['featuredCategories']
const img_prefix  = "src/assets/img/"
/* const fetchedImages = JSON.parse(getRecipesbyCategories(1,"featured")) */
const imagesPrefix = MyConfig['imagesPrefix']

const MiniSlider = ({sliderList}) => {
  return (
    <div className='outerframe'>
      <div className='slide'>
        <ul>
            <li>
                {sliderList}
            </li>
        </ul>
      </div>
    </div>
  )
}

export default MiniSlider
