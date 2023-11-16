const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion failed: ${actual} !== ${expected}`);
  }
};



const tail = function(arr) {
  return arr.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
assertEqual(words.length, 3);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");