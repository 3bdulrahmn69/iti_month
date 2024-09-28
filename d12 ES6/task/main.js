// ______________1. function and operator______________
function calcE(operator, numbers) {
  let result = numbers[0]; // when setting the result to the first number, we can avoid * and / errors

  for (let i = 1; i < numbers.length; i++) {
    if (operator === '+') {
      result += numbers[i];
    } else if (operator === '-') {
      result -= numbers[i];
    } else if (operator === '*') {
      result *= numbers[i];
    } else if (operator === '/') {
      result /= numbers[i];
    }
  }

  return result;
}

function calcEe(operator, ...numbers) {
  let result = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (operator === '+') {
      result += numbers[i];
    } else if (operator === '-') {
      result -= numbers[i];
    } else if (operator === '*') {
      result *= numbers[i];
    } else if (operator === '/') {
      result /= numbers[i];
    }
  }

  return result;
}

let numbersS = [1, 2, 3, 4, 5];
console.log(calcE('+', numbersS));

let numbers = [];

document.getElementById('addNum').addEventListener('click', () => {
  const num11 = document.getElementById('num11');
  if (num11.value === '') {
    console.log('empty');
    return;
  }

  numbers.push(parseInt(num11.value));
  console.log(numbers);

  document.getElementById('section').innerHTML = numbers.join('&nbsp;');
  num11.value = '';
});

document.getElementById('calculate').addEventListener('click', () => {
  const operator = document.getElementById('operator').value;

  const result = document.getElementById('result1');
  result.innerText = '';
  // result.innerText = calcE(operator, numbers);
  result.innerText = calcEe(operator, ...numbers);
});

// ______________2. Mix tow arrays______________

function mixArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
document.getElementById('mix').addEventListener('click', () => {
  const arr1 = document.getElementById('array1').value.split(',');
  const arr2 = document.getElementById('array2').value.split(',');
  const result = document.getElementById('result2');

  let re = mixArrays(arr1, arr2);

  result.innerText = re;
  console.log(re);
});

// ______________3. print user name and age ______________

function printUser(firstName, lastName, age) {
  return `hey i'm ${firstName} ${lastName} and i'm ${age} years old`;
}

document.getElementById('print').addEventListener('click', () => {
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const age = document.getElementById('age');
  const result = document.getElementById('result3');
  result.innerText = printUser(firstName.value, lastName.value, age.value);
});

// ______________4. print user name and age ______________

function printWords(...words) {
  return words.join(' ');
}

let wordsArray = [];

document.getElementById('addWo').addEventListener('click', () => {
  const word = document.getElementById('word').value;
  if (word === '') {
    console.log('empty');
    return;
  }

  wordsArray.push(word);

  const section2 = document.getElementById('section2');
  section2.innerText = wordsArray.join(' ') + ' ';

  document.getElementById('word').value = '';
});

document.getElementById('string').addEventListener('click', () => {
  const result = document.getElementById('result4');
  const words = document.getElementById('section2').innerText.split(' ');
  console.log(words);

  result.innerText = printWords(...words);
});

// ______________5. function that takes two parameters from user _____________

function calcNumbers(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  if (!num1 || !num2) {
    return 0;
  }

  return `sum = ${num1 + num2}
          sub = ${num1 - num2}
          mul = ${num1 * num2}
          div = ${(num1 / num2).toFixed(2)}`;
}

document.getElementById('done').addEventListener('click', () => {
  const num1d = document.getElementById('num1d').value;
  const num2d = document.getElementById('num2d').value;
  const result5 = document.getElementById('result5');

  result5.innerText = calcNumbers(num1d, num2d);
});
