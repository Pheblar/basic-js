module.exports = function repeater(str, options) {
  let newStr = (str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1)
  + options.addition + options.separator).repeat(options.repeatTimes);
  return newStr.substring(0, newStr.length - (options.separator).length);
};

//newStr = (str + (addition + addiotionSeparator).repeat(additionRepeatTimes) + separator).repeat(repeatTimes);
  