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







/*
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
})
*/
/*
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
  operate(num1, operator, num2)
});
*/




/*
const text = document.querySelector("#text");
//Doesn't add to num1
//Next use = to add num1 and num2
//Set numbers to a function
function zeroFunc() {
  zero.addEventListener("click", (e) => {

  if (operator === '') {
    if (text.textContent === "0") {
      text.textContent = 0
      num1 += 0;
  } else {
    text.textContent += 0;
    num1 += 0;
  }
} else if (operator === '*' || operator === '+' || operator === '/' || operator === '-') {
  if (text.textContent === "0") {
    text.textContent = 0
    num2 += 1;
} else {
  text.textContent += 0;
  num2 += 1;
}
}

//Set operator = '' when = is clicked
})
};















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


let num1 = '';
let num2 = '';
let num = 0;

decimal.addEventListener("click", (e) => {
  if (operator === '') {
    if (text.textContent === "0") {
      text.textContent = '.'
      num1 = '.';
  } else if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
   } else {
    text.textContent += '.';
    num1 += '.';
  }
  } 
  if (operator === '*' || operator === '+' || operator === '/' || operator === '-') {
    if (text.textContent === "0") {
      text.textContent = '.'
      num2 = '.';
  } else if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
   } else {
    text.textContent += '.';
    num2 += '.';
  }
  } 
  if (operator != '' && num1 !== '' && num2 !== '') {
    text.textContent = num2;
}
})

clear.addEventListener("click", (e) => {
  text.textContent = "";
  num1 = '';
  num2 = '';
  operator = '';
});

zero.addEventListener("click", (e) => {
  if (operator === '') {
    if (text.textContent === "0") {
      text.textContent = '0'
      num1 = '0';
  } else if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
  } else {
    text.textContent += '0';
    num1 += '0';
  }
  } else if (operator === '*' || operator === '+' || operator === '/' || operator === '-') {
    if (text.textContent === "0") {
      text.textContent = '0'
      num2 = '0';
  } else if (text.textContent === "N/A") {
    text.textContent += 'N/A';
  }else {
    text.textContent += '0';
    num2 += '0';
  }
  } 
  if (operator != '' && num1 !== '' && num2 !== '') {
    text.textContent = num2;
}
});
one.addEventListener("click", (e) => {
  if (operator === '') {
    if (text.textContent === "0") {
      text.textContent = '1';
      num1 = '1';
  } else if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
   } else {
    text.textContent += '1';
    num1 += '1';
  }
  } else if (operator === '*' || operator === '+' || operator === '/' || operator === '-') {
    if (text.textContent === "0") {
      text.textContent = '1'
      num2 = '1';
  } else if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
   } else {
    text.textContent += '1';
    num2 += '1';
  }
  } 
  if (operator != '' && num1 !== '' && num2 !== '') {
    text.textContent = num2;
}
});
two.addEventListener("click", (e) => {
  if (operator === '') {
    if (text.textContent === "0") {
      text.textContent = '2';
      num1 = '2';
  } else if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
   } else {
    text.textContent += '2';
    num1 += '2';
  }
  } else if (operator === '*' || operator === '+' || operator === '/' || operator === '-') {
    if (text.textContent === "0") {
      text.textContent = '2'
      num2 = '2';
  } else if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
   } else {
    text.textContent += '2';
    num2 += '2';
  }
  } 
  if (operator != '' && num1 !== '' && num2 !== '') {
    text.textContent = num2;
}
});
three.addEventListener("click", (e) => {
  if (operator === '') {
    if (text.textContent === "0") {
      text.textContent = '3';
      num1 = '3';
  } else if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
   } else {
    text.textContent += '3';
    num1 += '3';
  }
  } else if (operator === '*' || operator === '+' || operator === '/' || operator === '-') {
    if (text.textContent === "0") {
      text.textContent = '3'
      num2 = '3';
  } else if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
   } else {
    text.textContent += '3';
    num2 += '3';
  }
  } 
  if (operator != '' && num1 !== '' && num2 !== '') {
    text.textContent = num2;
}
});
four.addEventListener("click", (e) => {
  if (operator === '') {
    if (text.textContent === "0") {
      text.textContent = '4';
      num1 = '4';
  } else if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
   } else {
    text.textContent += '4';
    num1 += '4';
  }
  } else if (operator === '*' || operator === '+' || operator === '/' || operator === '-') {
    if (text.textContent === "0") {
      text.textContent = '4'
      num2 = '4';
  } else if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
   } else {
    text.textContent += '4';
    num2 += '4';
  }
  }  
  if (operator != '' && num1 !== '' && num2 !== '') {
    text.textContent = num2;
}
});
five.addEventListener("click", (e) => {
  if (operator === '') {
    if (text.textContent === "0") {
      text.textContent = '5';
      num1 = '5';
  } else if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
   } else {
    text.textContent += 5;
    num1 += '5';
  }
  }  else if (operator === '*' || operator === '+' || operator === '/' || operator === '-') {
    if (text.textContent === "0") {
      text.textContent = '5'
      num2 = '5';
  } else if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
   } else {
    text.textContent += '5';
    num2 += '5';
  }
  } 
  if (operator != '' && num1 !== '' && num2 !== '') {
    text.textContent = num2;
}

});
six.addEventListener("click", (e) => {
  if (operator === '') {
    if (text.textContent === "0") {
      text.textContent = '6';
      num1 = '6';
  } else if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
   } else {
    text.textContent += '6';
    num1 += '6';
  }
  } else if (operator === '*' || operator === '+' || operator === '/' || operator === '-') {
    if (text.textContent === "0") {
      text.textContent = '6'
      num2 = '6';
  } else if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
   } else {
    text.textContent += '6';
    num2 += '6';
  }
  }  
  if (operator != '' && num1 !== '' && num2 !== '') {
    text.textContent = num2;
}
});
seven.addEventListener("click", (e) => {
  if (operator === '') {
    if (text.textContent === "0") {
      text.textContent = '7';
      num1 = '7';
  } else if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
   } else {
    text.textContent += '7';
    num1 += '7';
  }
  } else if (operator === '*' || operator === '+' || operator === '/' || operator === '-') {
    if (text.textContent === "0") {
      text.textContent = '7'
      num2 = '7';
  } else if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
   } else {
    text.textContent += '7';
    num2 += '7';
  }
  } 
  if (operator != '' && num1 !== '' && num2 !== '') {
    text.textContent = num2;
}
});
eight.addEventListener("click", (e) => {
  if (operator === '') {
    if (text.textContent === "0") {
      text.textContent = '8';
      num1 = '8';
  } else if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
   } else {
    text.textContent += '8';
    num1 += '8';
  }
  } else if (operator === '*' || operator === '+' || operator === '/' || operator === '-') {
    if (text.textContent === "0") {
      text.textContent = '8'
      num2 = '8';
  } else if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
   } else {
    text.textContent += '8';
    num2 += '8';
  }
  } 
  if (operator != '' && num1 !== '' && num2 !== '') {
    text.textContent = num2;
}
});
nine.addEventListener("click", (e) => {
  if (operator === '') {
    if (text.textContent === "0") {
      text.textContent = '9';
      num1 = '9';
  } else if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
   } else {
    text.textContent += '9';
    num1 += '9';
  }
  } else if (operator === '*' || operator === '+' || operator === '/' || operator === '-') {
    if (text.textContent === "0") {
      text.textContent = '9'
      num2 = '9';
  } else if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
   } else {
    text.textContent += '9';
    num2 += '9';
  }
  } 
  if (operator != '' && num1 !== '' && num2 !== '') {
    text.textContent = num2;
}
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
if (text.textContent === "N/A") {
  text.textContent += '';
  num1 += '';
}
});
addition.addEventListener("click", (e) => {
  operator = "+";
  console.log(operator);
  if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
  }
  });
mulitplication.addEventListener("click", (e) => {
  operator = "*";
  console.log(operator);
  if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
  }
});  
subtraction.addEventListener("click", (e) => {
  operator = "-";
  console.log(operator);
  if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
  }
});
equal.addEventListener("click", (e) => {
  if (operator === "/" && num2 === '0') {
    text.textContent = "N/A";
    num1 = '';
    num2 = '';
    operator = '';
  } else if (text.textContent === "N/A") {
    text.textContent += '';
    num1 += '';
   } else {
    text.textContent = operate(+num1, operator, +num2);
    num2 = '';
    num1 = text.textContent;
  }
});
*/




































































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

let num1 = '';
let num2 = '';
let num = '';

clear.addEventListener("click", (e) => {
  text.textContent = "";
  num1 = '';
  num2 = '';
  operator = '';
});

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
    num = operate(+num1, operator, +num2);
    text.textContent = num;
    num1 = '';
    num2 = '';
    operator = '';
  } else if (num !== '' && operator !== '') {
    num = operate(+num, operator, +num2);
    text.textContent = num;
    num1 = '';
    num2 = '';
    operator = '';
  }

  //text.textContent = operate(+num1, operator, +num2);
  //num2 = '';
  //num1 = text.textContent;

/*
  text.textContent = operate(+num1, operator, +num2);
  num2 = '';
  num1 = text.textContent;
  */
});

/*
function ifStatement(num) {
  if (text.textContent === "0") {
    return text.textContent = num;
  } else {
  return text.textContent += num;
  }
  }
*/

/*
console.log(num1);
console.log(num2);
console.log(operator);
console.log(num);
*/