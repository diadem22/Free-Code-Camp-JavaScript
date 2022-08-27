// Task 42: Modify Array Data With Indexes
const myArray = [18, 64, 99];
// Only change code below this line
myArray[0] = 45;

// Task 43: Access Multi-Dimensional Arrays With Indexes
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
const myData = myArray[2][1];

// Task 44: Manipulate Arrays With push()
// Setup
const myArray = [
  ['John', 23],
  ['cat', 2],
];
// Only change code below this line
myArray.push(['dog', 3]);

// Task 45: Manipulate Arrays With pop()
const myArray = [
  ['John', 23],
  ['cat', 2],
];
// Only change code below this line
const removedFromMyArray = myArray.pop();

// Task 46: Manipulate Arrays With shift()
const myArray = [
  ['John', 23],
  ['dog', 3],
];
// Only change code below this line
const removedFromMyArray = myArray.shift();

// Task 47: Manipulate Arrays With unshift()
const myArray = [
  ['John', 23],
  ['dog', 3],
];
myArray.shift();
// Only change code below this line
myArray.unshift(['Paul', 35]);

// Task 48: Shopping List
const myList = [
  ['Soap', 250],
  ['Biscuits', 500],
  ['Noodles', 200],
  ['Books', 150],
  ['Cake', 600],
];

// Task 49: Write Reusable JavaScript with Functions
function reusableFunction() {
  console.log('Hi World');
}
reusableFunction();

// Task 50: Passing Values to Functions with Arguments
function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(4, 12);

// Task 51: Return a Value from a Function with Return
function timesFive(value) {
  return value * 5;
}

// Task 52: Global Scope and Functions
let myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

function fun2() {
  var output = '';
  if (typeof myGlobal != 'undefined') {
    output += 'myGlobal: ' + myGlobal;
  }
  if (typeof oopsGlobal != 'undefined') {
    output += ' oopsGlobal: ' + oopsGlobal;
  }
  console.log(output);
}

// Task 53: Local Scope and Functions
function myLocalScope() {
  // Only change code below this line
  const myVar = 35;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

// Task 54: Global vs. Local Scope in Functions
const outerWear = 'T-Shirt';

function myOutfit() {
  // Only change code below this line
  const outerWear = 'sweater';
  // Only change code above this line
  return outerWear;
}

myOutfit();

// Task 55: Understanding Undefined Value returned from a Function
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

// Task 56: Assignment with a Returned Value
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

// Task 57: Stand in Line
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

// Task 58: Understanding Boolean Values
function welcomeToBooleans() {
  // Only change code below this line
  return true; // Change this line
  // Only change code above this line
}

// Task 59: Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return 'Yes, that was true';
  } else {
    return 'No, that was false';
  }
}

// Task 60: Comparison with the Equality Operator
// Setup
function testEqual(val) {
  if (val == 12) {
    // Change this line
    return 'Equal';
  }
  return 'Not Equal';
}
testEqual(10);

// Task 61: Comparison with the Strict Equality Operator
// Setup
function testStrict(val) {
  if (val === 7) {
    // Change this line
    return 'Equal';
  }
  return 'Not Equal';
}
testStrict(10);

// Task 62: Practice comparing different values
// Setup
function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return 'Equal';
  }
  return 'Not Equal';
}
compareEquality(10, '10');

// Task 63: Comparison with the Inequality Operator
// Setup
function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return 'Not Equal';
  }
  return 'Equal';
}

testNotEqual(10);
