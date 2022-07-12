'use strict';
/*
function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million population and It's capital city is ${capitalCity}.`;
}

const indiaDescription = describeCountry('India', 10, 'Delhi');
const bangladeshDescription = describeCountry('Bangladesh', 5, 'Dhaka');
const canadaDescription = describeCountry('Canada', 8, 'Toronto');

console.log(indiaDescription);
console.log(bangladeshDescription);
console.log(canadaDescription);

function percentageOfWorld1(population){
    const worldPopulation = 7900;
    return ((population/worldPopulation)*100);
}

const indiaPopulation = percentageOfWorld1(7000);
const bangladeshPopulation = percentageOfWorld1(6000);
const canadaPopulation = percentageOfWorld1(5000);

console.log(indiaPopulation,' Indian Population');
console.log(bangladeshPopulation,' Bangladeshi Population');
console.log(canadaPopulation, 'canadian Population');

const percentageOfWorld2 = function (population){
    const worldPopulation = 7900;
    return ((population/worldPopulation)*100);
}

console.log(percentageOfWorld2(7000),' Indian Population');
console.log(percentageOfWorld2(6000),' Bangladeshi Population');
console.log(percentageOfWorld2(5000), 'canadian Population');

const percentageOfWorld3 = (country, population) => `${country} has ${((population/7900)*100)} % of world's population.`;


console.log(percentageOfWorld3('India ',7000));
console.log(percentageOfWorld3('Bangladesh ',6000));
console.log(percentageOfWorld3('Canadian ', 5000));

const percentageOfWorld1 = function (population){
    return ((population/7900)*100);
}

const describePopulation = (country, population) =>`${country} has ${population} million people, which is about ${percentageOfWorld1(population)} % of world.`;
console.log(describePopulation('India ',7000));
console.log(describePopulation('Bangladesh ',6000));
console.log(describePopulation('Canada ', 5000));

//DATA STRUCTURES


//ARRAY


function percentageOfWorld1(population){
    const worldPopulation = 7900;
    return ((population/worldPopulation)*100);
}
const populations = [50, 60, 70, 80];

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]) , percentageOfWorld1(populations[2]) , percentageOfWorld1(populations[populations.length-1])];

console.log(populations.length === 4? (populations.length,true): false);
console.log(percentages);


const neighbours = ['Pakistan', 'Bangladesh', 'Nepal'];

neighbours.push('Utopia');

// const popped = neighbours.pop();
// console.log(neighbours.includes('Germany')? 'A South Asian country :D': 'Probably not a South Asian country :D');

// const indexOfBangladesh = neighbours.indexOf('Bangladesh');
// neighbours[indexOfBangladesh] = 'Eastern Pakistan';

// console.log(neighbours);

const myCountry = {
    country:'INDIA',
    capital:'DELHI',
    language:'HINDI',
    population:25.9,
    neighbours:['Nepal', 'Bangladesh', 'Pakistan'],
    checkIsland: function(){
    this.isIsland = this.neighbours.length ?true:false
    },
    describe: function(){
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries
and a capital called ${this.capital}. It is also a ${this.checkIsland()}`;
    }
};

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// myCountry.population -= 2;
// myCountry['population'] += 2;
console.log(myCountry.describe());
console.log(myCountry);

for(let i = 1; i <= 50; i++){
    console.log(`Voter number ${i} is currently voting`);
}


function percentageOfWorld1(population){
    const worldPopulation = 7900;
    return ((population/worldPopulation)*100);
}

const populations = [50, 60, 70, 80];
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]) , percentageOfWorld1(populations[2]) , percentageOfWorld1(populations[populations.length-1])];
const populations2 = [];
for(let index = 0; index < populations.length; index++){
    if(percentageOfWorld1(populations[index]) === percentages[index]){
        populations2.push(percentageOfWorld1(populations[index]));
        continue;
    }else{
        console.log('solution is not ideal.');
        break;
    }
}

console.log(populations2);

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for(let index = 0; index < listOfNeighbours.length; index++){
    for(let index2 = (listOfNeighbours[index]).length-1; index2 >= 0; index2--){
        console.log(listOfNeighbours[index][index2]);
    }
}

function percentageOfWorld1(population){
    const worldPopulation = 7900;
    return ((population/worldPopulation)*100);
}

const populations = [50, 60, 70, 80];
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]) , percentageOfWorld1(populations[2]) , percentageOfWorld1(populations[populations.length-1])];
const populations2 = [];

let index = populations.length-1;

while(index >= 0){
    if(percentageOfWorld1(populations[index]) === percentages[index]){
        populations2.push(percentageOfWorld1(populations[index]));
        index--;
        continue;
    }else{
        console.log('solution is not ideal.');
        break;
    }
}

console.log(populations2);
*/