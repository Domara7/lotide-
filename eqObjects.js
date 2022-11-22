const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length){
    return false
  }
  for(let key in object1){
    if(object1[key] === object2[key]){
      return true
    }
    return false
  }
};
module.exports = eqObjects
