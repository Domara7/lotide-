const takeUntil = function (array, callback) {
  const final = [];

  for (let index of array) {

    if (callback(index) === true) {
      return final
    }
    else {
      final.push(index);
    }
  }
  return final

};

module.exports = takeUntil;