const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("makes sure the original array is not altered by the middle function", () => {
    const words = ['hello', 'world', 'lighthouse'];
    middle(words);
    assert.strictEqual(words.length, 3);
  });

});