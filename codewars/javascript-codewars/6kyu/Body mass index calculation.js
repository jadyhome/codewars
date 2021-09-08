////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/55f810474dc34c5a25000016/train/javascript

// For long period JavaScript warriors trained a lot in coding kata. 
// But to find way warrior also need physical kata. 
// Some of warriors forgot about this fact and enemies can use this weakness, your clan is under threat. 
// You are chosen to fix this situation. Write a function to calculate Body mass index for each warrior.

// bmi = weight / (height*height)
// where weight is in kg and height is in meters

// Warriors know only their height (in centimetres) and weight (in kilogrames). 
// Your task is to return an object with fields

// value - calculated Body mass index, as a string, rounded to the first decimal.

// category - related category, as a string (from https://en.wikipedia.org/wiki/Body_mass_index ; see below). 
// Note: determine the category before rounding the BMI.

// Ex :
// calculateBmi(65,175)
// returns: {value: "21.2", category: "Normal (healthy weight)"}

// A constant DATA is preloaded for you. It contains the names of all the categories and their boundaries:
// from (kg) is inclusive.
// to (kg) is exclusive.

// const DATA = [
// //  from,  to,       category
//     [0,    15,       "Very severely underweight"],
//     [15,   16,       "Severely underweight"],
//     [16,   18.5,     "Underweight"],
//     [18.5, 25,       "Normal (healthy weight)"],
//     [25,   30,       "Overweight"],
//     [30,   35,       "Obese Class I (Moderately obese)"],
//     [35,   40,       "Obese Class II (Severely obese)"],
//     [40,   45,       "Obese Class III (Very severely obese)"],
//     [45,   50,       "Obese Class IV (Morbidly obese)"],
//     [50,   60,       "Obese Class V (Super obese)"],
//     [60,   Infinity, "Obese Class VI (Hyper obese)"],
// ];

// Hurry up, save your clan!
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function calculateBmi(weight, height) {
  // bmi = weight / (height * height)
  // meter = cm / 100.00
  let meter = height / 100.0;
  let bmi = (weight / (meter * meter)).toFixed(1);

  if (bmi >= 0 && bmi <= 15) {
    return { value: `${bmi}`, category: `${DATA[0][2]}` };
  }
  if (bmi >= 15 && bmi <= 16) {
    return { value: `${bmi}`, category: `${DATA[1][2]}` };
  }
  if (bmi >= 16 && bmi <= 18.5) {
    return { value: `${bmi}`, category: `${DATA[2][2]}` };
  }
  if (bmi >= 18.5 && bmi <= 25) {
    return { value: `${bmi}`, category: `${DATA[3][2]}` };
  }
  if (bmi >= 25 && bmi <= 30) {
    return { value: `${bmi}`, category: `${DATA[4][2]}` };
  }
  if (bmi >= 30 && bmi <= 35) {
    return { value: `${bmi}`, category: `${DATA[5][2]}` };
  }
  if (bmi >= 35 && bmi <= 40) {
    return { value: `${bmi}`, category: `${DATA[6][2]}` };
  }
  if (bmi >= 40 && bmi <= 45) {
    return { value: `${bmi}`, category: `${DATA[7][2]}` };
  }
  if (bmi >= 45 && bmi <= 50) {
    return { value: `${bmi}`, category: `${DATA[8][2]}` };
  }
  if (bmi >= 50 && bmi <= 60) {
    return { value: `${bmi}`, category: `${DATA[9][2]}` };
  }
  if (bmi >= 60 && bmi <= Infinity) {
    return { value: `${bmi}`, category: `${DATA[10][2]}` };
  }
}

/////// SOLUTION ///////
