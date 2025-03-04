import React from 'react'
import DATASET from '/Users/ramon/Documents/DocsandMisc/github/projects/TravelByBaking/localworking/allRecipesData.json'
import { h3 } from 'framer-motion/client'
import MyConfig from '../Configuration.json'
import getRecipesbyCategories from '../getRecipesbyCategory.js'

const featuredCategories = MyConfig['featuredCategories']
const fetchedImages =[]

const DisplayRecipe = () => {
  const KEYS = Object.keys(DATASET)

  const slideImages = () => {
    console.log("Was called")
    KEYS.map((key)=> (
    DATASET[key]['ThumbNails'].map( thumbnail => fetchedImages.push(thumbnail) )
    ))
    return fetchedImages
  }

  return (
    <div className='recipe-fixed flex Home justify-start flex-col w-[50%]'>
     <div className='flex flex-col'>
      <h1 className='text-3xl'>Recipe Details:</h1>
      </div>
      <div className='flex-col'>
        <span>Featured Recipes : {featuredCategories}</span>
       {KEYS.map((key)=> (
 /*        <p> Key = {key} type of Title {typeof DATASET[key]['ThubNamils'] },lenght {DATASET[key]['ThumbNails'].length} : ThumbNails  {DATASET[key]['ThumbNails']} </p> */
        <ul>
          {key}
          {DATASET[key]['ThumbNails'].map(value =>
            (
              
                  <li>
                     {value}
                 </li>
            )
           
          )}
        </ul>
      ))}
      </div>
      <h1><strong>{getRecipesbyCategories(1,"featured")}</strong></h1>
    </div>
  )
}

export default DisplayRecipe
