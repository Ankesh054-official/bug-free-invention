console.log("Assignments");

// DATA TYPES AND VALUES AND VARIABLES ASIGNMENTS

/*let country = "INDIA";
let continent = "ASIA";
let population = 1406236081;
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);*/
/*
// LET, CONST AND VAR ASSIGNMENTS
const country = "INDIA";
const continent = "ASIA";
const isIsland = false;

let population = 14;
let language;

language = "HINDI";

// isIsland = true; // Error: Uncaught TypeError: Assignment to constant variable.

// Operators
// const half_Of_Population = population/2;
// const population_Of_Finland = 60;
const average_Country_Population = 33;
// const description = country + " is in " + continent + ", and its " + population + " million people speak " + language + ".";
// population++;
// console.log((population > population_Of_Finland)?"Yes, We do have more population then finland.": "No, We don't have more population then finland.");
// console.log((population > average_Country_Population)? "No, We don't have less people then average country population.":"Yes, We do have less people then average country population.");
// console.log(description);


// const descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;

// console.log(descriptionNew);

// TAKING DECISION IF...ELSE...

if(population > average_Country_Population){
    console.log(`${country}'s population is above average.`);
}else{
    console.log(`${country}'s population is ${average_Country_Population - population} million below average.`);
}


// Type Conversion and Coercion
console.log('9' - '5');//4
console.log('19' - '13' + '17');//617
console.log('19' - '13' + 17);//23
console.log('123' < 57);//false
console.log(5 + 6 + '4' + 9 - 4 - 2);//1143

// Equality Operators: == vs. ===:

const numNeighbourCountry = Number(prompt('How many neighbour countries do your countries have ?'));

if(numNeighbourCountry === 1){
    console.log('Only 1 border.');
}else if(numNeighbourCountry > 1){
    console.log(`${numNeighbourCountry} border.`);
}else{
    console.log('No border.');
}

// Logical Operators:
const language = "spanish";
const populationOfCountry = 560;
const isIsland = false;

if (language === "english" && populationOfCountry < 50 && !isIsland) {
  console.log(
    "This country matches Sarah's criteria for leving here, As this is not an Island english speaking people and population is not more then 50 million."
  );
} else if (language === "english" && populationOfCountry < 50 && isIsland) {
  console.log(
    "This country doesn't matches Sarah's criteria for leaving here, Just because this is an Island."
  );
} else if (language === "english" && !isIsland && populationOfCountry >= 50) {
  console.log(
    "This country doesn't matches Sarah's criteria for leaving here, Just because this is a country of more then 50 million population."
  );
} else if (!isIsland && populationOfCountry < 50 && language != "english") {
  console.log(
    "This country dosn't matches Sarah's criteria for leaving here, Just because this country doesn't speak English language."
  );
} else {
  console.log(
    `You should choose some another county, Because this country doesn't match Sarah's criteria for leaving here. It is ${isIsland?'an':'not an'} Island, ${language === 'english'? 'English': 'Not a English'} speaking country and Population of the country is ${populationOfCountry < 50? 'less': 'not less'} then 50 million.`
  );
}


// Switch statement 
// 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'

const language = 'hindi';

switch(language){
  case 'mandarin':
  case 'chinese':
    console.log('MOST number of native speakers!');
    break;

  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;

  case 'english':
    console.log('3rd place');
    break;

  case 'hindi':
    console.log('Number 4');
    break;

  case 'arabic':
    console.log('5th most spoken language');
    break;

  default:
    console.log('Great language too :D');
    break;
}

//TERNARY OPERATOR:

const countriesPopulation = 33;

const myCountryPopulation = 13;

console.log(`Portugal's population is ${countriesPopulation > myCountryPopulation? 'below':'above'} average`);
*/