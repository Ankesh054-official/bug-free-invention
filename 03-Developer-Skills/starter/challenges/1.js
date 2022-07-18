// debugger;
function printForecast(arr){
    for(let index = 0; index <= arr.length-1; index++){
        console.log(`${arr[index]} in ${index+1} day.`);
    }
}

const temperatureArray = [12, 5, -5, 0, 4];

printForecast(temperatureArray);