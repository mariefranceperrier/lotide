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

// 1. Implement without which will return a subset of a given array, removing unwanted elements.
// 2. This function should take in a source array and a itemsToRemove array.
// 3. It should return a new array with only those elements from source that are not present in the itemsToRemove array.


const without = function (source, itemsToRemove) {
  const result = [];

  for (let i = 0; i < source.length; i++){
    const sourceElement = source[i];

    if (!itemsToRemove.includes(sourceElement)) {
      result.push(sourceElement);
    }
  }
  return result;
}


const assertArraysEqual = function (actualArr, expectedArr) {
  if (!eqArrays(actualArr, expectedArr)) {
    console.log(`🔴 Assertion failed: ${actualArr} !== ${expectedArr}`);
  } else {
    console.log(`🟢 Assertion Passed: ${actualArr} === ${expectedArr}`);
  }
};


without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);