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
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // => false

