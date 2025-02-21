
import DATASET from '/Users/ramon/Documents/DocsandMisc/github/projects/TravelByBaking/localworking/allRecipesData.json' assert { type: 'json' };
/* var fs = require('fs');
let DATASET    = JSON.parse(fs.readFileSync('/Users/ramon/Documents/DocsandMisc/github/projects/TravelByBaking/localworking/allRecipesData.json','utf-8'))  */
const KEYS = Object.keys(DATASET)
const imagesList=[]
 
      KEYS.map((key)=> (
       /*  console.log(DATASET[key]['ThumbNails']) */
        console.log(DATASET[key]['ThumbNails'].map( thumbnail => console.log(thumbnail) ))
        
      )) 
console.log(`Recipe ${DATASET['almond-cookies']['ThumbNails'].length}`)
console.log(DATASET['almond-cookies']['Categories'])

KEYS.map((key)=> (

      DATASET[key]['ThumbNails'].map( thumbnail => imagesList.push(thumbnail) )
       
     ))
console.log(`imageList Type ${typeof(imagesList)}`)
console.log(`imageList content ${imagesList}`)
