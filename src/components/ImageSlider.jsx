import React, {useState} from 'react'
import {motion} from 'framer-motion'
import RecipeImg1 from '../assets/img/almond-cookies_tmbn_730_v01.jpg'
import RecipeImg2 from '../assets/img/apple-puff-pastry-tarts_tmbn_730_v01.jpg'
import RecipeImg3 from '../assets/img/crispy-and-spicy-chicken-wings-in-the-oven_tmbn_730_v01.jpg'
import RecipeImg4 from '../assets/img/german-style-orange-cheesecake_tmbn_730_v01.jpg'
import RecipeImg5 from '../assets/img/Venezuelan-ham-cachitos-bread-rolls.jpg'
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
  
    const urls = [
                  "https://travelbybaking.com/almond-cookies/",
                  "https://travelbybaking.com/apple-puff-pastry-tarts/",
                  "https://travelbybaking.com/crispy-and-spicy-chicken-wings-in-the-oven/",
                  "https://travelbybaking.com/german-style-orange-cheesecake/",
                  "https://travelbybaking.com/venezuelan-ham-cachitos-bread-rolls/"
    ]
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
