function add(num1,num2) {

  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}


function operate(num1, operator, num2) {
if (operator === "+") {
  return add(num1, num2);
} else if (operator === "-") {
  return subtract(num1, num2);
} else if (operator === "/") {
  return divide(num1, num2)
} else if (operator === "*") {
  return multiply(num1, num2);
}
}



const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const text = document.querySelector("#text");
const clear = document.querySelector("#clear");

text.style.overflow = "auto";

clear.addEventListener("click", (e) => {
  text.textContent = "";
})

zero.addEventListener("click", (e) => {
  if (text.textContent === "0") {
    text.textContent = 0
} else {
  text.textContent += 0;
}
});

one.addEventListener("click", (e) => {

  if (text.textContent === "0") {
      text.textContent = 1
  } else {
    text.textContent += 1;
  }
});

two.addEventListener("click", (e) => {

  if (text.textContent === "0") {
      text.textContent = 2
  } else {
    text.textContent += 2;
  }
});

three.addEventListener("click", (e) => {

  if (text.textContent === "0") {
      text.textContent = 3;
  } else {
    text.textContent += 3;
  }
});

four.addEventListener("click", (e) => {

  if (text.textContent === "0") {
      text.textContent = 4;
  } else {
    text.textContent += 4;
  }
});

five.addEventListener("click", (e) => {

  if (text.textContent === "0") {
      text.textContent = 5;
  } else {
    text.textContent += 5;
  }
});

six.addEventListener("click", (e) => {

  if (text.textContent === "0") {
      text.textContent = 6;
  } else {
    text.textContent += 6;
  }
});

seven.addEventListener("click", (e) => {

  if (text.textContent === "0") {
      text.textContent = 7;
  } else {
    text.textContent += 7;
  }
});

eight.addEventListener("click", (e) => {

  if (text.textContent === "0") {
      text.textContent = 8;
  } else {
    text.textContent += 8;
  }
});

nine.addEventListener("click", (e) => {

  if (text.textContent === "0") {
      text.textContent = 9;
  } else {
    text.textContent += 9;
  }
});


const division = document.querySelector("#division");

division.addEventListener("click", (e) => {
operate();
})