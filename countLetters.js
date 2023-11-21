const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion failed: ${actual} !== ${expected}`);
  }
};

// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
// 


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