const middle = function (middleOfElement) {
  let array = [];
  let midNum = Math.floor(middleOfElement.length / 2);
  if (middleOfElement.length % 2 !== 0) {
    array.push(middleOfElement[midNum]);
  }
  if (middleOfElement.length % 2 === 0) {
    array.push(middleOfElement[midNum - 1], middleOfElement[midNum]);

  }
  return array;
};



module.exports = middle;