const middle = function(arr) {
  
  if (arr.length <= 2) {
    return [];
  }
  
  if (arr.length % 2 !== 0) {
    const middleIndex = Math.floor(arr.length / 2);
    return [arr[middleIndex]];

  } else {
    const middleIndex1 = (arr.length / 2) - 1;
    const middleIndex2 = arr.length / 2;
    return [arr[middleIndex1], arr[middleIndex2]];
  }
};


module.exports = middle; 