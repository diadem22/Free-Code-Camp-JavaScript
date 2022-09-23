// Task 18: Inherit Behaviors from a Supertype
function Animal() {}
Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log('nom nom nom');
  },
};
// Only change code below this line
let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

// Task 19: Set the Child's Prototype to an Instance of the Parent
function Animal() {}
Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log('nom nom nom');
  },
};
function Dog() {}
// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();

// Task 20: Reset an Inherited Constructor Property
function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
// Only change code below this line
let duck = new Bird();
let beagle = new Dog();
Bird.prototype.constructor = Bird;
duck.constructor;
Dog.prototype.constructor = Dog;
beagle.constructor;

// Task 21: Add Methods After Inheritance
function Animal() {}
Animal.prototype.eat = function () {
  console.log('nom nom nom');
};
function Dog() {}
// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log('Woof!');
};
// Only change code above this line
let beagle = new Dog();

// Task 22: Override Inherited Methods
function Bird() {}
Bird.prototype.fly = function () {
  return 'I am flying!';
};
function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
// Only change code below this line
Penguin.prototype.fly = function () {
  return 'Alas, this is a flightless bird.';
};
// Only change code above this line
let penguin = new Penguin();
console.log(penguin.fly());

// Task 23: Use a Mixin to Add Common Behavior Between Unrelated Objects
let bird = {
  name: 'Donald',
  numLegs: 2,
};
let boat = {
  name: 'Warrior',
  type: 'race-boat',
};
// Only change code below this line
let glideMixin = function (obj) {
  obj.glide = function () {
    console.log('Gliding!');
  };
};
glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();

// Task 24: Use Closure to Protect Properties Within an Object from Being Modified Externally
function Bird() {
  let weight = 15;

  this.getWeight = function () {
    return weight;
  };
}

// Task 25: Understand the Immediately Invoked Function Expression (IIFE)
(function () {
  console.log('A cozy nest is ready');
})();

// Task 26: Use an IIFE to Create a Module
let isCuteMixin = function (obj) {
  obj.isCute = function () {
    return true;
  };
};
let singMixin = function (obj) {
  obj.sing = function () {
    console.log('Singing to an awesome tune');
  };
};
let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log('Singing to an awesome tune');
      };
    },
  };
})();
