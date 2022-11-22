# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @domara7/lotide`

**Require it:**

`const _ = require('@domara7/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEquals(...)`: The asserArraysEqual function will check to see if two arrays are equal.

* `assertEqual(...)`: The assertEqual function will test to see if an array, string or number are equal.

* `assertObjectsEqual(...)`:The assertObjectsEqual function will test if two objects are equal.

* `countLetters(...)`: The countLetters function will count the amount of letters used in a string.

* `countOnly(...)`: The countOnly function will count specific items passed into the argument.

* `eqArrays(...)`: The eqArrays function tests if two arrays are equal.        

* `eqObjects(...)`: The eqObjects function tests to see if two object keys are equal.

* `findKey(...)`:The findKey function returns true if a key is found in the object thats passed into the argument.

* `findKeyByvalue(...)`: The findKeyByValue function returns true if a specific key is found in the object.

* `flatten(...)`: The flatten function returns a single array when given multiple arrays.

* `head(...)`: The head function returns the first item in an array but only as an element itself.

* `letterPosition(...)`: The letterPosition function returns the position of a letter in a string.

* `map(...)`: The map function will return a new array based on the results of the callback function.      

* `middle(...)`: The middle function will return the middle element of an array.

* `tail(...)`: The tail function will return the entire array without the first element.

* `takeUntil(...)`: The takeUntil function which will keep collecting items from a provided array until the
callback provided returns a truthy value.

* `without(...)`: The without function will return a given array, removing unwanted items placed in the argument.

Instruction
