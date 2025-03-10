import { div } from 'framer-motion/client';
import 'react-slideshow-image/dist/styles.css'
import {Fade , Slide} from 'react-slideshow-image'
import { useState } from 'react'
const Card = ({Recipe}) => {
const img_prefix  = "src/assets/img/"
    const [favorited, sethasFavorited] = useState(false);
    return(
      <div className='card'>
        <div className='Title'>
          <h2>{Recipe.Title}</h2>
        </div>
        <div className='btn-click flex justify-center'>
          <button onClick={()=>sethasFavorited(!favorited)}>
          {favorited ? "💙":"🤍"}
          </button>
        </div>
         <div className='imgcard flex justify-center'>

             <img src={img_prefix+Recipe.ThumbNails[0]} alt={Recipe.alt} />
 
{/*             <Fade>
            {Recipe.ThumbNails.map((thumbnail , index)=>(
              <div key={Recipe.RecipeCodeName+index}>
              <img src={img_prefix+thumbnail} alt={Recipe.alt}/>
              </div>
            ))}
            </Fade> */}
         </div>
         <div className='flex justify-start'>
         {Recipe.Description}
         </div>
         <div className='refInCard'>
        <a href={`/${Recipe.RecipeCodeName}`} target='_blank'>Recipe's details</a>
        
         </div>
    </div>
    )
  }

  export default Card