const findKeyByValue = function(objectValue, value) {
  for (const key in objectValue) {
    if (objectValue[key] === value) {
      return (key);
    }
  }
  return undefined;
};



module.exports = findKeyByValue