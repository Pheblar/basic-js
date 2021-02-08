module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const TIME = turnsSpeed / 3600;
  let turns = Math.pow(2, disksNumber) - 1;
  let seconds = Math.floor(turns / TIME);
  let output = {
    turns,
    seconds,
  }
  return output;
};
