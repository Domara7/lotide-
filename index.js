const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertObjectsEqual = require('./assertObjectsEqual')
const assertArraysEqual = require('./assertArraysEqual')
const flatten = require('./flatten')
const findKeyByValue = require('./findKeyByValue')
const findKey = require('./findKey')
const eqObjects = require('./eqObjects')
const eqArrays = require('./eqArrays')
const countOnly = require('./countOnly')
const assertEqual = require('./assertEqual')
const map = require('./map')
const letterPositions = require('./letterPositions')
const without = require('./without')
const takeUntil = require('./takeUntil')
const countLetters = require('./countLetters')


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertObjectsEqual: assertObjectsEqual,
  flatten: flatten,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  eqObjects: eqObjects,
  eqArrays: eqArrays,
  countOnly: countOnly,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  map: map,
  letterPositions: letterPositions,
  without: without,
  takeUntil: takeUntil,
  countLetters: countLetters
  };