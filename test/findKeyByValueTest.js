const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

describe("#findKeyByValue", () => {
  it("returns 'drama' as the value of key property 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });
  it("returns undefined as the value of key property 'That '70s Show'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});