const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


// 1. Create a function flatten which will take in an array containing elements including nested arrays of elements, 
// 2. and return a "flattened" version of the array.
// 3. Our function will  only handle one level of nesting.

const flatten = function(arr) {
  const flattenedArr = [];

  for (const element of arr) {
    if (Array.isArray(element)) {
      for (const item of element) {
        flattenedArr.push(item);
      }
    } else {
      flattenedArr.push(element);
    }
  }
  return flattenedArr;
};


const assertArraysEqual = function(actualArr, expectedArr) {
  if (!eqArrays(actualArr, expectedArr)) {
    console.log(`🔴 Assertion failed: ${actualArr} !== ${expectedArr}`);
  } else {
    console.log(`🟢 Assertion Passed: ${actualArr} === ${expectedArr}`);
  }
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);