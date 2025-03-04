
//import { readFileSync , writeFile } from 'fs';
//import { isArrayBuffer } from 'util/types';
/* const DATASET  = JSON.parse(readFileSync('./recipesbyCategory.json','utf-8')) 
const MyConfig = JSON.parse(readFileSync('./Configuration.json','utf-8')) */
import DATASET from './recipesbyCategory.json' assert { type: 'json' }
import MyConfig from './Configuration.json' assert { type: 'json' }
const DEBUG=MyConfig['DEBUG']
const featuredCategories = MyConfig['featuredCategories']
//
//This functions accepts 2 params
// numRecipes = Maximum numbers of Recipes by Category to be extracted
// fromCategories = It is an Array of categogires 
//                  if this param is not present or is not an array the categories will be taken from
//                  the "Configuration.json" file
//                  To pass categories correclty they need to be are passed as a list
//                  ["cate1","cate2","cate3"]
//                  getRecipesbyCategories(1,["snacks","desserts"])
//                  or 
//                  list=["cakes","pastries"]
//                  getRecipesbyCategories(1,list)


var selectedRecipes = []

function getRecipesbyCategories(numRecipes,fromCategories) {
    Array.isArray(fromCategories) ? console.log("Array") :fromCategories=featuredCategories
    if (DEBUG) console.log(`Getting (${numRecipes}) recipe from this categories  (${fromCategories})`)
    for (var cateIdx = 0; cateIdx < fromCategories.length ; cateIdx++){
        if (DEBUG) console.log(`Getting category ${cateIdx} =>  ${fromCategories[cateIdx]} Containing ${DATASET[fromCategories[cateIdx]].length} Recipes`)
        var Recipe = getRecipe(fromCategories[cateIdx],DATASET[fromCategories[cateIdx]].length)
    }
    if (DEBUG) {console.log(`RETURN :::::: ${numRecipes} ${JSON.stringify(selectedRecipes, null, 4)}`)}
    return JSON.stringify(selectedRecipes, null, 4)
}

function getRecipe(category,numberofRecipesinit) {
//get an Integer number from min 0 and Max the (all in it )
var choosenOne=Math.floor(Math.random() * numberofRecipesinit)
    if (DEBUG) console.log(`Max = (${numberofRecipesinit}) Choosen one is ${choosenOne} `)
    if (DEBUG) console.log(`Recipe chosen is ${DATASET[category][choosenOne]['Title']}`)
    var Title=DATASET[category][choosenOne]['Title']
    var Link =DATASET[category][choosenOne]['Link']
    var ThumbNail=DATASET[category][choosenOne]['ThumbNails'][0]
    selectedRecipes.push({'Title':Title,'Link':Link,'ThumbNail':ThumbNail,'Category':category})
}

//getRecipesbyCategories(1,featuredCategories)
//getRecipesbyCategories(1,["snacks","desserts"])
//getRecipesbyCategories(1)

export default getRecipesbyCategories
