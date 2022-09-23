// Task 11: Iterate Over All Properties
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog('Snoopy');
let ownProps = [];
let prototypeProps = [];
// Only change code below this line
for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

// Task 12: Understand the Constructor Property
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

// Task 13: Change the Prototype to a New Object
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function () {
    console.log('Jojo eats');
  },
  describe: function () {
    console.log(this.name + ' is a young dog');
  },
};

// Task 14: Remember to Set the Constructor Property when Changing the Prototype
function Dog(name) {
  this.name = name;
}
// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function () {
    console.log('nom nom nom');
  },
  describe: function () {
    console.log('My name is ' + this.name);
  },
};

// Task 15: Understand Where an Object’s Prototype Comes From
function Dog(name) {
  this.name = name;
}
let beagle = new Dog('Snoopy');
// Only change code below this line
Dog.prototype.isPrototypeOf(beagle);

// Task 16: Understand the Prototype Chain
function Dog(name) {
  this.name = name;
}
let beagle = new Dog('Snoopy');
Dog.prototype.isPrototypeOf(beagle); // yields true
// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

// Task 17: Use Inheritance So You Don't Repeat Yourself
function Cat(name) {
  this.name = name;
}
Cat.prototype = {
  constructor: Cat,
};
function Bear(name) {
  this.name = name;
}
Bear.prototype = {
  constructor: Bear,
};
function Animal() {}
Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log('nom nom nom');
  },
};
