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


const words = ["ground", "control", "to", "major", "tom"];

// 1st map scenario:
const map = function (array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const result1 = map(words, word => word[0]);
console.log(result1);
assertArraysEqual(result1, ['g', 'c', 't', 'm', 't']);


// 2nd scenario:
const result2 = [];
const test2 = words.map(function (word) {
  return result2.push(word[0])
});

console.log(result2);
assertArraysEqual(result2, ['g', 'c', 't', 'm', 't']);


// 3rd scenario:
const result3 = [];
const test3 = words.map(word => result3.push(word[0]));

console.log(result3);
assertArraysEqual(result3, ['g', 'c', 't', 'm', 't']);
