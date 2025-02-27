
/*import DATASET from '/Users/ramon/Documents/DocsandMisc/github/projects/TravelByBaking/localworking/allRecipesData.json' assert { type: 'json' };*/
import { readFileSync } from 'fs';
const DATASET  = JSON.parse(readFileSync('/Users/ramon/Documents/DocsandMisc/github/projects/TravelByBaking/localworking/allRecipesData.json','utf-8')) 
//KEYS is an Array containing all the Recipes keys
const KEYS = Object.keys(DATASET)
const imagesList=[]
// manualObj is a the featuredRecipes template 
//const manualObj = {"recipeKey":{"images":["image1","image2"],"Link":"url"}}

console.log(`We have ${KEYS.length} Recipes`)
// Finding the latest Recipe appended to the .json file
const lastRecipe=KEYS[KEYS.length-1]
console.log(`The latest recipe is ${lastRecipe}`)
//Extracting the Recipe's Thumnail out of the Array embeded in the .json file and creating a separate one
DATASET[lastRecipe]['ThumbNails'].map( thumbnail => imagesList.push(thumbnail))
const featuredRecipes = {[lastRecipe]:{"images":imagesList,"Link":DATASET[lastRecipe]['Link']}}

/* console.log(`Creating feature Recipes as an <${typeof featuredRecipes}>`)
console.log(`Images List with ${imagesList.length} elements = ${imagesList}`) */

const objEntries = Object.entries(featuredRecipes)
console.log(`Object = ${objEntries}`) 
for (const [prop,val]  of Object.entries(featuredRecipes)){
    console.log(`Prop ${prop} and Value ${val}`)}

 console.log(`URL = ${manualObj["recipeKey"]["Link"]}`)
 console.log(`Images = ${manualObj["recipeKey"]["images"]}`)
 console.log(`${featuredRecipes[lastRecipe]["images"]}`)
 console.log(`${featuredRecipes[lastRecipe]["Link"]}`)
 /*       KEYS.map((key)=> (
       console.log(DATASET[key]['ThumbNails']) 
        console.log(DATASET[key]['ThumbNails'].map( thumbnail => console.log(thumbnail) ))
        
      )) 
console.log(`Recipe ${DATASET['almond-cookies']['ThumbNails'].length}`)
console.log(DATASET['almond-cookies']['Categories']) 

KEYS.map((key)=> (

 /*      DATASET[key]['ThumbNails'].map( thumbnail => imagesList.push(thumbnail) ) 
           
        DATASET[key]['Categories'].map(cat => catList.add(cat)) 
       
     ))*/
/* console.log(`imageList Type ${typeof(imagesList)}`)
console.log(`imageList content ${imagesList}`) 
console.log(`Categogies = ${catList}`)
for (const item of catList.keys()){
      console.log(item)}*/
