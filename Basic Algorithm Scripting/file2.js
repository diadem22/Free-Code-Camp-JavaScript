// Task 11: Title Case a Sentence
function titleCase(str) {
  const newStr = str.split(' ');
  const arrStr = [];
  for (let st in newStr) {
    arrStr[st] =
      newStr[st][0].toUpperCase() + newStr[st].slice(1).toLowerCase();
  }
  return arrStr.join(' ');
}

titleCase("I'm a little tea pot");

// Task 12: Slice and Splice
function frankenSplice(arr1, arr2, n) {
  let newArr2 = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    newArr2.splice(n, 0, arr1[i]);
    n++;
  }
  return newArr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Task 13: Falsy Bouncer
function bouncer(arr) {
  let arrFilter = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      arrFilter.push(arr[i]);
    }
  }
  return arrFilter;
}
bouncer([7, 'ate', '', false, 9]);

// Task 14: Where do I Belong
function getIndexToIns(arr, num) {
  arr.sort((x, y) => x - y);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);

// Task 15: Mutation
function mutation(arr) {
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();

  for (let i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) < 0) {
      return false;
    }
  }
  return true;
}
mutation(['hello', 'hey']);

// Task 16: Chunky Monkey
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
