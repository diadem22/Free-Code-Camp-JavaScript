// Test 105: Generate Random Fractions with JavaScript
function randomFraction() {
  // Only change code below this line

  return Math.random();

  // Only change code above this line
}

// Test 106: Generate Random Whole Numbers with JavaScript
function randomWholeNum() {
  // Only change code below this line
  return Math.floor(Math.random() * 10);
}

// Test 107: Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}

// Test 108: Use the parseInt Function
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger('56');

// Test 109: Use the parseInt Function with a Radix
function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger('10011');

// Test 110: Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
  return a == b ? 'Equal' : 'Not Equal';
}

checkEqual(1, 2);

// Test 111: Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
  return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';
}

checkSign(10);

// Test 112: Use Recursion to Create a Countdown
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

// Test 113: Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
