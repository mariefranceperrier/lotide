const assert = require('chai').assert;
const tail = require('../tail');
const words = ['Yo Yo', 'Lighthouse', 'Labs'];


describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });

  it("returns 2 for the length of words", () => {
    assert.deepEqual(tail(words).length, 2)
  });
});