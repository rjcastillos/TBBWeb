import { useState } from 'react'
import './index.css'
import Home from './components/Home'
import Card from './components/Card'
import ImageSlider from './components/ImageSlider'
import OpenCards from './components/OpenCards'
import Myfooter from './components/Myfooter'





const Mine = () => {

  return (
    <div className='bg-[#52d0df] md:bg-[#0a5ab3]'>

      <div className='banner'>
        <img src="src/assets/TBBbanner.svg" alt="Travel by Baking http://TravelbyBaking.com" className='rounded-sm border-l-4 border-black' />
        {/* <p> Min 46:30 and APIs from the Tech with Tim at 1:03</p> */}
      </div>
      <div className='bg-[#f5f5f5]'>
        <p><blockquote className='quote-text'> 
        ”You have to taste a culture to understand it.”
        <br />
        –Deborah Cater</blockquote></p>
      </div>
    </div>
  )
}


const App = () =>{
  
  return(
    <div>
        <Mine/>
        <ImageSlider/>
        <div>
         <h1 className="luciluci text-3xl mt-100px">Recipes</h1>
          {/* <Card Recipe={{Title:"Recipe one"}}/>
          //<Card Recipe={{Title:"Recipe Two"}}/>
          //<Card Recipe={{Title:"Recipe Three"}}/>
          <Home/>
          */}
          <Home/> 
          {/* <OpenCards/>  */}
          <Myfooter/>
         
        </div>
    </div>
  )
}
export default App
