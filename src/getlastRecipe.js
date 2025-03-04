import DATASET from '/Users/ramon/Documents/DocsandMisc/github/projects/TravelByBaking/localworking/allRecipesData.json' assert { type: 'json' };
import MyConfig from './Configuration.json' assert { type: 'json' }
const DEBUG=MyConfig['DEBUG']
const KEYS = Object.keys(DATASET)
const lastRecipe=KEYS[KEYS.length-1]

var selectedRecipes = []

function getlastRecipe() {
    var Title=DATASET[lastRecipe]['Title']
    var Link =DATASET[lastRecipe]['Link']
    var category =DATASET[lastRecipe]['Categories'][0]
    var ThumbNail=DATASET[lastRecipe]['ThumbNails'][0]
    selectedRecipes.push({'Title':Title,'Link':Link,'ThumbNail':ThumbNail,'Category':category})
    if (DEBUG) {console.log(`RETURNING Last Recipe:::::: ${JSON.stringify(selectedRecipes, null, 4)}`)}
    return JSON.stringify(selectedRecipes, null, 4)
}



export default getlastRecipe
