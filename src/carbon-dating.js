const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" || 
      Number(sampleActivity) <= 0        ||
      sampleActivity > 15) {return false}
  const k = 0.693 / HALF_LIFE_PERIOD
  const yearCounter = Math.ceil((Math.log(MODERN_ACTIVITY / Number(sampleActivity))) / k)
  if (yearCounter > 0) {
    return yearCounter
  } else {return false};
};
