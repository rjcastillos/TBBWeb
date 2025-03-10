import { useState } from 'react'
import './index.css'
import './styles/MyHeader.css'
import './styles/MyFooter.css'
import './styles/Home.css'
import './styles/Card.css'
import { Routes , Route } from 'react-router-dom'
import MainContent from './MainContent'



const App = () =>{
  return(
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<MainContent/>}/> 
      </Routes>

    </main>

  )
}
export default App
