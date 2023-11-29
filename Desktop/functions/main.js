// First Task

function isEqual(a, b) {
  if (a === b) {
    return "ტოლია";
  } else {
    return "არ არის ტოლი";
  }
}

console.log(isEqual(5, 3)); //not equal
console.log(isEqual(1, 1)); //equal
console.log(isEqual(3, "3")); //equal

//Second Task
const toCelsius = function (fahrenheit) {
  if (typeof fahrenheit !== "number") {
    return false;
  }
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
};

console.log(toCelsius(100)); //37.77777777777778
console.log(toCelsius(50)); //10
console.log(toCelsius("50")); //false

//Third Task

const calculate = function (a, b, operation) {
  if (typeof a !== "number" || typeof b !== "number") {
    return false;
  }
  if (operation === "+") {
    return a + b;
  } else if (operation === "-") {
    return a - b;
  } else if (operation === "*") {
    return a * b;
  } else if (operation === "/") {
    return a / b;
  } else {
    return false;
  }
};
console.log(calculate(5, 5, "*")); //25
console.log(calculate(1, "2", "+")); //false
console.log(calculate(1, 2, ".")); //false
