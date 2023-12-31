const assert = require('chai').assert;
const findKey = require('../findKey');


const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)


describe("#findKey", () => {
  it("returns 'noma' of the first key property of x.stars === 2", () => {
    assert.strictEqual(result, "noma");
  });
});