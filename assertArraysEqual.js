const assertArraysEqual = function (ar1, ar2) {
  if (ar1 === ar2) {
    console.log(` TRUE: Array 1 is eqaul to Array 2`);
  } else {
    console.log(` FALSE: Array 1 is not eqaul to Array 2`);
  }

}

module.exports = assertArraysEqual