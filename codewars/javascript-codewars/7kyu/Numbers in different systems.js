////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/588bb1195eb601f5d400001f/train/javascript

// Translate number to the selected number system.
// If the number consists just of digits - return number, else - return string.

//   SysNums(5,2) // 101
//   SysNums(5,8) // 5
//   SysNums(250,2) // 11111010
//   SysNums(250,16) // "fa"
//   #####Hint: System can be 2, 8, 10, 16.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

const sysNums = (n, sys) => {
  let translatedNum = n.toString(sys);

  if (translatedNum.match(/[a-z]/gi)) {
    return translatedNum;
  }
  if (translatedNum.match(/[0-9]/g)) {
    return Number(translatedNum);
  }
};

/////// SOLUTION ///////
