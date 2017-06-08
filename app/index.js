'use strict';
module.exports = {
  words: (str) => {
    let strArray = str.split(" ");
    let jsonObj = {};
    let jsonObjLength = Object.keys(jsonObj).length;
    
    for ( let i=0; i<strArray.length; i++) {
      for (let j=0; j<=jsonObjLength; j++) {
        if (strArray[i]  in jsonObj) {
          jsonObj[strArray[i]] += 1;
        }
        else {
          jsonObj[strArray[i]] = 1;
        }
      }  
    }
          
    return jsonObj;
  }
}  