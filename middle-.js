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

    const middle = function(middleOfElement) {
      let array = [];
      let midNum = Math.floor(middleOfElement.length / 2);
      if (middleOfElement.length % 2 !== 0) {
        array.push(middleOfElement[midNum]);
      }
      if (middleOfElement.length % 2 === 0) {
        array.push(middleOfElement[midNum - 1],middleOfElement[midNum]);
    
      }
      return array;
    };
    
  console.log(middle([1,2,3,4,5]));