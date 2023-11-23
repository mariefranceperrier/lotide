// 1. Implement the function findKey which takes in an object and a callback. 
// 2. It should scan the object 
// 3. and return the first key for which the callback returns a truthy value.
// 4. If no key is found, then it should return undefined.

const findKey = function (object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
}

// TEST CODE

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion failed: ${actual} !== ${expected}`);
  }
};

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2) 

console.log(result);
assertEqual(result, "noma");