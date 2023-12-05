const eqArrays = require('./eqArrays');

const assertArraysEqual = function (actualArr, expectedArr) {
  if (!eqArrays(actualArr, expectedArr)) {
    console.log(`🔴 Assertion failed: ${actualArr} !== ${expectedArr}`);
  } else {
    console.log(`🟢 Assertion Passed: ${actualArr} === ${expectedArr}`);
  }
};


module.exports = assertArraysEqual;