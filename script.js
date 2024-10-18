
let currentInput = "0";


function updateScreen() {
    document.querySelector('.calculator-screen').value = currentInput;
}


function Click(value) {
    if (currentInput === "0") {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateScreen();
}


function Result() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = "Error";
    }
    updateScreen();
}


function clearScreen() {
    currentInput = "0";
    updateScreen();
}

updateScreen(); 

