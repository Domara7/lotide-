const countLetters = (phrase) => {
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
module.exports = countLetters;