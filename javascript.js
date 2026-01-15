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
const clear = document.querySelector("#clear");
const decimal = document.querySelector("#decimal");
const backspace = document.querySelector("#backspace");

let num1 = '';
let num2 = '';
let num = '';

clear.addEventListener("click", (e) => {
  text.textContent = "";
  num1 = '';
  num2 = '';
  operator = '';
});
backspace.addEventListener("click", (e) => {
  if (operator === '') {
  let a = num1.split('');;
  a.pop();
  a = a.join('');
  num1 = a;
  text.textContent = num1;
  } 

  if (operator === '*' || operator === '+' || operator === '/' || operator === '-') {
    let a = num2.split('');;
    a.pop();
    a = a.join('');
    num2 = a;
    text.textContent = num2;
  }
})
decimal.addEventListener("click", (e) => {
  //The two if statements below let the decimal only be applied once
  if (num1.includes(".") === true && operator === '') {
    decimal.textContent += '';
  } else if (num2.includes(".") === true && operator !== '') {
    decimal.textContent += '';
  } else {
    ifStatement(decimal.textContent);
  }
})

function ifStatement(num) {
  if (operator === '') {
    if (text.textContent === "0") {
      text.textContent = num;
      num1 = num;
  } else {
    text.textContent += num;
    num1 += num;

  }
  } else if (operator === '*' || operator === '+' || operator === '/' || operator === '-') {
    if (text.textContent === "0") {
      text.textContent = num;
      num2 = num;
  } else {
    text.textContent += num;
    num2 += num;
  }
}
if (operator != '' && num1 !== '' && num2 !== '') {
  text.textContent = num2;
 //This if statement clears the first variable from the display once a operator and the first number for the second variblae are clicked
}
if (operator === '' && num1 !== '' && num2 === '' && num !== '') {
  text.textContent = num1;
}
if (operator !== '' && num1 === '' && num2 !== '' && num !== '') {
  text.textContent = num2;
}
if (num1 !== '' && operator === '' && num2 !== '') {
  text.textContent = num;
}
}
  
//operator === '' && num1 === '' && num2 === '' && num != ''
//operator !== '' && num1 === '' && num2 === '' && num !== ''
function decimalFunc(string) {
  if (string.includes(".") === true) {
      decimal.textContent += '';
  }
  }  
  
  zero.addEventListener("click", (e) => {
    ifStatement(zero.textContent);
  });
  one.addEventListener("click", (e) => {
    ifStatement(one.textContent);
  });
  two.addEventListener("click", (e) => {
    ifStatement(two.textContent);
  });
  three.addEventListener("click", (e) => {
    ifStatement(three.textContent);
  });
  four.addEventListener("click", (e) => {
    ifStatement(four.textContent);
  });
  five.addEventListener("click", (e) => {
    ifStatement(five.textContent);
  });
  six.addEventListener("click", (e) => {
    ifStatement(six.textContent);
  });
  seven.addEventListener("click", (e) => {
    ifStatement(seven.textContent);
  });
  eight.addEventListener("click", (e) => {
    ifStatement(eight.textContent);
  });
  nine.addEventListener("click", (e) => {
    ifStatement(nine.textContent);
  });
  
const division = document.querySelector("#division");
const addition = document.querySelector("#addition")
const mulitplication = document.querySelector("#multiply");
const subtraction = document.querySelector("#subtract");
const equal = document.querySelector("#equal");
let operator = "";

division.addEventListener("click", (e) => {
  operator = "/";
  console.log(operator);
});
addition.addEventListener("click", (e) => {
  operator = "+";
  console.log(operator);
});
mulitplication.addEventListener("click", (e) => {
  operator = "*";
  console.log(operator);
});  
subtraction.addEventListener("click", (e) => {
  operator = "-";
  console.log(operator);
});
equal.addEventListener("click", (e) => {
  if (num1 !== '' && num2 !== '') {
      num = operate(+num1, operator, +num2).toString();
      text.textContent = num.toString();
      num1 = '';
      num2 = '';
      operator = '';
    } else if (num !== '' && operator !== '') {
      num = operate(+num, operator, +num2).toString();
      text.textContent = num.toString();
      num1 = '';
      num2 = '';
      operator = '';
    }
    if (num === Infinity) {
      text.textContent = "NaN";
      num = '0';
    }
    if (num.includes('.') === true) {
      num = +num;
      num.toFixed(14);
      text.textContent = num.toFixed(2); //Rounds decimal to prevent overflow
    }
  });  

let a = undefined;
const body = document.querySelector("body");
body.addEventListener("keydown", (event) => {
console.log(`key=${event.key},code=${event.code}`);
//Use switch
if (event.key === '0') {
  ifStatement(zero.textContent);
} else if (event.key === '1') {
  ifStatement(one.textContent);
} else if (event.key === '2') {
  ifStatement(two.textContent);
} else if (event.key === '3') {
  ifStatement(three.textContent);
} else if (event.key === '4') {
  ifStatement(four.textContent);
} else if (event.key === '5') {
  ifStatement(five.textContent);
} else if (event.key === '6') {
  ifStatement(six.textContent);
} else if (event.key === '7') {
  ifStatement(seven.textContent);
} else if (event.key === '8') {
  ifStatement(eight.textContent);
} else if (event.key === '9') {
  ifStatement(nine.textContent);
} else if (event.key === '/') {
  operator = "/";
} else if (event.key === '/') {
  operator = "/";
} else if (event.key === '-') {
  operator = "-";
} else if (event.key === '+') {
  operator = "+";
} else if (event.key === '*' || event.key === 'x' ) {
  operator = "*";
} else if (event.key === '=' || event.key === 'Enter') {
  if (num1 !== '' && num2 !== '') {
    num = operate(+num1, operator, +num2).toString();
    text.textContent = num.toString();
    num1 = '';
    num2 = '';
    operator = '';
  } else if (num !== '' && operator !== '') {
    num = operate(+num, operator, +num2).toString();
    text.textContent = num.toString();
    num1 = '';
    num2 = '';
    operator = '';
  }
  if (num === Infinity) {
    text.textContent = "NaN";
    num = '0';
  }
  if (num.includes('.') === true) {
    num = +num;
    num.toFixed(2);
    text.textContent = num.toFixed(2); //Rounds decimal to prevent overflow
}
} else if (event.key === 'Backspace') {
  if (operator === '') {
    let a = num1.split('');
    a.pop();
    a = a.join('');
    num1 = a;
    text.textContent = num1;
    } 
  
    if (operator === '*' || operator === '+' || operator === '/' || operator === '-') {
      let a = num2.split('');;
      a.pop();
      a = a.join('');
      num2 = a;
      text.textContent = num2;
    }
} else if (event.key === '.') {
  if (num1.includes(".") === true && operator === '') {
    decimal.textContent += '';
  } else if (num2.includes(".") === true && operator !== '') {
    decimal.textContent += '';
  } else {
    ifStatement(decimal.textContent);
  }
} else if (event.key === 'Escape') {
  text.textContent = "";
  num1 = '';
  num2 = '';
  operator = '';
}
});

