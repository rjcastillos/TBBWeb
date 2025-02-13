import React, {useState} from 'react'
import {motion} from 'framer-motion'
import RecipeImg1 from '/almond-cookies_tmbn_730_v01.jpg'
import RecipeImg2 from '/apple-puff-pastry-tarts_tmbn_730_v01.jpg'
import RecipeImg3 from '/crispy-and-spicy-chicken-wings-in-the-oven_tmbn_730_v01.jpg'
import RecipeImg4 from '/german-style-orange-cheesecake_tmbn_730_v01.jpg'
import RecipeImg5 from '/venezuelan-ham-cachitos-bread-rolls_tmbn_v1_730_v01.jpg'
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
  
    const positions = ["center", "left1", "left", "right", "right1"];
  
    const imageVariants = {
      center: { x: "0%", scale: 1, zIndex: 5 },
      left1: { x: "-50%", scale: 0.7, zIndex: 3 },
      left: { x: "-90%", scale: 0.5, zIndex: 2 },
      right: { x: "90%", scale: 0.5, zIndex: 1 },
      right1: { x: "50%", scale: 0.7, zIndex: 3 },
    };
    return (
    <div>
      <div className="flex justify-center min-h-75">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          href="https://travelbybaking.com"
          className="rounded-[12px]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.7 }}
          style={{ width: "40%", position: "absolute" }}
        />
      ))}
      </div>
            <div className="flex justify-center gap-2">
            <button className="text-black text-xl bg-gray-400 rounded-md py-2 px-4" onClick={handleBack}>Back</button>
            <button className="text-black text-xl bg-gray-400 rounded-md py-2 px-4" onClick={handleNext}>Next</button>
            </div>
      </div>
    );
  };
  
  export default ImageSlider;
