const assert = require('chai').assert;
const tail = require('../tail');
const words = ['Yo Yo', 'Lighthouse', 'Labs'];
const str = ['Hey'];


describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
  it("returns [] for ['Hey']", () => {
    assert.deepEqual(tail(str), []);
  });
  it("makes sure the original array is not altered by the tail function", () => {
    tail(words);
    assert.strictEqual(words.length, 3)
  });
});