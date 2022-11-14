const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let name in itemsToCount) {
    if (itemsToCount[name]) {
      let counter = countInArray(allItems, name);
      if (counter > 0) {
        result[name] = countInArray(allItems, name);
      }
      
    }
  }
  return result;
};
const countInArray = function(arr, item) {
  let count = 0;
  for (let x of arr) {
    if (x === item) {
      count++;
    }
  }

  return count;
};
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];




// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
module.exports = countOnly