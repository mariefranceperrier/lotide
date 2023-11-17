// Test assertion functions

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

const assertArraysEqual = function(actualArr, expectedArr) {
  if (!eqArrays(actualArr, expectedArr)) {
    console.log(`🔴 Assertion failed: ${actualArr} !== ${expectedArr}`);
  } else {
    console.log(`🟢 Assertion Passed: ${actualArr} === ${expectedArr}`);
  }
};


// ACTUAL FUNCTION:
// 1. Implement middle which will take in an array 
// 2. and return the middle - most element(s) of the given array.



const middle = function(arr) {
  
  if (arr.length <= 2) {
    return [];
  }
  
  if (arr.length % 2 !== 0) {
    const middleIndex = Math.floor(arr.length / 2);
    return [arr[middleIndex]];

  } else {
    const middleIndex1 = (arr.length / 2) - 1;
    const middleIndex2 = arr.length / 2;
    return [arr[middleIndex1], arr[middleIndex2]];
  }
};


// TEST CODE

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);