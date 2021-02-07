module.exports = function transform(arr) {
  let arrNew = arr;
  let stack = [];
  Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
  };
  for (let i = 0; i < arrNew.length; i++) {
    if (arrNew[i] === '--double-next') {
      if (i === arrNew.length - 1) {
        arrNew.splice(i, 1);
      } else {
        
      }
    } else if (arrNew[i] === '--double-prev') {
      if (i === 0) {
        arrNew.splice(i, 1);
      } else {
        
      }
    } else if (arrNew[i] === '--discard-next') {
      if (i === arrNew.length - 1) {
        arrNew.splice(i, 1);
      } else {
        
      }
    } else if (arrNew[i] === '--discard-prev') {
      if (i === 0) {
        arrNew.splice(i, 1);
      } else {
       
      }
    }
  }
  return arrNew;
};
