const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

const result2 = map(words, word => word.length);
console.log(result2);
assertArraysEqual(result2, [6, 7, 2, 5, 3]);


// 3rd scenario:

const result3 = map(words, word => word.slice(-1));

console.log(result3);
assertArraysEqual(result3, ["d", "l", "o", "r", "m"]);

module.exports = map;
