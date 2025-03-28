
import Recipes from '/Users/ramon/Documents/DocsandMisc/github/projects/TravelByBaking/localworking/allRecipesData.json'
import Card from './Card'
import { useState } from 'react'




const handleSearch = (e) => {
alert(SearchQuery)
e.preventDefault()
setSearchQuery("cake")
}


const Home = () => {

    const[SearchQuery,setSearchQuery]= useState("");


    /* {  return(
        <div>
          {Object.keys(Recipes).map(key =>
             <p>{Recipes[key]['Title']}</p>)}
        </div>
      )
        }
            <Card Recipe={{Title:"Recipe one"}}/>
            <Card Recipe={{Title:"Recipe Two"}}/>
            <Card Recipe={{Title:"Recipe Three"}}/>
     */

        { return (
        
        <div className='Home'> 

            <h1 className="luciluci text-3xl ">Recipes</h1>
            <form onSubmit={handleSearch} className='search-form w-max'>
                <input type="text"
                placeholder='Filter recipes...'
                className='search-input'
                value={SearchQuery}
                onChange={(e)=> setSearchQuery(e.target.value)}
            />

            <button type='Submit' className='search-btn'>
                Search 
            </button>

            </form>

        
            {Object.keys(Recipes).map(key =>
            Recipes[key]['Title'].toLowerCase().includes(SearchQuery.toLocaleLowerCase()) &&
            <Card Recipe={Recipes[key]} key={Recipes[key]['RecipeCodeName']}/>
            )}
          
        </div>

        )

        }

}

export default Home