const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = function (actualArr, expectedArr) {
  if (!eqArrays) {
    console.log(`🔴 Assertion failed: ${actualArr} !== ${expectedArr}`);
  } else {
    console.log(`🟢 Assertion Passed: ${actualArr} === ${expectedArr}`);
  }
};

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
