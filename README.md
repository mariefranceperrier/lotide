# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @marie_wuwei/lotide`

**Require it:**

`const _ = require('@marie_wuwei/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual()`: An assertion function which compares two values and prints out a colourful successful or failure message.
* `head()`: A function used for arrays that retrieves the first element from the array.
* `tail()`: A function that retrieves every element of an array except the head (first element) of the array.
* `eqArrays()`: A function which takes in two arrays and returns true or false, based on a perfect match.
* `assertArraysEqual()` : A function for asserting that two arrays are equal.
* `without()`: A function which will return a subset of a given array, removing unwanted elements.
* `flatten()`: A function which when given an array with other arrays inside, can flatten it into a single-level array.
* `middle()`: A function which takes in an array and return the middle-most element(s) of the given array.
* `countOnly()`: A function which takes in a collection of items and return counts for a specific subset of those items.
* `countLetters()`: A function which takes in a sentence (as a string) and then returns a count of each of the letters in that sentence.
* `letterPositions()`: A function which returns all the indices (zero-based positions) in the string where each character is found.
* `findKeyByValue()`: A function that searchs for a key on an object where its value matches a given value.
* `eqObjects()`: A function which takes in two objects and returns true or false, based on a perfect match.
* `assertObjectsEqual()`: A function for asserting that two objects are equal.
* `takeUntil()`: A function which will keep collecting items from a provided array until the callback provided returns a truthy value.
* `findKey()`: A function which takes in an object and a callback. It scans the object and return the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
* `map()`: A function which takes in two arguments (an array to map and a callback function) and returns a new array based on the results of the callback function.