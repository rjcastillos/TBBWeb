import React from 'react'
import { useParams } from 'react-router-dom'
import MyFooter from './MyFooter'
import Quote from './Quote'
import MyHeader from './MyHeader'
import getRecipesbyCategories from '../getRecipesbyCategory.js'
import DATASET from '/Users/ramon/Documents/DocsandMisc/github/projects/TravelByBaking/localworking/allRecipesData.json'
import { div, h3, img, li } from 'framer-motion/client'
import MyConfig from '../Configuration.json'
import '../styles/DisplayRecipe.css'
import { span } from 'framer-motion/m'
import MiniSlider from './MiniSlider'


const featuredCategories = MyConfig['featuredCategories']
const img_prefix  = "src/assets/img/"
var fetchedImages =[]
var newlist = []
var sliderList = []

const DisplayRecipe = () => {
const KEYS = Object.keys(DATASET)

const { RecipeCodeName } = useParams()

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
    <div className='Recipe-detail'>
      <MyHeader/>
      <Quote/>
           
     <div className='flex flex-col'>
      <h1 className='text-3xl p-0.5'>{DATASET[RecipeCodeName]['Title']}</h1>
    </div>

    <div className='DisplayRecipe_ThumbNails'>
          <div className='thumbnail-controller'>
            {getThumbnailsbyRecipe(RecipeCodeName).map(
              thumbnail =>
                <div className='thumbnail-element'>
                  <a href={"/"+RecipeCodeName}> 
                    <img src={img_prefix+thumbnail} alt={DATASET[RecipeCodeName]['Title']} />
                  </a>
                </div>
            )}
          </div>
        </div>

      <div className='flex-col text-sm mb-[30px]'>
        <div className='DisplayRecipe_ShortDescription'>
          <ul className='ul_basic'>
            Short Description: <br/>
            <li> 
              {DATASET[RecipeCodeName]['ShortDescription']}
            </li>
          </ul>
        </div>

        <div className='DisplayRecipe_Categories'>
          <ul className='ul_basic'>
          Categories:<br/> 
          {getArray(DATASET[RecipeCodeName]['Categories']).map(
            category =>
            <li>
              {category}
            </li>
          )}
          </ul>
        </div>

        <div className='DisplayRecipe_Description'>
          <strong>Description: </strong><br/> 
          {DATASET[RecipeCodeName]['Description']}
        </div>
        <div className='DisplayRecipe_Ingredients'>
          <ul>
   {/*       {`Type ${typeof DATASET[RecipeCodeName]['Ingredients'][0]}  Is it Array? ${Array.isArray(DATASET[RecipeCodeName]['Ingredients'][0])} and length ${DATASET[RecipeCodeName]['Ingredients'][0].length}`} 
          {Array.isArray(DATASET[RecipeCodeName]['Ingredients'][0]) ? A_Ingredients = DATASET[RecipeCodeName]['Ingredients'][0] : A_Ingredients = DATASET[RecipeCodeName]['Ingredients']}
         {`Type after ${typeof A_Ingredients}  Is it Array? ${Array.isArray(A_Ingredients)} and length ${A_Ingredients.length}`} 
           */}
          {getArray(DATASET[RecipeCodeName]['Ingredients']).map( 
            ingredient => 
              <li>
                {ingredient}
              </li>
            )} 
          </ul> 
        </div>

        <div className='DisplayRecipe_Directions'>
          <ul>
          {getArray(DATASET[RecipeCodeName]['Directions']).map(
            direction =>
            <li>
              {direction}
            </li>
          )}
          </ul>
        </div>

        <div className='DisplayRecipe_ServingSize'>
          <ul className='ul_ServingSize'>
            {Object.keys(DATASET[RecipeCodeName]['ServingSize']).map( 
              key =>
          
            <li>
              {DATASET[RecipeCodeName]['ServingSize'][key]}
            </li>
            )}
          </ul>
        </div>



        <div className='DisplayRecipe_Equipment'>
          <ul className='ul_basic'>
            Equipment:
          {getArray(DATASET[RecipeCodeName]['Equipment']).map(
            equipment =>
            <li>
              {equipment}
            </li>
          )}
          </ul>
        </div>

        <div className='DisplayRecipe_Lang'>
          <ul className='ul_basic'>
            Languages:
          {getArray(DATASET[RecipeCodeName]['Lang']).map(
            lan =>
            <li>
              {lan}
            </li>
          )}
          </ul>
        </div>

        <div className='DisplayRecipe_yt'>
        <iframe width="560" height="315" src={DATASET[RecipeCodeName]['VideoUrl']['src']} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>

        </div>

      <MiniSlider sliderList={getRecipesbyCategories(3,getPrimarycategory(DATASET[RecipeCodeName]["Categories"]))}/>
      </div>
      <div className='_LastElement'>
          <p></p>
      </div>
      <MyFooter/>
    </div>
  )
}

export default DisplayRecipe
