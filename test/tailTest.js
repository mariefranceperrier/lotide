const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const test = ["Hey"];
const testEle = tail(test);
const result = tail(words);

assertEqual(words.length, 3);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(testEle.length, 0);
assertEqual(tail([]).length, 0);