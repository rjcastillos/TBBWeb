import { useState } from 'react'
import './index.css'
import './styles/MyHeader.css'
import './styles/MyFooter.css'
import './styles/Home.css'
import Home from './components/Home'
import ImageSlider from './components/ImageSlider'
import OpenCards from './components/OpenCards'
import MyFooter from './components/MyFooter'
import Quote from './components/Quote'
import MyHeader from './components/MyHeader'


const App = () =>{
  return(
    <div>
        <MyHeader/>
        <Quote/>
        <ImageSlider/>
        <Home/> 
        {/* <OpenCards/>  */}
        <MyFooter/>  
    </div>
  )
}
export default App
