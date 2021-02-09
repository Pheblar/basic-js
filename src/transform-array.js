module.exports = function transform(arr) {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
           if (arr[i] === '--double-next'    && 
               arr[i+1] !== undefined) {
                  stack.push(arr[i+1]);
    } else if (arr[i] === '--double-prev'    &&
               arr[i-1] !== undefined        &&
               arr[i-2] !== '--discard-next') {
                  stack.push(arr[i-1]);
    } else if (arr[i] === '--discard-next'   &&
               arr[i+1] !== undefined) {
                  i++;
    } else if (arr[i] === '--discard-prev'   &&
               arr[i-1] !== undefined        &&
               arr[i-2] !== '--discard-next') {
                  stack.pop();
    } else if (arr[i] !== '--double-next'    &&
               arr[i] !== '--discard-next'   &&
               arr[i] !== '--discard-prev'   &&
               arr[i] !== '--double-prev' ) {
                 stack.push(arr[i]);
               }
  }
  return stack;
}
