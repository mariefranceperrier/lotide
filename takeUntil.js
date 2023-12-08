const takeUntil = function (array, callback) {
  
  let result = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
}

module.exports = takeUntil;