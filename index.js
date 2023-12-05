const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');

const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertArraysEqual = require('./assertArraysEqual');


module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  countLetters: countLetters,
  countOnly: countOnly,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without,

  eqObjects: eqObjects,
  eqArrays: eqArrays,

  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  assertArraysEqual: assertArraysEqual
};