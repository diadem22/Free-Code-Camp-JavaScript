// Task 11: Convert HTML Entities
function convertHTML(str) {
  const HTMLentities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };

  return str
    .split('')
    .map((entity) => HTMLentities[entity] || entity)
    .join('');
}

convertHTML('Dolce & Gabbana');

// Task 12: Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  let prevNum = 0;
  let currNum = 1;
  let answer = 0;
  while (currNum <= num) {
    if (currNum % 2 !== 0) {
      answer += currNum;
    }
    currNum += prevNum;
    prevNum = currNum - prevNum;
  }

  return answer;
}

sumFibs(4);

// Task 13: Sum All Primes
function sumPrimes(num) {
  function isPrime(num) {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      }
    return true;
  }
  let total = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) total += i;
  }
  return total;
}

sumPrimes(10);

// Task 14:Smallest Common Multiple
function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((a, i) => i + min);

  const HighestMultiple = range.reduce((product, current) => product * current);

  for (let multiple = max; multiple <= HighestMultiple; multiple += max) {
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) {
      return multiple;
    }
  }
}

smallestCommons([1, 5]);

// Task 15: Drop it
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function (n) {
  return n < 3;
});

// Task 16: Steamroller
function steamrollArray(arr, flattenedArr = []) {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      steamrollArray(item, flattenedArr);
    } else flattenedArr.push(item);
  });
  return flattenedArr;
}

steamrollArray([1, [2], [3, [[4]]]]);

// Task

// Task

// Task

// Task
