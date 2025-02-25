
/*import DATASET from '/Users/ramon/Documents/DocsandMisc/github/projects/TravelByBaking/localworking/allRecipesData.json' assert { type: 'json' };*/
import { readFileSync } from 'fs';
let DATASET    = JSON.parse(readFileSync('/Users/ramon/Documents/DocsandMisc/github/projects/TravelByBaking/localworking/allRecipesData.json','utf-8')) 
const KEYS = Object.keys(DATASET)
const imagesList=[]
const catList = new Set()
 
/*       KEYS.map((key)=> (
       console.log(DATASET[key]['ThumbNails']) 
        console.log(DATASET[key]['ThumbNails'].map( thumbnail => console.log(thumbnail) ))
        
      )) 
console.log(`Recipe ${DATASET['almond-cookies']['ThumbNails'].length}`)
console.log(DATASET['almond-cookies']['Categories']) */

KEYS.map((key)=> (

 /*      DATASET[key]['ThumbNails'].map( thumbnail => imagesList.push(thumbnail) ) */
           
        DATASET[key]['Categories'].map(cat => catList.add(cat)) 
       
     ))
/* console.log(`imageList Type ${typeof(imagesList)}`)
console.log(`imageList content ${imagesList}`) */
console.log(`Categogies = ${catList}`)
for (const item of catList.keys()){
      console.log(item)}
