import Home from './components/Home'
import ImageSlider from './components/ImageSlider'
import MyFooter from './components/MyFooter'
import Quote from './components/Quote'
import MyHeader from './components/MyHeader'
import DisplayRecipe from './components/DisplayRecipe'
import './styles/MyHeader.css'
import './styles/MyFooter.css'
import './styles/Home.css'
import './styles/Card.css'
const MainContent = () => {
    return (
        <div>
            <MyHeader/>
            <Quote/>
            <ImageSlider/>
            <Home/>
            <MyFooter/>
        </div>
    )
}

export default MainContent