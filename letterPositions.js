
const letterPositions = function (sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];

    if (letter !== ' ') {
    
      if (!results[letter]) {
        results[letter] = [];

      }
      results[letter].push(i);
    }
  }
  return results;
}

console.log(letterPositions("hello"));


// TEST CODE

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

const assertArraysEqual = function (actualArr, expectedArr) {
  if (!eqArrays(actualArr, expectedArr)) {
    console.log(`🔴 Assertion failed: ${actualArr} !== ${expectedArr}`);
  } else {
    console.log(`🟢 Assertion Passed: ${actualArr} === ${expectedArr}`);
  }
};


const result1 = letterPositions("hello");

assertArraysEqual(result1["h"], [0]);
assertArraysEqual(result1["e"], [1]);
assertArraysEqual(result1["l"], [2, 3]);
assertArraysEqual(result1["o"], [4]);