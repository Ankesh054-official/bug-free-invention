
function bmiCalculator(markMass, markHeight, johnMass, johnHeight) {
  if (markMass / markHeight ** 2 > johnMass / johnHeight ** 2) {
    return {
      firstName: "mark",
      bmiRatio: markMass / markHeight ** 2,
      otherPersonFirstName: "john",
      otherPersonBmi: johnMass / johnHeight ** 2
    };
  } else {
    return {
      firstName: "john",
      bmiRatio: johnMass / johnHeight ** 2,
      otherPersonFirstName: "mark",
      otherPersonBmi: markMass / markHeight ** 2
    };
  }
}

const markMass = 41.5;
const markHeight = 1.7;
const johnMass = 85;
const johnHeight = 1.76;

const bmiResult = bmiCalculator(markMass, markHeight, johnMass, johnHeight);

console.log(`${bmiResult.firstName}'s BMI(${parseFloat(bmiResult.bmiRatio).toFixed(2)}) is higher than ${bmiResult.otherPersonFirstName}'s BMI(${parseFloat(bmiResult.otherPersonBmi).toFixed(2)})!`);
