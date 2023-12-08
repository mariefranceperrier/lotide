const assert = require('chai').assert;
const without = require('../without');

const words = ["hello", "world", "lighthouse"];

describe("#without", () => {
  it("returns [2, 3] when itemsToRemove = [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it('returns ["1", "2"] when itemsToRemove = [1, 2, "3"]', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it('returns ["hello", "world"]  when itemsToRemove = ["lighthouse"]', () => {
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });
});

