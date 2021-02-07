module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    for (let i of arr){
      if (Array.isArray(i)){
        depth = depth + this.calculateDepth(i);
      }
    }
    return depth+1;
  }
}
