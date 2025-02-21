
import DATASET from '/Users/ramon/Documents/DocsandMisc/github/projects/TravelByBaking/localworking/allRecipesData.json' assert { type: 'json' };
/* var fs = require('fs');
let DATASET    = JSON.parse(fs.readFileSync('/Users/ramon/Documents/DocsandMisc/github/projects/TravelByBaking/localworking/allRecipesData.json','utf-8'))  */
const KEYS = Object.keys(DATASET)
 
      KEYS.map((key)=> (
       /*  console.log(DATASET[key]['ThumbNails']) */
        console.log(DATASET[key]['ThumbNails'].map( thumbnail => console.log(thumbnail) ))
      )) 
console.log(`Recipe ${DATASET['almond-cookies']['ThumbNails'].length}`)
console.log(DATASET['almond-cookies']['Categories'])
      