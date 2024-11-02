// function calculate() {
//     var result = Math.floor(Math.random() * 100) + 1; // Generate a random incorrect result
//     document.getElementById("result").value = result;
//   }
  
//   function clearResult() {
//     document.getElementById("result").value = "";
//   }
  
function appendToResult(value) {
    document.getElementById("result").value += value;
  }
  
  function calculate() {
    var result = Math.floor(Math.random() * 100) + 1; // Generate a random incorrect result
    document.getElementById("result").value = result;
  }
  
  function clearResult() {
    document.getElementById("result").value = "";
  }

function calculate() {
    var expression = document.getElementById("result").value;
    var result;

    try {
        // Evaluate the expression
        result = eval(expression);

        // Introduce an error with 10% chance
        if (Math.random() < 0.1) {
            // Generate a random multiplier (either 0 or 1)
            var multiplier = Math.floor(Math.random() * 2);
            // If multiplier is 0, subtract a random number between 1 and 10 from the result
            // If multiplier is 1, add a random number between 1 and 10 to the result
            result += (multiplier === 0 ? -1 : 1) * (Math.floor(Math.random() * 10) + 1);
        }
    } catch (error) {
        result = "Error";
    }

    document.getElementById("result").value = result;
}
