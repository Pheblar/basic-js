module.exports = function repeater(str, options) {
  let newStr = '';
    if (!options.repeatTimes) {
      return str + options.addition;
  } 
    if (typeof options.addition === 'undefined') {
      options.addition = '';
  } 
    if (typeof options.separator === 'undefined') {
      options.separator = '+';
  } else { newStr = (str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1)
    + options.addition + options.separator).repeat(options.repeatTimes)}
  return newStr.substring(0, newStr.length - (options.separator).length);
};


//formula is:
//newStr = (str + (addition + addiotionSeparator)*(additionRepeatTimes - 1) + addition + separator)*(repeatTimes);
  