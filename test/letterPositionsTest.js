const assert = require('chai').assert;
const letterPositions = require('../letterPositions');


const result1 = letterPositions("hello");

describe("#letterPositionsTest", () => {
  it("returns index [0] for position of letter ['h']", () => {
    assert.deepEqual(result1['h'], [0]);
  });
  it("returns index [2, 3] for position of letter ['l']", () => {
    assert.deepEqual(result1['l'], [2, 3]);
  });
  it("returns index [4] for position of letter ['o']", () => {
    assert.deepEqual(result1['o'], [4]);
  });
});
