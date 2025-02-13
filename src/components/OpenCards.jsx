import React, {useState} from 'react'


import RecipeImg1 from '../../public/almond-cookies_tmbn_730_v01.jpg'
import RecipeImg2 from '../../public/apple-puff-pastry-tarts_tmbn_730_v01.jpg'
import RecipeImg3 from '../../public/crispy-and-spicy-chicken-wings-in-the-oven_tmbn_730_v01.jpg'
import RecipeImg4 from '../../public/german-style-orange-cheesecake_tmbn_730_v01.jpg'
import RecipeImg5 from '../../public/venezuelan-ham-cachitos-bread-rolls_tmbn_v1_730_v01.jpg'

import {motion} from 'framer-motion'

const OpenCards = () => {

const [expandedIndex, setExpandedIndex] = useState(null);

const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index)

}

const cardVariants = {
                        expanded: {
                        width: "400px"
                        },
                        collapsed: {
                        width: "200px"
                        }

                    }

const cardImages = [
                    RecipeImg1,
                    RecipeImg2,
                    RecipeImg3,
                    RecipeImg4,
                    RecipeImg5
                ]
const cardDescription = [
                    "Recipe in Display One",
                    "Recipe in Display Two",
                    "Recipe in Display Three",
                    "Recipe in Display Four",
                    "Recipe in Display Five"
                    ]
  return (
    <section className='rounded-2xl py-16 pb-[300px] bg-gradient-to-r from-gray-300 to-gray-500'>
      <div className='max-w-20xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        
          <h1 className='text-3xl font-extrabold text-black'>Featured Recipes</h1>
          <p className='mt-4 text-xl text-gray-600'>Check out our latest works</p>
      </div>
      <div className='mt-12 flex flex-col md:flex-row justify-center items-center gap-5'>
        {[0, 1, 2, 3, 4].map((index) => (
            <motion.div
            key={index}
            className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${index === expandedIndex ? 'expanded': ''}`}
            variants={cardVariants}
            initial="collapsed"
            animate={index === expandedIndex ? 'expanded': 'collapsed'}
            transition={{duration: 0.5}}
            onClick={() => handleCardClick(index)}
            style={{
                            backgroundImage: `url(${cardImages[index]})`,

            }}
          >
              <div className='card-content h-full flex flex-col justify-end'>
                  <div className='card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center'>
                    <h2 className='text-xl font-semibold text-white text-center'>Recipe {index + 1}</h2>
                    {index === expandedIndex && (
                      <p className='mt-2 text-gray-300 text-center'>{cardDescriptions[index]} </p>
                    )

                    }
                  </div>
              </div>
          </motion.div>
        ))}
      </div>


 </section>
  )
}

export default OpenCards
