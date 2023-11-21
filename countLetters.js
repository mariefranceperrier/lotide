const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  const result = {};
  const cleanSentence = sentence.split(' ').join('');

    for (const letter of cleanSentence) {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
    }
  }
  return result;
}

console.log(countLetters("lighthouse in the house"));

const testSentence = "hi you";
const result1 = countLetters(testSentence);
assertEqual(result1["h"], 1);
assertEqual(result1["i"], 1);
assertEqual(result1["y"], 1);
assertEqual(result1["o"], 1);
assertEqual(result1["u"], 1);