// Test 102
function randomFraction() {
  // Only change code below this line

  return Math.random();

  // Only change code above this line
}

// Test 103
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}

// Test 104
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger('56');

// Test 105
function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger('10011');

// Test 106
function checkEqual(a, b) {
  return a == b ? 'Equal' : 'Not Equal';
}

checkEqual(1, 2);

// Test 107
function checkSign(num) {
  return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';
}

checkSign(10);

// Test 107
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

// Test 108
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
