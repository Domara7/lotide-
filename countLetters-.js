const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const letterCount = (phrase) => {
  let count = {};
  for (const letter of phrase) {
    if (letter in count) {
      count[letter] = count[letter] + 1;
    } else {
      count[letter] = 1;
    }
  }
  return count;
};
console.log(letterCount("hello how are you"))