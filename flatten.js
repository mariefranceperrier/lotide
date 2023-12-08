const eqArrays = require('./eqArrays');

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


console.log(flatten([1, 2, [3, 4], 5, [6]]));


module.exports = flatten;