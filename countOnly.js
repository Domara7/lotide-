const countOnly = function (allItems, itemsToCount) {
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
const countInArray = function (arr, item) {
  let count = 0;
  for (let x of arr) {
    if (x === item) {
      count++;
    }
  }

  return count;
};

module.exports = countOnly;