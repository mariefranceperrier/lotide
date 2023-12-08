const without = function (source, itemsToRemove) {
  const result = [];

  for (let i = 0; i < source.length; i++){
    const sourceElement = source[i];

    if (!itemsToRemove.includes(sourceElement)) {
      result.push(sourceElement);
    }
  }
  return result;
}


module.exports = without;