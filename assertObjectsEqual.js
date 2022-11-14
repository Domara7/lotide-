const assertObjectsEqual = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length){
    return "🛑🛑🛑 Assertion Failed: [object Object] !== [object Object]"
  }
  for(let key in object1){
    if(object1[key] === object2[key]){
      return "✅✅✅ Assertion Passed: [object Object] === [object Object]"
    }
    return false
  }
};
module.exports = assertObjectsEqual

