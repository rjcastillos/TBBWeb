import React from 'react'
import '../styles/MiniSlider.css'
import MyConfig from '../Configuration.json'
import { li } from 'framer-motion/client'
const DEBUG=MyConfig['DEBUG']
const featuredCategories = MyConfig['featuredCategories']
const img_prefix  = "src/assets/img/"
/* const fetchedImages = JSON.parse(getRecipesbyCategories(1,"featured")) */
const imagesPrefix = MyConfig['imagesPrefix']

const MiniSlider = ({sliderList}) => {
const recipes = JSON.parse(sliderList)
  return (
    <div className='outerframe'>
      <div className='slide'>
        <ul className='ul_slide'>
        {sliderList}
          {`Received ${recipes.length} recipes from caller`}
          {recipes.map(
            recipe =>
              <li>
                {recipe["ThumbNail"]+" "+recipe["Category"]}
              </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default MiniSlider
