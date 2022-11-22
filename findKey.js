const findKey = function (object, callBack) {
  for (const key in object) {
    if (callBack(object[key]))
      return (key)
  }
  return undefined;
};


module.exports = findKey;


