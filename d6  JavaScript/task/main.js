console.log('_________1: FizzBuzz_________');

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('FizzBuzz');
  } else if (num % 3 === 0) {
    console.log('Fizz');
  } else if (num % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(num);
  }
}

for (let i = 1; i <= 45; i++) {
  fizzBuzz(i);
}

console.log('_________2: handle name and age_________');

function handleNameAndAge(fullName, age) {
  if (isFinite(age) && age.length > 0) {
    if (age <= 21) {
      console.log('You must be above 21');
    } else {
      console.log('Welcome ' + fullName.split(' ')[0]);
    }
  } else {
    console.log('invalid info');
  }
}

// let fullName = prompt('Enter your name');
// let age = prompt('Enter your age');
// handleNameAndAge(fullName, age);

console.log('_________3: Number or String_________');

function numberOrString(input) {
  if (typeof input === 'number') {
    console.log('Number');
  } else if (typeof input === 'string') {
    console.log('String');
  } else {
    console.log('Invalid input');
  }
}

// let input = prompt('Enter a number or a string');
// numberOrString(input);

console.log('_________4: calculator_________');

function calculator(num1, num2, operator) {
  console.log(eval(num1 + operator + num2));
}

// let num1 = prompt('Enter first number');
// let num2 = prompt('Enter second number');
// let operator = prompt('Enter operator');
// calculator(num1, num2, operator);
