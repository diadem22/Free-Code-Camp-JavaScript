// Task 40
const myArray = [18, 64, 99];
// Only change code below this line
myArray[0] = 45;

// Task 41
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
const myData = myArray[2][1];

// Task 42
// Setup
const myArray = [
  ['John', 23],
  ['cat', 2],
];
// Only change code below this line
myArray.push(['dog', 3]);

// Task 43
const myArray = [
  ['John', 23],
  ['cat', 2],
];
// Only change code below this line
const removedFromMyArray = myArray.pop();

// Task 44
const myArray = [
  ['John', 23],
  ['dog', 3],
];
// Only change code below this line
const removedFromMyArray = myArray.shift();

// Task 45
const myArray = [
  ['John', 23],
  ['dog', 3],
];
myArray.shift();
// Only change code below this line
myArray.unshift(['Paul', 35]);

// Task 46
const myList = [
  ['Soap', 250],
  ['Biscuits', 500],
  ['Noodles', 200],
  ['Books', 150],
  ['Cake', 600],
];

// Task 47
function reusableFunction() {
  console.log('Hi World');
}
reusableFunction();

// Task 48
function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(4, 12);

// Task 49
function timesFive(value) {
  return value * 5;
}

// Task 50
let myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Task 51
function myLocalScope() {
  // Only change code below this line
  const myVar = 35;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

// Task 52
const outerWear = 'T-Shirt';

function myOutfit() {
  // Only change code below this line
  const outerWear = 'sweater';
  // Only change code above this line
  return outerWear;
}

myOutfit();

// Task 53
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5;
}
// Only change code above this line

addThree();
addFive();

// Task 54
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

// Task 55
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift();
  //return 2;
  // Only change code above this line
}
// Setup
const testArr = [1, 2, 3, 4, 5];
// Display code
console.log('Before: ' + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log('After: ' + JSON.stringify(testArr));

// Task 56
function welcomeToBooleans() {
  // Only change code below this line
  return true; // Change this line
  // Only change code above this line
}

// Task 57
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return 'Yes, that was true';
  } else {
    return 'No, that was false';
  }
}

// Task 58
// Setup
function testEqual(val) {
  if (val == 12) {
    // Change this line
    return 'Equal';
  }
  return 'Not Equal';
}
testEqual(10);

// Task 59
// Setup
function testStrict(val) {
  if (val === 7) {
    // Change this line
    return 'Equal';
  }
  return 'Not Equal';
}
testStrict(10);

// Task 60
// Setup
function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return 'Equal';
  }
  return 'Not Equal';
}
compareEquality(10, '10');
