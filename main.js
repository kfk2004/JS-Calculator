let operator = '';
let previousValue = '';
let currentValue = '';
let isCalculated = false;

document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector("#clear-btn");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))


    equal.addEventListener("click", function() {
        if (!isCalculated) {
            calculate(); 
            isCalculated = true; 

            previousScreen.textContent = " ";
            currentScreen.textContent = currentValue;
        }
    });

    clear.addEventListener("click", function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        currentScreen.textContent = currentValue;
        previousScreen.textContent = currentValue;
        isCalculated = false;
    })

    decimal.addEventListener("click", function() {
        if (!currentValue.includes('.')) {
            currentValue += '.';
            currentScreen.textContent = currentValue;
        }
    });
    
})

function handleNumber(num){
    if(currentValue.length <= 5){
    currentValue += num;}
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    } else if(operator === "-"){
        previousValue -= currentValue;
    } else if(operator === "x"){
        previousValue *= currentValue;
    } else{
        previousValue/=currentValue;
    }


    // if(currentValue.includes('.')){
    // currentValue = currentValue.toFixed(5);
    // }

    console.log(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();

}