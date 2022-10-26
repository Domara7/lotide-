const assertArraysEqual = function (ar1, ar2) {
  if (ar1 === ar2) {
     console.log(` TRUE: Array 1 is eqaul to Array 2`);
  }else {
    console.log(` FALSE: Array 1 is not eqaul to Array 2`);
  }

}

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}


const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1)