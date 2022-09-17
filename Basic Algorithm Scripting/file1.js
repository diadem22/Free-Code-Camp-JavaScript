// Task 1: Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
  let fahrenheit = 1.8 * celsius + 32;
  return fahrenheit;
}
convertCtoF(30);

// Task 2: Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString('hello');

// Task 3: Factorialize a Number
function factorialize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}
factorialize(5);

// Task 4: Find the Longest Word in a String
function findLongestWordLength(str) {
  let items = str.split(' ');
  console.log(items);
  let maxLength = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].length > maxLength) {
      maxLength = items[i].length;
    }
  }
  return maxLength;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');

// Task 5: Return Largest Numbers in Arrays
function largestOfFour(arr) {
  let output = [];
  let largestNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    largestNumber = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    output[i] = largestNumber;
  }
  return output;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

// Task 6: Confirm the Ending
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}

confirmEnding('Bastian', 'n');

// Task 7: Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  let newStr = '';
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      newStr += str;
    }
  }
  console.log(newStr);
  return newStr;
}

repeatStringNumTimes('abc', 3);

// Task 8: Truncate a String
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}
truncateString('A-tisket a-tasket A green and yellow basket', 8);

// Task 9: Finders Keepers
function findElement(arr, func) {
  let num = 0;
  return arr.find(func);
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

// Task 10: Boo who
function booWho(bool) {
  return typeof bool === 'boolean';
}

booWho(null);

