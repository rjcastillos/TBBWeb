import React from 'react'
import DATASET from '/Users/ramon/Documents/DocsandMisc/github/projects/TravelByBaking/localworking/allRecipesData.json'
import { h3 } from 'framer-motion/client'
const slideImages =[{}]
const DisplayRecipe = () => {
    const KEYS = Object.keys(DATASET)
  return (
    <div className='recipe-fixed flex Home justify-start flex-col w-[50%]'>
     <div className='flex flex-col'>
      <h1 className='text-3xl'>Recipe Details:</h1>
      </div>
      <div className='flex-col'>
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
    </div>
  )
}

export default DisplayRecipe
