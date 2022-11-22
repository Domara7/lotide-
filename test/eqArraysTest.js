// const assertEqual = require('../assertEqual');

// const eqArrays = function(ar1, ar2){
//   for (let i = 0; i < ar1.length; i++){
//     if (ar1[i] === ar2[i]){
//       return true;
//      }
//      if (ar1[i] !== ar2[i]){
//       return false
//      }
//     }
//   }


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3] === [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3]),[1, 2, 3]);
  });
});



