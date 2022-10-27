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

// Task 17: Binary Agents
function binaryAgent(str) {
  let arr = str.split(' ');
  let res = '';
  arr.forEach((string) => {
    res += String.fromCharCode(parseInt(string, 2));
  });
  return res;
}

binaryAgent(
  '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
);

// Task 18: Everything Be True
function truthCheck(collection, pre) {
  return collection.every((item) => {
    return item.hasOwnProperty(pre) && Boolean(item[pre]);
  });
}

truthCheck(
  [
    { name: 'Quincy', role: 'Founder', isBot: false },
    { name: 'Naomi', role: '', isBot: false },
    { name: 'Camperbot', role: 'Bot', isBot: true },
  ],
  'isBot'
);

// Task 19: Arguments Optional
function addTogether() {
  const [first, second] = arguments;
  if (typeof first !== 'number') return undefined;
  if (arguments.length === 1) return (second) => addTogether(first, second);
  if (typeof second !== 'number') return undefined;
  return first + second;
}

addTogether(2, 3);

// Task 20: Make a Person
const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast;

  this.getFirstName = function () {
    return fullName.split(' ')[0];
  };
  this.getLastName = function () {
    return fullName.split(' ')[1];
  };
  this.getFullName = function () {
    return fullName;
  };
  this.setFirstName = function (first) {
    fullName = first + ' ' + fullName.split(' ')[1];
  };

  this.setLastName = function (last) {
    fullName = fullName.split(' ')[0] + ' ' + last;
  };

  this.setFullName = function (firstAndLast) {
    fullName = firstAndLast;
  };
};

const bob = new Person('Bob Ross');
bob.getFullName();

// Task 21: Map the Debris
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const newArr = [];
  const x = 2 * Math.PI;

  const solveOrbPeriod = function (obj) {
    const y = Math.pow(earthRadius + obj.avgAlt, 3);
    const z = Math.sqrt(y / GM);
    const orbPeriod = Math.round(x * z);

    return { name: obj.name, orbitalPeriod: orbPeriod };
  };

  for (let item in arr) {
    newArr.push(solveOrbPeriod(arr[item]));
  }
  return newArr;
}

orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]);