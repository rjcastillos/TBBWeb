import Recipes from '/Users/ramon/Documents/DocsandMisc/github/projects/TravelByBaking/localworking/allRecipesData.json'

const App = () =>{

 
return(
  <div>
    {Object.keys(Recipes).map(key =>
       <p>{key}: <strong>{Recipes[key]['Title']}</strong></p>)}
  </div>
)
}

export default App
