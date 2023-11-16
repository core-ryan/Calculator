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

// Retrieves the text element that acts as a display for the calculator
const calcScreenText = document.getElementById("text");
// Retrieves the grid-container that holds all button buttons
const buttonContainer = document.getElementById("wrapper");
// Adding event listener to react to when the button interface is clicked
buttonContainer.addEventListener("click", (event) => {
    // Stores bool in isButton variable to indicate if it was a button that was pressed
    // Will be false if space around buttons is pressed
    const isButton = event.target.nodeName === 'BUTTON';
    if(!isButton){
        // Exit function if not button
        return;
    }
    // alert(event.target.innerHTML);
    calcScreenText.innerHTML = event.target.innerHTML;
});