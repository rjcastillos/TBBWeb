import { useState } from 'react'
const Card = ({Recipe}) => {
    const [favorited, sethasFavorited] = useState(false);
    return(
      <div className='card'>
        <div className='Title'>
          <h2>{Recipe.Title}</h2>
        </div>
        <div className='btn-click'>
          <button onClick={()=>sethasFavorited(!favorited)}>
          {favorited ? "💙":"❓"}
          </button>
        </div>
        <div className='CodeName'>   
          {Recipe.RecipeCodeName}
         </div>
         <div className='refInCard'>
        <a href={Recipe.Link} target='_blank'>link</a><a/>
        
         </div>
    </div>
    )
  }

  export default Card