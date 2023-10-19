//clear display function
const clearDisplay = function () {
  document.querySelector(".calc-display-main").textContent = "";
  displayValue = "";
  init();
};

// Step 1: Initialization
// Initialize calculator state variables: firstValue, secondValue, currentOperator, and isSecondValueExpected.
let firstValue = "0";
let secondValue = "";
let currentOperator = "";
let isSecondValueExpected = false;
let displayValue = "";
let result;

const init = function () {
  firstValue = "0";
  secondValue = "";
  currentOperator = "";
  isSecondValueExpected = false;
  displayValue = "";
  result = 0;
};

// Step 2: Update Display
// Create a function to update what's displayed on the calculator's screen.
const updateDisplay = function (x) {
  document.querySelector(".calc-display-main").textContent = x;
};

// Step 3: Manage operator State
// Create a function to manage operator and input state with calculator buttons.
const getOperatorValue = function (x) {
  if (x === "+" || x === "-" || x === "*" || x === "/") {
    currentOperator = x;
  }
};

// Step 4: Calculate Result
// Create a function to calculate and display the result.
const calculateResult = function (x) {
  if (x === "+") {
    return Number(firstValue) + Number(secondValue);
  } else if (x === "-") {
    return Number(firstValue) - Number(secondValue);
  } else if (x === "*") {
    return Number(firstValue) * Number(secondValue);
  } else if (x === "/") {
    return Number(firstValue) / Number(secondValue);
  }
};

// Step 5: Event Listeners
// Set up event listeners for calculator buttons to handle user input.
const userInput = document.querySelector(".calculator-wrapper");

userInput.addEventListener("click", (e) => {
  //clear button event
  if (e.target.classList.contains("func-btn-clr")) {
    console.log("clr was pressed");
    clearDisplay();
  }

  //number key pressed
  else if (e.target.classList.contains("num-btn")) {
    console.log("num btn was pressed");
    displayValue += e.target.value;
    updateDisplay(displayValue);
  }

  //operator key pressed
  else if (e.target.classList.contains("op-btn")) {
    console.log("operator was pressed", e.target.value);
    getOperatorValue(e.target.value);
    if (!isSecondValueExpected) {
      firstValue = displayValue;
      displayValue = "";
      isSecondValueExpected = true;
    } else {
      secondValue = displayValue;
      displayValue = "";
      result = calculateResult(currentOperator);
      console.log(result);
      init();
    }
  }

  //equal key is pressed
  else if (e.target.classList.contains("equal-btn")) {
    if (!isSecondValueExpected) {
      firstValue = displayValue;
      displayValue = "";
      isSecondValueExpected = true;
    } else {
      secondValue = displayValue;
      displayValue = "";
      result = calculateResult(currentOperator);
      console.log(result);
      init();
    }
  }
});
