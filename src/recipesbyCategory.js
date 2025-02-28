
import { readFileSync , writeFile } from 'fs';
import { isArrayBuffer } from 'util/types';
const DATASET  = JSON.parse(readFileSync('/Users/ramon/Documents/DocsandMisc/github/projects/TravelByBaking/localworking/allRecipesData.json','utf-8')) 
const MyConfig = JSON.parse(readFileSync('./Configuration.json','utf-8'))
const DEBUG=MyConfig['DEBUG']
// Creates a .json file out of the recipes data 
// This file organizes creating a view of the Recipes by Categories.
//
//KEYS is an Array containing all the Recipes keys
const KEYS = Object.keys(DATASET)
//
// Creates a .json file with recipes by categories 
//{
//    "Category0":[
//                "RecipeCodeName":"",
//                "Title":"",
//                "ThumbNails":[],
//                "Link":""
//                ]
//}

console.log(`We have ${KEYS.length} Recipes`)

var catList = {}

for (var r = 0; r < KEYS.length; r++) {
    var RecipeCodeName = KEYS[r]
    var Title = DATASET[KEYS[r]]['Title']
    var Link = DATASET[KEYS[r]]['Link']
    var ThumbNails = DATASET[KEYS[r]]['ThumbNails']
    var Categories = DATASET[KEYS[r]]['Categories']
    console.log(`Recipe Code Name => ${RecipeCodeName}`)
    if (DEBUG) 
        {console.log(`Title => ${Title}`)
        console.log(`Link => ${Link}`)
        console.log(`ThumbNails => ${ThumbNails}`)
        console.log(`Categories ${Categories.length}:`)}
    for (let cateIdx = 0; cateIdx < Categories.length ; cateIdx++) {
        console.log(`Category ${cateIdx} => ${Categories[cateIdx]}`)
        var categoryVal=Categories[cateIdx]
/// Query first if catList[Categories][0] exist as a property
        if (catList[categoryVal] == undefined) {
            catList[categoryVal]=[]
        }
        catList[categoryVal].push({"Title":Title,"Link":Link,"ThumbNails":ThumbNails})
        if (DEBUG) {console.log(catList[categoryVal])}
    }
}


console.log(`catList is an ${typeof catList}`) 
const catListcat=Object.keys(catList)
console.log(`Length of catList = ${catListcat.length}`)

for (var r = 0 ; r < catListcat.length; r ++){
        console.log(catListcat[r])
}


var saveJson = JSON.stringify(catList, null, 4)

        writeFile('recipesbyCategory.json', saveJson, 'utf8', (err)=>{
            if(err){
                console.log(err)
            }
        })

