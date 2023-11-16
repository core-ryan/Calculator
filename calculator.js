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

// Indicates if an operator has been selected so only one can be used
let operatorSelected = false;

// Indicates if evaluate() was ran, resets calculator screen value upon click after eval
let evalTriggered = false;

// Adding event listener to react to when the button interface is clicked
buttonContainer.addEventListener("click", (event) => {
    // Stores bool in isButton variable to indicate if it was a button that was pressed
    // Will be false if space around buttons is pressed
    const isButton = event.target.nodeName === 'BUTTON';
    if(!isButton){
        // Exit function if not button
        return;
    }

    // Reset the display if current number was a result of previous operation
    if(evalTriggered){
        clearText();
        evalTriggered = false;
    }

    // Checks if operator button has been pressed
    if(event.target.innerHTML == "+" ||
    event.target.innerHTML == "-" ||
    event.target.innerHTML == "*" ||
    event.target.innerHTML == "/"){
        if(operatorSelected){
            // Exit function if operator has already been used
            return;
        }
        // First operator has been selected, set bool accordingly
        operatorSelected = true;
    }

    // If clear button was pressed call function to clear calculator screen
    if(event.target.innerHTML === "Clear"){
        clearText();
        // Exit function to avoid adding "Clear" to screen
        return;
    }

    // If user is ready to evaluate
    if(event.target.innerHTML == "="){
        if(operatorSelected){
            // call evaluation function
            evaluate(calcScreenText.innerHTML);
            // operation complete, another operator can be selected
            operatorSelected = false;
        }
        // If operator has not been selected, exit to avoid writing "=" to calculator screen
        return;
    }

    // alert(event.target.innerHTML);
    calcScreenText.innerHTML = calcScreenText.innerHTML + event.target.innerHTML;
});

function clearText(){
    calcScreenText.innerHTML = "";
}

function evaluate(rawString){
    // Ugly regex to take the operator from the rawstring and allow split() to keep the separator
    let functionParts = rawString.split(/(?=[+\-\*\/])|(?<=[+\-\*\/])/g);
    
    // call operate with results of the split() to get result and update text in calculator screen
    calcScreenText.innerHTML = operate(functionParts[1],Number(functionParts[0]),Number(functionParts[2]));

    evalTriggered = true;
}