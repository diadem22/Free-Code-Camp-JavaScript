// Test 86
const myDog = {
  name: 'Happy Coder',
  legs: 4,
  tails: 1,
  friends: ['freeCodeCamp Campers'],
};

myDog.bark = 'woof';

// Test 87
// Setup
const myDog = {
  name: 'Happy Coder',
  legs: 4,
  tails: 1,
  friends: ['freeCodeCamp Campers'],
  bark: 'woof',
};
// Only change code below this line
delete myDog.tails;

// Test 88
// Setup
function phoneticLookup(val) {
  let result = '';
  // Only change code below this line
  const lookup = {
    alpha: 'Adams',
    bravo: 'Boston',
    charlie: 'Chicago',
    delta: 'Denver',
    echo: 'Easy',
    foxtrot: 'Frank',
  };
  result = lookup[val];
  // Only change code above this line
  return result;
}
phoneticLookup('charlie');

// Test 89
const myMusic = [
  {
    artist: 'Billy Joel',
    title: 'Piano Man',
    release_year: 1973,
    formats: ['CD', '8T', 'LP'],
    gold: true,
  },
  {
    artist: 'Hillsong',
    title: 'Glorious Ruins',
    release_year: 2012,
    formats: ['CD', 'Mp3', 'Mp4'],
  },
];

// Test 90
const myStorage = {
  car: {
    inside: {
      'glove box': 'maps',
      'passenger seat': 'crumbs',
    },
    outside: {
      trunk: 'jack',
    },
  },
};
const gloveBoxContents = myStorage.car.inside['glove box'];

// Test 91
const myPlants = [
  {
    type: 'flowers',
    list: ['rose', 'tulip', 'dandelion'],
  },
  {
    type: 'trees',
    list: ['fir', 'pine', 'birch'],
  },
];
const secondTree = myPlants[1].list[1];

// Test 92
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    albumTitle: 'ABBA Gold',
  },
};
// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== '') {
    records[id][prop] = value;
  } else if (
    prop === 'tracks' &&
    records[id].hasOwnProperty('tracks') === false
  ) {
    records[id][prop] = [value];
  } else if (prop === 'tracks' && value !== '') {
    records[id][prop].push(value);
  } else if (value === '') {
    delete records[id][prop];
  }
  return records;
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// Test 93
// Setup
const myArray = [];
// Only change code below this line
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}

// Test 94
// Setup
const myArray = [];
// Only change code below this line
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}

// Test 95
// Setup
const myArray = [];
// Only change code below this line
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}

// Test 96
// Setup
const myArray = [];

// Only change code below this line
for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

// Test 97
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// Test 98
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}
multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

// Test 99
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 11);

// Test 100
function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}

// Test 101
// Setup
const contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return 'No such property';
      }
    }
  }
  return 'No such contact';
  // Only change code above this line
}

lookUpProfile('Akira', 'likes');
