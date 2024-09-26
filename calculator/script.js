// Get the calculator display element
let calcDisplay = document.getElementById('calcDisplay');

// Function to append a value to the display
function appendToDisplay(value) {
  calcDisplay.value += value;
}

// Function to clear the entire display
function clearDisplay() {
  calcDisplay.value = '';
}

// Function to delete the last character from the display
function deleteLast() {
  calcDisplay.value = calcDisplay.value.slice(0, -1);
}

// Function to calculate and display the result
function calculateResult() {
  try {
    // Evaluate the expression inside the display
    calcDisplay.value = eval(calcDisplay.value);
  } catch (error) {
    // If there's an error (like a malformed expression), reset the display
    calcDisplay.value = 'Error';
    setTimeout(() => {
      calcDisplay.value = '';
    }, 1000);
  }
}
