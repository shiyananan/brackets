module.exports = function check(str, bracketsConfig) {
  let brackets = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    let pair = bracketsConfig[i].join('');
    brackets.push(pair);
    };

  let newStr = str;

  while (newStr === str) {
    for (let j = 0; j < brackets.length; j++) {
      let thePair = brackets[j];
      newStr = newStr.replace(thePair, '');
    }
    if (newStr != str) {
      str = newStr;
    } else {
      return newStr.length === 0;
    }
  }

};
