const assertEqual = require('./assertEqual');

const head = require('./head');
const tail = require('./tail');

const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const without = require('./without');
const flatten = require('./flatten');
const middle = require('./middle');

const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');


const takeUntil = require('./takeUntil');
const findKey = require('./findKey');


module.exports = {
  assertEqual: assertEqual,
  
  head: head,
  tail: tail,
  
  eqArrays: eqArrays,
  assertArraysEqual: assertArraysEqual,
  without: without,
  flatten: flatten,
  middle: middle,
  
  countOnly: countOnly,
  countLetters: countLetters,
  letterPositions: letterPositions,
  findKeyByValue: findKeyByValue,
  eqObjects: eqObjects,
  assertObjectsEqual: assertObjectsEqual,
  
  takeUntil: takeUntil,
  findKey: findKey

};