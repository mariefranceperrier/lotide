const assert = require('chai').assert;
const countLetters = require('../countLetters');


console.log(countLetters("lighthouse in the house"));

const testSentence = "lighthouse in the house";
const result1 = countLetters(testSentence);

describe("#countLetters", () => {
  it("returns 1 for ['l']", () => {
    assert.strictEqual((result1["l"]), 1);
  });
  it("returns 2 for ['i']", () => {
    assert.strictEqual((result1["i"]), 2);
  });
  it("returns 4 for ['h']", () => {
    assert.strictEqual((result1["h"]), 4);
  });
  it("returns 3 for ['e']", () => {
    assert.strictEqual((result1["e"]), 3);
  });
});