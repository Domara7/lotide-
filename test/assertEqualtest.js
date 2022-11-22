const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns true if the arrays are equal", () => {
    assert.deepEqual(assertEqual([1, 2, 3], [1, 2, 3], true));
  });
});

