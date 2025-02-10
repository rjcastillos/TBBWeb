
import Recipes from '/Users/ramon/Documents/DocsandMisc/github/projects/TravelByBaking/localworking/allRecipesData.json'
import Card from './Card'
const Home = () => {

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
        
        <div>   
            {Object.keys(Recipes).map(key =>

            <Card Recipe={Recipes[key]} key={Recipes[key]['RecipeCodeName']}/>
            
            )}
          
        </div>

        )

        }

}

export default Home