// function calculateFactorial() {
//     var numberInput = document.getElementById("numberInput").value;
//     var resultParagraph = document.getElementById("result");

//     // Clear previous result
//     resultParagraph.innerHTML = "";

//     // Convert input to a number
//     var number = parseInt(numberInput);

//     // Check if the input is a valid positive integer
//     if (isNaN(number) || number < 0 || number % 1 !== 0) {
//         resultParagraph.innerHTML = "Please enter a valid non-negative integer.";
//         return;
//     }

//     // Calculate factorial
//     var factorial = 1;
//     for (var i = 2; i <= number; i++) {
//         factorial *= i;
//     }

//     // Display result
//     resultParagraph.innerHTML = "Factorial of " + number + " is " + factorial;
// }

// function clearInput() {
//     document.getElementById("numberInput").value = "";
// }

function appendToInput(value) {
    document.getElementById("numberInput").value += value;
}

function clearInput() {
    document.getElementById("numberInput").value = "";
}

function calculateFactorial() {
    var numberInput = document.getElementById("numberInput").value;
    var resultParagraph = document.getElementById("result");

    // Clear previous result
    resultParagraph.innerHTML = "";

    // Convert input to a number
    var number = parseFloat(numberInput);

    // Check if the input is a valid number
    if (isNaN(number)) {
        resultParagraph.innerHTML = "Invalid input.";
        return;
    }

    // Check if the input is a negative number
    if (number < 0) {
        resultParagraph.innerHTML = "Factorial is not defined for negative numbers.";
        return;
    }

    // Calculate factorial
    var factorial = 1;
    for (var i = 2; i <= number; i++) {
        factorial *= i;
    }

    // Display result
    resultParagraph.innerHTML = "Factorial of " + number + " is " + factorial;
}
