'use strict'
/*
const calcAverage = (score)=>{
    let scores = (score.split(','));
    let avarageScore = 0;
    scores.forEach(eachScore => {
        avarageScore += parseInt(eachScore);
    });
    return (avarageScore/3);
};

function checkWinner(avgDolhins, avgKoalas){
    if(calcAverage(avgDolhins) >= 2*calcAverage(avgKoalas)){
        console.log(`Dolhins win (${calcAverage(avgDolhins)} vs. ${calcAverage(avgKoalas)})`);
    }else{
        console.log(`Koalas win (${calcAverage(avgKoalas)} vs. ${calcAverage(avgDolhins)})`);
    }
}

checkWinner('44, 23, 71','65, 54, 49');
checkWinner('85, 54, 41','23, 34, 27');


function calcTip(bill){
    if(Boolean(Number(bill))){
        if(50 <= bill && 300 >= bill ){
            return bill*(15/100);
        }else{
            return bill*(20/100);
        }
    }else{
        console.error('NAN: Passed argument should be a number.');
    }
}

// console.log(calcTip('50'));

// const bills1 = [125, 555, 44];
// const tips1 = [calcTip(bills1[0]), calcTip(bills1[1]), calcTip(bills1[2])];
// const total1 = [];
// total1.push(bills1[0]+tips1[0]);
// total1.push(bills1[1]+tips1[1]);
// total1.push(bills1[2]+tips1[2]);
// console.log(bills1, tips1, total1);

const mark = {
    fullName:"Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI:function (){
        this.bmi = (this.mass/(this.height*this.height));
        return this.bmi;
    }
};


const John = {
    fullName:"John Smith",
    mass: 92,
    height: 1.95,
    calcBMI:function (){
        this.bmi = (this.mass/(this.height*this.height));
        return this.bmi;
    }
}

// console.log(`${parseInt(John.calcBMI())<parseInt(mark.calcBMI())?`Mark's BMI (${parseInt(mark.calcBMI())})`:`John's BMI (${parseInt(John.calcBMI())})`} is higher than ${parseInt(John.calcBMI())>parseInt(mark.calcBMI())?`mark's (${parseInt(mark.calcBMI())})`:`john's (${parseInt(John.calcBMI())})`})!`);


function calcAverage(arr){
    let sum = 0;
    for(let INDEX = 0; INDEX <= arr.length-1; INDEX++){
        sum += arr[INDEX];
    }
    return  (sum/arr.length);
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for(let index = 0; index <= bills.length-1; index++){
    let tip = calcTip(bills[index]);
    tips.push(tip);
    totals.push(tip+bills[index]);
}

console.log(calcAverage(totals))*/