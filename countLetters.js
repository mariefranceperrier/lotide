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


module.exports = countLetters;