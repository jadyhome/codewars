////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/570fd7ad34e6130455001835/train/javascript

// Zebulan has worked hard to write all his python code in strict compliance to PEP8 rules.
// In this kata, you are a mischievous hacker that has set out to sabotage all his good code.

// Your job is to take PEP8 compatible function names and convert them to camelCase. For example:

// zebulansNightmare('camel_case') == 'camelCase'
// zebulansNightmare('zebulans_nightmare') == 'zebulansNightmare'
// zebulansNightmare('get_string') == 'getString'
// zebulansNightmare('convert_to_uppercase') == 'convertToUppercase'
// zebulansNightmare('main') == 'main'
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function zebulansNightmare(functionName) {
  functionName = functionName.replace(/[_]/g, " ").split(" ");

  if (functionName.length === 1) {
    return functionName.toString();
  }

  let indexZero = functionName.slice(0, 1);
  let camelCase = functionName
    .slice(1)
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1));

  return indexZero.concat(camelCase).join("");
}

/////// SOLUTION ///////
