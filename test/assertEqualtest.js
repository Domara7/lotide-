// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }

// };


// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("bob", "bob");

// module.exports = assertEqual;

const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns true if the arrays are equal", () => {
    assert.deepEqual(assertEqual([1, 2, 3] === [1, 2, 3]), true);
  });
});

