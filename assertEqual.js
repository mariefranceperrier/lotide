const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("🟢", "Assertion Passed:", actual, "===", expected);
  } else if (actual !== expected) {
    console.log("🔴", "Assertion failed:", actual, "!==", expected);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("ONE", "ONE");
assertEqual("HI", "BYE");
assertEqual(1, 111);