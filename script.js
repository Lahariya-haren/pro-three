let display = document.getElementById('display');

// Append character to the display
function appendToDisplay(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Calculate the expression
function calculate() {
  try {
    display.value = eval(display.value); // Use eval to calculate the expression
  } catch (e) {
    display.value = 'Error';
  }
}
