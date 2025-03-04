import React, {useState} from 'react'
import {motion} from 'framer-motion'
import getRecipesbyCategories from '../getRecipesbyCategory.js'
import getlastRecipe from '../getlastRecipe.js'
import MyConfig from '../Configuration.json'
const DEBUG=MyConfig['DEBUG']
const featuredCategories = MyConfig['featuredCategories']
const img_prefix  = "src/assets/img/"
const fetchedImages = JSON.parse(getRecipesbyCategories(1,"featured"))
const imagesPrefix = MyConfig['imagesPrefix']

const urls = []
const latestRecipe=JSON.parse(getlastRecipe())
if (DEBUG) {
  console.log(`Ìmages ${typeof fetchedImages} 0 = ${fetchedImages[0]["ThumbNail"]}`)
  console.log(`LAST = ${latestRecipe[0]["ThumbNail"]}`)}

const RecipeImg1 = img_prefix+latestRecipe[0]["ThumbNail"]
urls[0]=latestRecipe[0]["Link"]
const RecipeImg2 = img_prefix+fetchedImages[0]["ThumbNail"]
urls[1]=fetchedImages[0]["Link"]
const RecipeImg3 = img_prefix+fetchedImages[1]["ThumbNail"]
urls[2]=fetchedImages[1]["Link"]
const RecipeImg4 = img_prefix+fetchedImages[2]["ThumbNail"]
urls[3]=fetchedImages[2]["Link"]
const RecipeImg5 = img_prefix+fetchedImages[3]["ThumbNail"]
urls[4]=fetchedImages[3]["Link"]


import { div } from 'framer-motion/client'


const ImageSlider = () => {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  
    const handleNext = () => {
      setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map(
          (prevIndex) => (prevIndex + 1) % 5
        );
        return updatedIndexes;
      });
    };
  
    const handleBack = () => {
      setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map(
          (prevIndex) => (prevIndex + 4) % 5
        );
  
        return updatedIndexes;
      });
    };
  
    const images = [
                        RecipeImg1,
                        RecipeImg2,
                        RecipeImg3,
                        RecipeImg4,
                        RecipeImg5
                    ]
  
/*     const urls = [
                  "https://travelbybaking.com/almond-cookies/",
                  "https://travelbybaking.com/apple-puff-pastry-tarts/",
                  "https://travelbybaking.com/crispy-and-spicy-chicken-wings-in-the-oven/",
                  "https://travelbybaking.com/german-style-orange-cheesecake/",
                  "https://travelbybaking.com/venezuelan-ham-cachitos-bread-rolls/"
    ] */
    const positions = ["center", "left1", "left", "right", "right1"];
  
    const imageVariants = {
      center: { x: "0%", scale: 0.9, zIndex: 5 },
      left1: { x: "-50%", scale: 0.7, zIndex: 3 },
      left: { x: "-90%", scale: 0.5, zIndex: 2 },
      right: { x: "90%", scale: 0.5, zIndex: 1 },
      right1: { x: "50%", scale: 0.7, zIndex: 3 },
    };
    return (
    <div className='relative top-[100px]'>
      <div className="flex flex-wrap justify-center">
      {images.map((image, index) => (
        <a href={`${urls[index]}`}>
        <motion.img
          key={index}
          src={image}
          alt={image}
          a href="https://travelbybaking.com"
          className="rounded-[12px] left-position -top-[100px]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.7 }}
          style={{ width: "50%", position: "absolute" }}
        /></a>
      ))}
      </div>
      <div className="flex flex-wrap relative -top-[20px] back-next-separation justify-center content-center gap-3">
        <button className="text-white ImageSliderBackNextBtn bg-[#0959b2] rounded-md py-8 px-12" onClick={handleBack}>&lt;&lt;&lt;</button>
        <button className="text-white ImageSliderBackNextBtn bg-[#0959b2] rounded-md py-8 px-12" onClick={handleNext}>&gt;&gt;&gt;</button>
      </div>
      </div>
    );
  };
  
  export default ImageSlider;
