// Task 1: Create a Basic JavaScript Object
let dog = {
  name: 'Jojo',
  numLegs: 4,
};

// Task 2: Use Dot Notation to Access the Properties of an Object
let dog = {
  name: 'Spot',
  numLegs: 4,
};
// Only change code below this line
console.log(dog.name);
console.log(dog.numLegs);

// Task 3: Create a Method on an Object
let dog = {
  name: 'Spot',
  numLegs: 4,
  sayLegs: function () {
    return `This dog has ${dog.numLegs} legs.`;
  },
};

dog.sayLegs();

// Task 4: Make Code More Reusable with the this Keyword
let dog = {
  name: 'Spot',
  numLegs: 4,
  sayLegs: function () {
    return 'This dog has ' + this.numLegs + ' legs.';
  },
};

dog.sayLegs();

// Task 5: Define a Constructor Function
function Dog() {
  this.name = 'Jojo';
  this.color = 'white';
  this.numLegs = 4;
}

// Task 6: Use a Constructor to Create Objects
function Dog() {
  this.name = 'Rupert';
  this.color = 'brown';
  this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog();

hound.name = 'Jaja';
hound.color = 'gray';
hound.numLegs = 4;

// Task 7: Extend Constructors to Receive Arguments
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog('wild', 'black');

// Task 8: Verify an Object's Constructor with instanceof
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
// Only change code below this line
let myHouse = new House(4);

myHouse instanceof House;

// Task 9: Understand Own Properties
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird('Tweety');
let ownProps = [];

// Only change code below this line
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

// Task 10: Use Prototype Properties to Reduce Duplicate Code
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
// Only change code above this line
let beagle = new Dog('Snoopy');
