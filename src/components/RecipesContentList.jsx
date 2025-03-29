import React from 'react'
import MyFooter from './MyFooter'
import Quote from './Quote'
import MyHeader from './MyHeader'
import getRecipesbyCategories from '../getRecipesbyCategory.js'
import DATASET from '/Users/ramon/Documents/DocsandMisc/github/projects/TravelByBaking/localworking/allRecipesData.json'
import CATS from '../recipesbyCategory.json'
import MyConfig from '../Configuration.json'
import '../styles/RecipesConentList.css'
import MiniSlider from './MiniSlider'
import { li } from 'framer-motion/client'


const featuredCategories = MyConfig['featuredCategories']
const img_prefix  = "src/assets/img/"
var fetchedImages =[]
var newlist = []
var sliderList = []

const RecipesContentList = () => {
const KEYS = Object.keys(DATASET)


const getThumbnailsbyRecipe = (key) => {
      fetchedImages=[]
      DATASET[key]['ThumbNails'].map( thumbnail => fetchedImages.push(thumbnail) )
      return fetchedImages
  }

  function getArray (listof){
      newlist=[]
      if (Array.isArray(listof[0])) {
          newlist = listof[0]
          } else if (Array.isArray(listof)) {newlist = listof}
                    else if (typeof listof === "string") {newlist.push(listof)}
      return newlist 
  }
  function getPrimarycategory (allCats){
    var primaryCategory = []
    var post_allCats = getArray(allCats)
    primaryCategory.push(post_allCats[0])
    console.log(`Primary Cat is ${post_allCats[0]}`)
    return primaryCategory
  }

  return (
    <div className='Recipes-ContentList'>
      <MyHeader/>
      <Quote/>
      <div>
            
            {Object.keys(CATS).sort().map( 
              category =>
                <details>
                <summary>
                {category[0].toUpperCase()+category.slice(1)}                 
                </summary>
                <ul>
        
                            {CATS[category].map(
                                recipe =>
                                <li>
                                     <a href={`${recipe.Link}`} target='_blank'>{recipe['Title']}</a>
                                
                                </li>
                            )}

                </ul>
                </details> 
                )} 

                       
        
      </div>
      <div className='_LastElement'>
                <p></p>
    </div>
      <MyFooter/>
    </div>
  )
}

export default RecipesContentList
