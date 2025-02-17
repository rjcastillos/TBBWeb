import { useState } from 'react'
import './index.css'
import Home from './components/Home'
import Card from './components/Card'
import ImageSlider from './components/ImageSlider'
import OpenCards from './components/OpenCards'
import Myfooter from './components/Myfooter'
import Quote from './components/Quote'





const Mine = () => {

  return (
    <div className='fixed_header bg-[#2483c3] md:bg-[#0959b2]'>
      <div className='banner'>
        <img src="src/assets/TBBbanner.svg" alt="Travel by Baking http://TravelbyBaking.com" className='ml-[5px] rounded-sm border-r-1 border-black' />
        {/* <p> Min 46:30 and APIs from the Tech with Tim at 1:03</p> */}
      </div>

    </div>
  )
}


const App = () =>{
  
  return(
    <div>
        <Mine/>
        <Quote/>
        <ImageSlider/>
        <div>
         
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
