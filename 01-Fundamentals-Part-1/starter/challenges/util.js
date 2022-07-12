export function bmiCalculator(markMass,markHeight,johnMass,johnHeight) {
  if (markMass / markHeight ** 2 > johnMass / johnHeight ** 2) {
    return { 
        firstName: "mark",
        bmiRatio: markMass / markHeight ** 2 
    };
  } else {
    return { 
        firstName: "john",
        bmiRatio: johnMass / johnHeight ** 2 
    };
  }
}
