const without = function (source, itemsToremove) {
  let newArray = []
  for (let index in source) {
    if (!itemsToremove.includes(source[index])) {
      newArray.push(source[index])
    }
  }
  return newArray;

};

module.exports = without;
