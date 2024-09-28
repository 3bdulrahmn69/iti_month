console.log('____________1. Clock______________');

function clock() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  const time = hours + ':' + minutes + ':' + seconds;
  console.log(time);
}

setInterval(clock, 1000);

console.log('____________2. Add To Array______________');

function addToArray(arr) {
  let len = arr.length;
  let newArr = [];
  let currentIdx = 0;
  for (let i = len - 1; i > 0; i--) {
    newArr.push(arr[i]);
    if (currentIdx === 2) {
      break;
    }
    currentIdx++;
  }
  newArr.reverse();
  console.log(newArr);
}
addToArray([1, 2, 3, 4, 5]);

function addToArray() {
  let arr = [];
  while (true) {
    let value = prompt('Enter a value');
    if (value === 'done' || value === null || value === '') {
      break;
    }
    arr.push(value);
  }

  let len = arr.length;
  let newArr = [];
  let currentIdx = 0;

  for (let i = len - 1; i > 0; i--) {
    newArr.push(arr[i]);
    if (currentIdx === 2) {
      break;
    }
    currentIdx++;
  }
  newArr.reverse();
  console.log(newArr);
}

addToArray();

console.log('____________3. Array Sum, avg, Max______________');

function arraySumAvgMax(arr) {
  let sum = 0;
  let avg = 0;
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  avg = sum / arr.length;
  console.log('Sum: ' + sum);
  console.log('Avg: ' + avg);
  console.log('Max: ' + max);
}

arraySumAvgMax([1, 2, 3, 4, 5]);
let arr = [10, 20, 30, 40, 50];
arraySumAvgMax(arr);

console.log('____________4. Array Objects______________');

function arrayObjects(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].grade >= 85) {
      console.log(arr[i].name + ' has an A');
    } else if (arr[i].grade >= 75) {
      console.log(arr[i].name + ' has a B');
    } else if (arr[i].grade >= 65) {
      console.log(arr[i].name + ' has a C');
    } else {
      console.log(arr[i].name + ' has a F');
    }
  }
}

const arr2 = [
  { name: 'John', grade: 80 },
  { name: 'Mike', grade: 90 },
  { name: 'Sara', grade: 65 },
  { name: 'Tom', grade: 50 },
  { name: 'Lily', grade: 100 },
];

arrayObjects(arr2);
