function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

let num1;
let num2;
let operator;

/* Takes two numbers and operator and calls appropriate function */ 
function operate(operator,num1,num2) {
    if(operator === "+"){
        return add(num1,num2);
    }
    if(operator === "-"){
        return subtract(num1,num2);
    }
    if(operator === "*"){
        return multiply(num1,num2);
    }
    if(operator === "/"){
        return divide(num1,num2);
    }
    else{
        return "ERROR";
    }
}