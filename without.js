const eqArrays = function(ar1, ar2){
  for (let i = 0; i < ar1.length; i++){
    if (ar1[i] === ar2[i]){
      return true;
     }
     if (ar1[i] !== ar2[i]){
      return false
     }
    }
  }

  const assertArraysEqual = function (ar1, ar2) {
      if (ar1 === ar2) {
         console.log(` TRUE: Array 1 is eqaul to Array 2`);
      }else {
        console.log(` FALSE: Array 1 is not eqaul to Array 2`);
      }
    
    }
    const without = function(source, itemsToremove){
      let newArray = []
      for(let index in source){
        if(!itemsToremove.includes(source[index])){
          newArray.push(source[index])
        }
      }
      return newArray
      
     }

     const words = ["hello", "world", "lighthouse"];
     without(words, ["lighthouse"]); // no need to capture return value for this test case
     // Make sure the original array was not altered by the without function
     assertArraysEqual(words, ["hello", "world", "lighthouse"]);




    //  console.log(without([1, 2, 3], [1])) // => [2, 3]
    //  console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

    module.exports = without
     