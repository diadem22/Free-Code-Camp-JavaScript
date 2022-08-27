// Task 64: Comparison with the Strict Inequality Operator
// Setup
function testStrictNotEqual(val) {
  if (val !== 17) {
    // Change this line
    return 'Not Equal';
  }
  return 'Equal';
}
testStrictNotEqual(10);

// Task 65: Comparison with the Greater Than Operator
function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return 'Over 100';
  }
  if (val > 10) {
    // Change this line
    return 'Over 10';
  }
  return '10 or Under';
}
testGreaterThan(10);

// Task 66: Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
  if (val >= 20) {
    // Change this line
    return '20 or Over';
  }
  if (val >= 10) {
    // Change this line
    return '10 or Over';
  }
  return 'Less than 10';
}
testGreaterOrEqual(10);

// Task 67: Comparison with the Less Than Operator
function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return 'Under 25';
  }
  if (val < 55) {
    // Change this line
    return 'Under 55';
  }
  return '55 or Over';
}
testLessThan(10);

// Task 68:  Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
  if (val <= 12) {
    // Change this line
    return 'Smaller Than or Equal to 12';
  }
  if (val <= 24) {
    // Change this line
    return 'Smaller Than or Equal to 24';
  }
  return 'More Than 24';
}
testLessOrEqual(10);

// Task 69: Comparisons with the Logical And Operator
function testLogicalAnd(val) {
  // Only change code below this line
  if (val <= 50 && val >= 25) {
    return 'Yes';
  }
  // Only change code above this line
  return 'No';
}

testLogicalAnd(10);

// Task 70: Comparisons with the Logical Or Operator
function testLogicalOr(val) {
  // Only change code below this line
  if (val < 10 || val > 20) {
    return 'Outside';
  }
  // Only change code above this line
  return 'Inside';
}

testLogicalOr(15);

// Task 71: Introducing Else Statements
function testElse(val) {
  let result = '';
  // Only change code below this line
  if (val > 5) {
    result = 'Bigger than 5';
  } else {
    result = '5 or Smaller';
  }
  // Only change code above this line
  return result;
}

testElse(4);

// Task 72: Introducing Else  If Statements
function testElseIf(val) {
  if (val > 10) {
    return 'Greater than 10';
  } else if (val < 5) {
    return 'Smaller than 5';
  } else {
    return 'Between 5 and 10';
  }
}
testElseIf(7);

// Task 73: Logical Order in If Else Statements
function orderMyLogic(val) {
  if (val < 5) {
    return 'Less than 5';
  } else if (val < 10) {
    return 'Less than 10';
  } else {
    return 'Greater than or equal to 10';
  }
}

orderMyLogic(7);

// Task 74: Chaining If Else Statements
function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return 'Tiny';
  } else if (num < 10) {
    return 'Small';
  } else if (num < 15) {
    return 'Medium';
  } else if (num < 20) {
    return 'Large';
  } else if (num >= 20) {
    return 'Huge';
  } else {
    return 'Change Me';
  }
  // Only change code above this line
}

testSize(7);

// Task 75: Golf Code
const names = [
  'Hole-in-one!',
  'Eagle',
  'Birdie',
  'Par',
  'Bogey',
  'Double Bogey',
  'Go Home!',
];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  } else {
    return 'Change Me';
  }
  // Only change code above this line
}

golfScore(5, 4);

// Task 76: Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  let answer = '';
  // Only change code below this line
  switch (val) {
    case 1:
      answer = 'alpha';
      break;
    case 2:
      answer = 'beta';
      break;
    case 3:
      answer = 'gamma';
      break;
    case 4:
      answer = 'delta';
      break;
  }

  // Only change code above this line
  return answer;
}

caseInSwitch(1);

// Task 77: Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  let answer = '';
  // Only change code below this line
  switch (val) {
    case 'a':
      answer = 'apple';
      break;
    case 'b':
      answer = 'bird';
      break;
    case 'c':
      answer = 'cat';
      break;
    default:
      answer = 'stuff';
      break;
  }
  // Only change code above this line
  return answer;
}

switchOfStuff(1);

// Task 78: Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  let answer = '';
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = 'Low';
      break;
    case 4:
    case 5:
    case 6:
      answer = 'Mid';
      break;
    case 7:
    case 8:
    case 9:
      answer = 'High';
      break;
  }
  // Only change code above this line
  return answer;
}

sequentialSizes(1);

// Task 79: Replacing If Else Chains with Switch
function chainToSwitch(val) {
  let answer = '';
  // Only change code below this line
  switch (val) {
    case 'bob':
      answer = 'Marley';
      break;
    case 42:
      answer = 'The Answer';
      break;
    case 1:
      answer = 'There is no #1';
      break;
    case 99:
      answer = 'Missed me by this much!';
      break;
    case 7:
      answer = 'Ate Nine';
      break;
    default:
      answer = '';
  }
  // Only change code above this line
  return answer;
}

chainToSwitch(7);

// Task 80: Returning Boolean Values from Functions
function isLess(a, b) {
  // Only change code below this line
  return a < b;
  // Only change code above this line
}

isLess(10, 15);

// Task 81: Return Early Pattern for Functions
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined;
  }
  // Only change code above this line
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

// Task 82: Counting Cards
let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
  if (count > 0) {
    return `${count} Bet`;
  } else if (count <= 0) {
    return `${count} Hold`;
  }

  return 'Change Me';
  // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');

// Task 83: Build JavaScript Objects
const myDog = {
  // Only change code below this line
  name: 'Jojo',
  legs: 4,
  tail: 1,
  friends: ['Fade', 'Tofunmi', 'Layla'],

  // Only change code above this line
};

// Task 84: Accessing Object Properties with Dot Notation
// Setup
const testObj = {
  hat: 'ballcap',
  shirt: 'jersey',
  shoes: 'cleats',
};

// Only change code below this line
const hatValue = testObj.hat; // Change this line
const shirtValue = testObj.shirt; // Change this line

// Test 85: Accessing Object Properties with Bracket Notation
// Setup
const testObj = {
  'an entree': 'hamburger',
  'my side': 'veggies',
  'the drink': 'water',
};

// Only change code below this line
const entreeValue = testObj['an entree']; // Change this line
const drinkValue = testObj['the drink']; // Change this line

// Test 86: Accessing Object Properties with Variables
// Setup
const testObj = {
  12: 'Namath',
  16: 'Montana',
  19: 'Unitas',
};

// Only change code below this line
const playerNumber = 16; // Change this line
const player = testObj[playerNumber]; // Change this line

// Test 87: Updating Object Properties
// Setup
const myDog = {
  name: 'Coder',
  legs: 4,
  tails: 1,
  friends: ['freeCodeCamp Campers'],
};

// Only change code below this line
myDog.name = 'Happy Coder';
