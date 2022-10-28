// Project 1: Palindrome Checker
function palindrome(str) {
  const str2 = str.toLowerCase().trim();
  const strAdjust = str2.replace(/[^a-z0-9]/g, '');

  const reversedStr = strAdjust.split('').reverse().join('').toString();

  return strAdjust === reversedStr;
}

palindrome('eye');

// Project 2: Roman Numeral Converter
function convertToRoman(num) {
  const romanNumeralTable = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let romanNumeral = '';

  for (const key in romanNumeralTable) {
    const value = romanNumeralTable[key];

    while (value <= num) {
      num -= value;
      romanNumeral += key;
    }
  }

  return romanNumeral;
}

convertToRoman(36);

// Project 3
const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function rot13(str) {
  let decodedString = '';
  for (let i = 0; i < str.length; i++) {
    const isAlphabet = alphabet.includes(str[i]);
    if (!isAlphabet) {
      decodedString += str[i];
    } else {
      const letterIndex = alphabet.findIndex((c) => c === str[i]);

      decodedString += alphabet[letterIndex + 13] || alphabet[letterIndex - 13];
    }
  }
  return decodedString;
}

rot13('SERR PBQR PNZC');

// Project 4: Telephone Number Validator
function telephoneCheck(str) {
  const validPhoneFormat = [
    /^\d{3}-\d{3}-\d{4}$/,
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^\d{10}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^1 \d{3} \d{3} \d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/,
  ];

  return validPhoneFormat.some((format) => format.test(str));
}

telephoneCheck('555-555-5555');

// Project 5: Cash Register
const currencyValue = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  'ONE HUNDRED': 10000,
};

function checkCashRegister(price, cash, cid) {
  let changeTotal = cash * 100 - price * 100;
  let changeTotalCheck = changeTotal;
  let change = [];
  let status = '';

  let sumCID = 0;
  let cidFilter = cid.filter((item) => item[1] !== 0).reverse();

  cidFilter.forEach((item) => {
    let current = item[0];
    let currentSum = item[1] * 100;
    sumCID += currentSum;
    let value = 0;

    while (changeTotal >= currencyValue[current] && currentSum > 0) {
      value += currencyValue[current];
      changeTotal -= currencyValue[current];
      currentSum -= currencyValue[current];
    }
    if (value !== 0) {
      change.push([current, value / 100]);
    }
  });
  if (changeTotal > 0) {
    (status = 'INSUFFICIENT_FUNDS'), (change = []);
  } else if (changeTotal == 0 && changeTotalCheck == sumCID) {
    (status = 'CLOSED'), (change = cid);
  } else {
    status = 'OPEN';
  }
  return { status: status, change: change };
}

checkCashRegister(19.5, 20, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
]);
