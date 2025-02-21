import React from 'react'
import DATASET from '/Users/ramon/Documents/DocsandMisc/github/projects/TravelByBaking/localworking/allRecipesData.json'
import { h3 } from 'framer-motion/client'
const DisplayRecipe = () => {
    const KEYS = Object.keys(DATASET)
  return (
    <div className='recipe-fixed flex Home justify-start flex-col w-[50%]'>
     <div className='flex flex-col'>
      <h1 className='text-3xl'>Recipe Details:</h1>
      </div>
      <div className='flex-col'>
       {KEYS.map((key)=> (
        <p>{key}</p>
      ))}
      </div>
    </div>
  )
}

export default DisplayRecipe
