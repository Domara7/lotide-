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


function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}
console.log(flatten([[1, 2, 3], [4, 5]]));