const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const sampleActNum = Number(sampleActivity); 
    if (isNaN(sampleActNum)                 || 
        sampleActNum <= 0                   || 
        sampleActNum > 15                   || 
        typeof sampleActivity !== String) {
      return false;
    } else {
      const yearsCounter = (Math.log((MODERN_ACTIVITY / sampleActNum) / (0.639 / HALF_LIFE_PERIOD)));
      return yearsCounter;
    }
};
