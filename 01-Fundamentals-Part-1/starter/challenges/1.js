let markHigherBMI;
const markMass = 41.5;
const markHeight = 1.70;
const johnMass = 85;
const johnHeight = 1.76;

if((markMass/markHeight ** 2) > (johnMass/johnHeight ** 2)){
    markHigherBMI = true;
}else{
    markHigherBMI = false;
}

// #1 true
// #2 false


console.log(markHigherBMI);