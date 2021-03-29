module.exports = function repeater(str, options) {
  if (options.addition !== undefined) {
    options.addition = `${options.addition}`;
  }
  if (str !== undefined) {
    str = `${str}`;
  }
  if (!options.separator) {
    options.separator = '+';
  } else {
    options.separator;
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  } else {
    options.additionSeparator;
  } 
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  } else {
    options.repeatTimes;
   } 
  if (!options.additionRepeatTimes) { 
    options.additionRepeatTimes = 1;
  } else {
    options.additionRepeatTimes
  }
  let newStr = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    newStr.push(str);
    if (options.addition !== '') {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        newStr.push(options.addition);
        if (j !== options.additionRepeatTimes - 1) newStr.push(options.additionSeparator);
      };
    };
    if (i !== options.repeatTimes - 1) newStr.push(options.separator);  
  }
  return newStr.join('');
};


//formula is:
//newStr = (str + (addition + addiotionSeparator)*(additionRepeatTimes - 1) + addition + separator)*(repeatTimes);
  