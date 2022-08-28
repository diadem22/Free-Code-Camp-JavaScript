// Task 23: Compound Assignment With Augmented Multiplication
let a = 5;
let b = 12;
let c = 4.6;
// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

// Task 24: Compound Assignment With Augmented Division
let a = 48;
let b = 108;
let c = 33;
// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

//Task 25: Escaping Literal Quotes in Strings
const myStr = 'I am a "double quoted" string inside "double quotes".';

//Task 26: Quoting Strings with Single Quotes
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// Task 27: Escape Sequences in Strings
const myStr = 'FirstLine\n\t\\SecondLine\nThirdLine';

// Task 28: Concatenating Strings with Plus Operator
const myStr = 'This is the start. ' + 'This is the end.';

// Task 29: Concatenating Strings with the Plus Equals Operator
let myStr = 'This is the first sentence. ';
myStr += 'This is the second sentence.';

// Task 30: Constructing Strings with Variables
const myName = 'Ifeoluwa';
const myStr = 'My name is ' + myName + 'and I am well!';

// Task 31: Appending Variables to Strings
const someAdjective = 'Cool';
let myStr = 'Learning to code is ';
myStr += someAdjective;

// Task 32: Find the Length of a String
let lastNameLength = 0;
const lastName = 'Lovelace';
// Only change code below this line
lastNameLength = lastName.length;

// Task 33: Use Bracket Notation to Find the First Character in a String
let firstLetterOfLastName = '';
const lastName = 'Lovelace';
// Only change code below this line
firstLetterOfLastName = lastName[0];

// Task 34: Understand String Immutability
let myStr = 'Jello World';
// Only change code below this line
myStr = 'Hello World'; // Change this line

// Task 35: Use Bracket Notation to Find the Nth Character in a String
// Setup
const lastName = 'Lovelace';
// Only change code below this line
const thirdLetterOfLastName = lastName[2];

// Task 36: Use Bracket Notation to Find the Last Character in a String
const lastName = 'Lovelace';
// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1];

// Task 37: Use Bracket Notation to Find the Nth-to-Last Character in a String
const lastName = 'Lovelace';
// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2];

// Task 38: Word Blanks
const myNoun = 'dog';
const myAdjective = 'big';
const myVerb = 'ran';
const myAdverb = 'quickly';

// Only change code below this line
const wordBlanks =
  'My ' +
  myAdjective +
  ' fat ' +
  myNoun +
  ' had to ' +
  myVerb +
  ' swiftly ' +
  myAdverb +
  ' across the road';

// Task 39: Store Multiple Values in one Variable using JavaScript Arrays
const myArray = ['letter', 24];

// Task 40: Nest one Array within Another Array
const myArray = [
  ['Gbenro', 30],
  ['Ife', 26],
];

// Task 41: Access Array Data with Indexes
const myArray = [50, 60, 70];
const myData = myArray[0];
