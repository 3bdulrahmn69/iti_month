function positiveOrNegative(num) {
  if (num >= 0) {
    return 'positive';
  } else {
    return 'negative';
  }
}

// ________________________________________

function evenOrOdd(num) {
  if (num % 2 === 0) {
    return num + ' is even';
  } else {
    return num + ' is odd';
  }
}

// ________________________________________

function ticket_price(age) {
  if (age < 12) {
    return 'Price is 5';
  } else if (age < 18) {
    return 'Price is 10';
  } else if (age < 60) {
    return 'Price is 20';
  } else if (age >= 60) {
    return 'Price is 15';
  } else {
    return ' ';
  }
}

// ________________________________________

function sum(a, b) {
  return a + b;
}

console.log('________POSITIVE OR NEGATIVE______________');

console.log(positiveOrNegative(5));
console.log(positiveOrNegative(10));
console.log(positiveOrNegative(-5));
console.log(positiveOrNegative(0));

console.log('________EVEN OR ODD______________');

console.log(evenOrOdd(5));
console.log(evenOrOdd(10));
console.log(evenOrOdd(-5));
console.log(evenOrOdd(0));

console.log('________TICKET PRICE______________');

console.log(ticket_price(5));
console.log(ticket_price(10));
console.log(ticket_price(20));
console.log(ticket_price(60));
console.log(ticket_price(70));

console.log('________ SUM ______________');

console.log(sum(5, 10));
console.log(sum(10, 10));
console.log(sum(5, 5));
console.log(sum(0, 0));

console.log('_________FOR LOOP_____________');

for (let i = 0; i < 15; i++) {
  console.log(evenOrOdd(i));
}
