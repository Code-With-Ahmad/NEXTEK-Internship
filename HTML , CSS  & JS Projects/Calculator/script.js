let display = document.getElementById("display");

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  display.value += operator;
}

function calculate() {
  try {
    display.value = eval(display.value); // Use eval carefully!
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1); // Remove last character
}
