const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertEqual;