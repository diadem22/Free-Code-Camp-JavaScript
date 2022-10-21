// Task 1: Sum All Numbers in a Range
function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);

// Task 2: Diff Two Arrays
function diffArray(arr1, arr2) {
  const jointArr = arr1.concat(arr2);
  const newArr = jointArr.filter((i) => !arr1.includes(i) || !arr2.includes(i));

  return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Task 3: Seek and Destroy
function destroyer(arr) {
  const removeVal = Array.from(arguments).slice(1);
  return arr.filter(function (val) {
    return !removeVal.includes(val);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Task 4: Wherefore art thou
function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  const sourceKeys = Object.keys(source);

  return collection.filter((obj) =>
    sourceKeys.every(
      (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
    )
  );
  // Only change code above this line
}
whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { last: 'Capulet' }
);

// Task 5: Spinal Tap Case
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase();
}

spinalCase('This Is Spinal Tap');

// Task 6: Pig Latin
function translatePigLatin(str) {
  let constRegex = /^[^aeiou]+/;
  let consonant = str.match(constRegex);
  return consonant !== null
    ? str.replace(constRegex, '').concat(consonant).concat('ay')
    : str.concat('way');
}

translatePigLatin('consonant');

// Task 7: Search and Replace
function myReplace(str, before, after) {
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1);
  } else {
    after = after[0].toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}

myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');

// Task 8: DNA Pairing
function pairElement(str) {
  let matchStr = function (value, dnaArray) {
    switch (value) {
      case 'A':
        dnaArray.push(['A', 'T']);
        break;
      case 'T':
        dnaArray.push(['T', 'A']);
        break;
      case 'G':
        dnaArray.push(['G', 'C']);
        break;
      case 'C':
        dnaArray.push(['C', 'G']);
        break;
    }
  };

  const pairedDNA = [];
  for (let i = 0; i < str.length; i++) {
    matchStr(str[i], pairedDNA);
  }

  return pairedDNA;
}

pairElement('GCG');

// Task 9: Missing letters
function fearNotLetter(str) {
  let strChar = str.charCodeAt(0);
  let missing = undefined;

  str.split('').forEach((letter) => {
    if (letter.charCodeAt(0) === strChar) {
      strChar++;
    } else {
      missing = String.fromCharCode(strChar);
    }
  });

  return missing;
}

fearNotLetter('abce');

// Task 10: Sorted Union
function uniteUnique(arr) {
  const newArr = [];

  for (let i = 0; i < arguments.length; i++) {
    const argumentsArray = arguments[i];

    for (let j = 0; j < argumentsArray.length; j++) {
      let index = argumentsArray[j];

      if (newArr.indexOf(index) < 0) {
        newArr.push(index);
      }
    }
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
