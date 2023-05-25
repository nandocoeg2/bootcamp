function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      } else {
        // console.log(temp);
      }
    }
  }
  return arr;
}

// const iniArray = [1, 20, 30, 2, 4, 6, 2, 55, 23, 43, 1];

const xx = [
  [1, 2, 3],
  ["a", "b", "c"],
];

const xy = [1, 23, 4, 4, 5, 62, 8, 2];

const str = ["a", "c", "b", "aabacsa", "g"];
const str1 = ["a", "c", "b", "aabacsa", "g"];

const srt = String(str[1]);
console.log(str === str1);

============================

function rata2(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array1[i];
  }
  return total / array.length;
}

console.log(rata2(array1));

function median(array) {
  let median = 0;
  let arraySort = array.sort();
  if (array.length % 2 === 0) {
    median =
      (arraySort[array.length / 2 - 1] + arraySort[array.length / 2]) / 2;
  } else {
    median = arraySort[(array.length - 1) / 2];
  }
  return median;
}

console.log(median(array1));

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (array[mid] !== target && left <= right) {
    if (target < array[mid]) right = mid - 1;
    else left = mid + 1;
    mid = Math.floor((left + right) / 2);
  }

  return array[mid] === target ? mid : -1;
}

console.log(binarySearch(array1, 5));

const array1 = [2, 5, 5, 6, 7, 8, 10];

function modus(array) {
  let modus = 0;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let tempCount = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        tempCount++;
      }
    }
    if (tempCount > count) {
      modus = array[i];
      count = tempCount;
    }
  }
  return modus;
}

console.log(modus(array1));
