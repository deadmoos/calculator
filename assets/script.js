"use strict";

// Step 1: Initialization
// Initialize calculator state variables: firstValue, secondValue, currentOperator, and isSecondValueExpected.
let firstValue = "0";
let secondValue = "";
let previousOperator = "";
let currentOperator = "";
let isSecondValueExpected = false;
let subDisplayValue = "";
let mainDisplayValue = "";
let result = "";

const init = function () {
  //values to be initialised
  firstValue = "0";
  secondValue = "";
  previousOperator = "";
  currentOperator = "";
  isSecondValueExpected = false;
  subDisplayValue = "";
  mainDisplayValue = "";
  result = "";
};

//clear display function
const clearDisplayMain = function () {
  document.querySelector(".calc-display-main").textContent = "";
};

const clearDisplaySub = function () {
  document.querySelector(".calc-display-sub").textContent = "";
};

// Step 2: Update Display
// Create a function to update what's displayed on the calculator's screen.
const updateDisplayMain = function (x) {
  document.querySelector(".calc-display-main").textContent = x;
};

const updateDisplaySub = function (x) {
  document.querySelector(".calc-display-sub").textContent = x;
};

// Step 3: Manage operator State
// Create a function to manage operator and input state with calculator buttons.
// const getOperatorValue = function (x) {
//   if (x === "+" || x === "-" || x === "*" || x === "/") {
//     currentOperator = x;
//   }
// };

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
const userClickedAButton = document.querySelector(".calculator-wrapper");

userClickedAButton.addEventListener("click", (e) => {
  //clear button event
  if (e.target.classList.contains("func-btn-clr")) {
    console.log("clr was pressed");
    clearDisplayMain();
    clearDisplaySub();
    init();
  }

  //number key pressed
  else if (e.target.classList.contains("num-btn")) {
    console.log("num btn was pressed");
    mainDisplayValue += e.target.value;
    updateDisplayMain(mainDisplayValue);
  }

  //operator key pressed
  else if (e.target.classList.contains("op-btn")) {
    console.log("operator was pressed", e.target.value);
    //first operation - dont calculate anything - check if operator exists
    if (!previousOperator) {
      previousOperator = e.target.value;
      subDisplayValue = mainDisplayValue + previousOperator;
      firstValue = mainDisplayValue;
      mainDisplayValue = "";
      clearDisplayMain();
      updateDisplaySub(subDisplayValue);
    }
    //not first operation - calculate previous values - prev operator exists
    else {
      currentOperator = e.target.value;
      secondValue = mainDisplayValue;
      mainDisplayValue = "";
      updateDisplaySub(calculateResult(previousOperator) + currentOperator);
      firstValue = calculateResult(previousOperator);
      previousOperator = currentOperator;
      clearDisplayMain();
    }
  }

  //equal key is pressed
  else if (e.target.classList.contains("equal-btn")) {
    console.log("equal was pressed");
    secondValue = mainDisplayValue;
    updateDisplayMain(calculateResult(previousOperator));
    firstValue = calculateResult(previousOperator);
    secondValue = "";
    currentOperator = "";
    clearDisplaySub();
  }
});
