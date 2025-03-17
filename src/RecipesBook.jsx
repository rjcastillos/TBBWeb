import Home from './components/Home'
import ImageSlider from './components/ImageSlider'
import MyFooter from './components/MyFooter'
import Quote from './components/Quote'
import MyHeader from './components/MyHeader'
import RecipesContentList from './components/RecipesContentList'
import './styles/MyHeader.css'
import './styles/MyFooter.css'
import './styles/Home.css'
import './styles/Card.css'
const RecipesBook = () => {
    return (
        <div>
            <RecipesContentList/>
        </div>
    )
}

export default RecipesBook