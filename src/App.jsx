import { useState } from 'react'
import './index.css'
import Home from './components/Home'
import Card from './components/Card'


const Mine = () => {

  return (
    <div>
      <p> Min 35:21 and 47:11 from the other</p>
    </div>
  )
}

const App = () =>{
  
  return(
    <div>
        <Mine/>
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
