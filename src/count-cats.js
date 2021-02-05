module.exports = function countCats(matrix) {
  const catsArr = [];
   if (!Array.isArray(matrix) || matrix.length === 0) {
     return [];
   } else {
    for (i = 0; i < matrix.length; i++) {
      for (j = matrix[i].length-1; j >=0; j--) {
        if (matrix[i][j] === '^^') {
          catsArr.push(matrix[i][j]);
        }
      }
    }
   }
   return catsArr.length;
}
