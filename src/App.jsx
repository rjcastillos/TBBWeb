import { useState } from 'react'
import './index.css'
import Home from './components/Home'
import Card from './components/Card'
import ImageSlider from './components/ImageSlider'
import OpenCards from './components/OpenCards'
import Myfooter from './components/Myfooter'





const Mine = () => {

  return (
    <div className='banner'>
      <img src="src/assets/TBBbanner.svg" alt="Travel bx Baking http://TravelbyBaking.com" />
      {/* <p> Min 46:30 and APIs from the Tech with Tim at 1:03</p> */}
      <p><blockquote className=''> 
      ”You have to taste a culture to understand it.”
      <br />
      –Deborah Cater</blockquote></p>
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
