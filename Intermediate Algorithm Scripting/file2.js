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

// Task

// Task

// Task

// Task

// Task

// Task

// Task

// Task
