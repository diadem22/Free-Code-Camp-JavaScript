// Task 1: Compare Scopes of the var and let Keywords
function checkScope() {
  let i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return 'function scope';
}

// Task 2: Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();

// Task 3: Prevent Object Mutation
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// Task 4: Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => {
  return new Date();
};

// Task 5: Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));

// Task 6: Set Default Parameters for Your Functions
// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line

// Task 7: Use the Rest Parameter with Function Parameters
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};

// Task 8: Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1]; // Change this line

console.log(arr2);

// Task 9: Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
// Only change code below this line
const { today, tomorrow } = HIGH_TEMPERATURES;
// Only change code above this line

// Task 10: Use Destructuring Assignment to Assign Variables from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
// Only change code below this line
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
// Only change code above this line

// Task 11: Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

// Only change code below this line
const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;
// Only change code above this line

// Task 12: Use Destructuring Assignment to Assign Variables from Arrays
let a = 8,
  b = 6;
// Only change code below this line

[b, a] = [a, b];
