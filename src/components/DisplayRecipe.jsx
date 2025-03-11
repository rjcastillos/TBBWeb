import React from 'react'
import { useParams } from 'react-router-dom'
import MyFooter from './MyFooter'
import Quote from './Quote'
import MyHeader from './MyHeader'
import DATASET from '/Users/ramon/Documents/DocsandMisc/github/projects/TravelByBaking/localworking/allRecipesData.json'
import { h3, li } from 'framer-motion/client'
import MyConfig from '../Configuration.json'
import getRecipesbyCategories from '../getRecipesbyCategory.js'
import '../styles/DisplayRecipe.css'
import { span } from 'framer-motion/m'

const featuredCategories = MyConfig['featuredCategories']
var fetchedImages =[]

var newlist = []

const DisplayRecipe = () => {
const KEYS = Object.keys(DATASET)

const { RecipeCodeName } = useParams()

  const slideImages = (key) => {
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
      console.log(`Type = ${typeof newlist} for ${listof}`)
      return newlist 
  }

  return (
    <div className='Recipe-detail'>
      <MyHeader/>
      <Quote/>
           
     <div className='flex flex-col'>
      <h1 className='text-3xl p-0.5'>{DATASET[RecipeCodeName]['Title']}</h1>
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
        <div className='DisplayRecipe_ThumbNails'>
          <ul className='ul_thumbnail'> 
            ThumbNails:       
            {slideImages(RecipeCodeName).map(
             thumbnail =>
                <li>
                  {thumbnail}
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

      </div>
      <MyFooter/>
    </div>
  )
}

export default DisplayRecipe
