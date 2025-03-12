
//import { readFileSync , writeFile } from 'fs';
//import { isArrayBuffer } from 'util/types';
/* const DATASET  = JSON.parse(readFileSync('./recipesbyCategory.json','utf-8')) 
const MyConfig = JSON.parse(readFileSync('./Configuration.json','utf-8')) */
import DATASET from './recipesbyCategory.json' assert { type: 'json' }
import MyConfig from './Configuration.json' assert { type: 'json' }
const DEBUG=MyConfig['DEBUG']
const featuredCategories = MyConfig['featuredCategories']
//
//This function accepts 2 params
// numRecipes = Maximum numbers of Recipes per Category to be extracted
// fromCategories = It is "ALWAYS" an Array containing the category or categories to be selected
//                  if this param is not present or is not an array the categories will be taken from
//                  the "Configuration.json" file
//                  To pass categories correclty they need to be passed as a list (Array)
//                  ["cate1","cate2","cate3"]
//                  getRecipesbyCategories(1,["snacks","desserts"])
//                  or 
//                  list=["cakes","pastries"]
//                  getRecipesbyCategories(1,list)
// as of 3.12.25
//                  supports:
//                  getRecipesbyCategories(3,list)
//  BELOW an example of json as of 3.12.25
//   
//  extracted from CLI 
//              node getRecipesbyCategory.js
//              with a call as getRecipesbyCategories(3,["savoury recipes"])
//
//[
//    {
//        "Title": "Bell peppers filled with meat and rice",
//        "Link": "https://travelbybaking.com/bell-peppers-filled-with-meat-and-rice/",
//        "ThumbNail": "Bell-peppers-filled-with-meat-and-rice.jpg",
//        "Category": "savoury recipes"
//    },
//    {
//        "Title": "Buttery and crumbly cheese cookies",
//        "Link": "https://travelbybaking.com/buttery-and-crumbly-cheese-cookies/",
//        "ThumbNail": "Buttery-and-crumbly-cheese-cookies.jpg",
//        "Category": "savoury recipes"
//    },
//    {
//        "Title": "Crispy and spicy chicken wings in the oven",
//        "Link": "https://travelbybaking.com/crispy-and-spicy-chicken-wings-in-the-oven/",
//        "ThumbNail": "crispy-and-spicy-chicken-wings-in-the-oven_tmbn_730_v01.jpg",
//        "Category": "savoury recipes"
//    }
//]
//
//


var selectedRecipes = []

function getRecipesbyCategories(numRecipes,fromCategories) {
    var my_length = fromCategories.length*numRecipes
    Array.isArray(fromCategories) ? null : fromCategories=featuredCategories
    if (DEBUG) console.log(`getRecipesbyCategories received an ${typeof fromCategories} is it an Array ? ${Array.isArray(fromCategories)}`)
    if (DEBUG) console.log(`Getting (${numRecipes}) recipe/s from category or categories  (${fromCategories})`)
    for (var cateIdx = 0; cateIdx < fromCategories.length ; cateIdx++){
        if (DEBUG) console.log(`Getting category ${cateIdx} =>  ${fromCategories[cateIdx]} Containing ${DATASET[fromCategories[cateIdx]].length} Recipes`)
        if (numRecipes < 2) {var Recipe = getrandomRecipe(fromCategories[cateIdx],DATASET[fromCategories[cateIdx]].length)}
        else{var Recipe = getRecipes(fromCategories[cateIdx],numRecipes)}
    }
    if (DEBUG) {console.log(`getRecipesbyCategories ver 2 march 25 RETURNS :::::: ${numRecipes} asked vs ${selectedRecipes.length} in array ${JSON.stringify(selectedRecipes, null, 4)}`)}
    return JSON.stringify(selectedRecipes.slice(-my_length), null, 4)
}

function getrandomRecipe(category,numberofRecipesinit) {
//get an Integer number from min 0 and Max the (all in it )
var choosenOne=Math.floor(Math.random() * numberofRecipesinit)
    if (DEBUG) console.log(`Max Random= (${numberofRecipesinit}) Choosen one is ${choosenOne} `)
    if (DEBUG) console.log(`Recipe Random chosen is ${DATASET[category][choosenOne]['Title']}`)
    var RecipeCodeName=DATASET[category][choosenOne]['RecipeCodeName']    
    var Title=DATASET[category][choosenOne]['Title']
    var Link =DATASET[category][choosenOne]['Link']
    var ThumbNail=DATASET[category][choosenOne]['ThumbNails'][0]
    selectedRecipes.push({'RecipeCodeName':RecipeCodeName,'Title':Title,'Link':Link,'ThumbNail':ThumbNail,'Category':category})
}
function getRecipes(category,numberofRecipesinit) {
    if (numberofRecipesinit > DATASET[category].length ){numberofRecipesinit = DATASET[category].length}
    for (let i=0;i < numberofRecipesinit; i++) {
        if (DEBUG) console.log(`Max to fetch= (${numberofRecipesinit}) `)
        if (DEBUG) console.log(`Fetching (${i}) Recipe ${DATASET[category][i]['Title']}`)
        var RecipeCodeName=DATASET[category][i]['RecipeCodeName']    
        var Title=DATASET[category][i]['Title']
        var Link =DATASET[category][i]['Link']
        var ThumbNail=DATASET[category][i]['ThumbNails'][0]
        selectedRecipes.push({'RecipeCodeName':RecipeCodeName,'Title':Title,'Link':Link,'ThumbNail':ThumbNail,'Category':category})
    }
}

// Battery of tests to run from console
// #node getRecipesbyCategory.js 
//getRecipesbyCategories(1,featuredCategories)
//getRecipesbyCategories(3,featuredCategories)
//getRecipesbyCategories(1,["snacks","desserts"])
//getRecipesbyCategories(3,["savoury recipes"])
//getRecipesbyCategories(150,["savoury recipes"])
//getRecipesbyCategories(1)

export default getRecipesbyCategories
