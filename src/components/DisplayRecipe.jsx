import React from 'react'
import { useParams } from 'react-router-dom'
import MyFooter from './MyFooter'
import Quote from './Quote'
import MyHeader from './MyHeader'
import DATASET from '/Users/ramon/Documents/DocsandMisc/github/projects/TravelByBaking/localworking/allRecipesData.json'
import { h3 } from 'framer-motion/client'
import MyConfig from '../Configuration.json'
import getRecipesbyCategories from '../getRecipesbyCategory.js'
import '../styles/DisplayRecipe.css'

const featuredCategories = MyConfig['featuredCategories']
const fetchedImages =[]

const DisplayRecipe = () => {
const KEYS = Object.keys(DATASET)

const { RecipeCodeName } = useParams()

  const slideImages = () => {
    console.log("Was called")
    KEYS.map((key)=> (
    DATASET[key]['ThumbNails'].map( thumbnail => fetchedImages.push(thumbnail) )
    ))
    return fetchedImages
  }

  return (
    <div className='Recipe-detail'>
      <MyHeader/>
      <Quote/>
           
     <div className='flex flex-col'>
      <h1 className='text-3xl'>{DATASET[RecipeCodeName]['Title']}</h1>
      </div>
      <div className='flex-col text-sm'>
        <div className='DisplayRecipe_ShortDescription'>
          <strong>Short Description: </strong><br/> 
          {DATASET[RecipeCodeName]['ShortDescription']}
        </div>
        <div className='DisplayRecipe_Description'>
          <strong>Description: </strong><br/> 
          {DATASET[RecipeCodeName]['Description']}
        </div>
      </div>
      <MyFooter/>
    </div>
  )
}

export default DisplayRecipe
