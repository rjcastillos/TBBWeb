import { useState } from 'react'
import './index.css'
import Home from './components/Home'
import Card from './components/Card'
import ImageSlider from './components/ImageSlider'
import OpenCards from './components/OpenCards' 



const Mine = () => {

  return (
    <div>
      <p> Min 46:30 and APIs from the Tech with Tim at 1:03</p>
    </div>
  )
}


const App = () =>{
  
  return(
    <div>
        <Mine/>
       {/*  <OpenCards/>  */}
        <ImageSlider/>
        <div>
         <h1 className="luciluci card-container">Recipes</h1>
          {/* <Card Recipe={{Title:"Recipe one"}}/>
          //<Card Recipe={{Title:"Recipe Two"}}/>
          //<Card Recipe={{Title:"Recipe Three"}}/>
           <Home/>
          */}
            <Home/>    
        </div>
    </div>
  )
}
export default App
