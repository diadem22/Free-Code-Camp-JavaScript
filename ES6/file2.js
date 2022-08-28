// Task 13: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

// Task 14: Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line

// Task 15: Create Strings using Template Literals
const result = {
  success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
  failure: ['no-var', 'var-on-top', 'linebreak'],
  skipped: ['no-extra-semi', 'no-dup-keys'],
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

// Task 16: Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name,
    age,
    gender,
  };
  // Only change code above this line
};

// Task 17: Write Concise Declarative Functions with ES6
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

// Task 18: Use class Syntax to Define a Constructor Function
// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
// Only change code above this line
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

// Task 19: Use getters and setters to Control Access to an Object
// Only change code below this line
class Thermostat {
  constructor(tempF) {
    this.tempF = tempF;
  }

  get temperature() {
    return (5 / 9) * (this.tempF - 32);
  }

  set temperature(tempC) {
    this.tempF = (tempC * 9.0) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

// Task 20: Create a Module Script
<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>;

// Task 21: Use export to Share a Code Block
const uppercaseString = (string) => {
  return string.toUpperCase();
};
const lowercaseString = (string) => {
  return string.toLowerCase();
};

export { uppercaseString, lowercaseString };

// Task 22: Reuse JavaScript Code Using import
import { uppercaseString, lowercaseString } from './string_functions.js';
// Only change code above this line
uppercaseString('hello');
lowercaseString('WORLD!');

// Task 23: Use * to Import Everything from a File
import * as stringFunctions from './string_functions.js';
// Only change code above this line

stringFunctions.uppercaseString('hello');
stringFunctions.lowercaseString('WORLD!');

// Task 24: Create an Export Fallback with export default
export default function subtract(x, y) {
  return x - y;
}

// Task 25: Import a Default Export
import subtract from './math_functions.js';
// Only change code above this line

subtract(7, 4);

// Task 26: Create a JavaScript Promise
const makeServerRequest = new Promise((resolve, reject) => {});

// Task 27: Complete a Promise with resolve and reject
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if (responseFromServer) {
    resolve('We got the data');
  } else {
    reject('Data not received');
  }
});

// Task 28: Handle a Fulfilled Promise with then
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

  if (responseFromServer) {
    resolve('We got the data');
  } else {
    reject('Data not received');
  }
  makeServerRequest.then((result) => {
    console.log(result);
  });
});

// Task 29: Handle a Rejected Promise with catch
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;

  if (responseFromServer) {
    resolve('We got the data');
  } else {
    reject('Data not received');
  }
  makeServerRequest.catch((error) => {
    console.log(error);
  });
});

makeServerRequest.then((result) => {
  console.log(result);
});
