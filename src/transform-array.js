module.exports = function transform(arr) {
  let arrNew = arr;
  let stack = [];
  for (let i = 0; i < arrNew.length; i++) {
    if (arrNew[i] === '--double-next') {
      if (i = arrNew.length - 1) {
        arrNew.splice(i, 1);
      } else {
        stack.push(arrNew[i + 1], arrNew[i]);
      }
    } else if (arrNew[i] === '--double-prev') {
      if (i === 0) {
        arrNew.splice(i, 1);
      } else {
      stack.push(arrNew[i - 1], arrNew[i]);
      }
    } else if (arrNew[i] === '--discard-next') {
      if (i === arrNew.length - 1) {
        arrNew.splice(i, 1);
      } else {
      arrNew.splice(i + 1, 1);
      }
    } else if (arrNew[i] === '--discard-prev') {
      if (i === 0) {
        arrNew.splice(i, 1);
      } else {
      arrNew.splice(i - 1, 1);
      }
    }
  }
  return arrNew;
};
