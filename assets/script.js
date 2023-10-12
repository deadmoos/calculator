//loop through all the input buttons and get the textContent on click//assign these values to a variable
const inputValue = document.querySelector(".num-btn");

console.log(inputValue.value);

inputValue.addEventListener("click", function () {
  let outputValue = inputValue.value;
  document.querySelector(".calc-display").textContent += outputValue;
});

//get a operator value and display it

//write the functions of all operators

//clear the display

//= execute the math

//backspace functionality
