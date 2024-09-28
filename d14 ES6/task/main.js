// _________________1. Set _______________________
let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add('Hi');
mySet.add(3);

console.log(mySet);

console.log(mySet.has(2));
console.log(mySet.has('hi'));

mySet.delete(1);
console.log(mySet);

mySet.clear();
console.log(mySet);

// _________________2. array to set _______________________
console.log('______________________________________________________');

let myArr = [1, 2, 8, 5, 2];

let myArrSet = new Set(myArr);

console.log(myArrSet);

// _________________3. Set of fruits_______________________
console.log('______________________________________________________');

let fruits = new Set(['Apple', 'Banana', 'Mango']);

fruits.forEach((fruit) => {
  console.log(fruit);
});

console.log('___Other way___');

for (let fruit of fruits) {
  console.log(fruit);
}

// _________________4. two sets_______________________
console.log('______________________________________________________');

let setA = new Set([1, 2, 3]);
let setB = new Set([3, 4, 5]);
// let union = new Set([...setA, ...setB]);

function union(setA, setB) {
  let union = new Set(setA);

  for (let elem of setB) {
    union.add(elem);
  }

  return union;
}

console.log(union(setA, setB));

// _________________5. two sets "elements in both of them"_______________________
console.log('______________________________________________________');

let setOne = new Set([1, 2, 3]);
let setTwo = new Set([3, 2, 5]);
// let intersection = new Set([...setA].filter((x) => setB.has(x)));

function intersection(setA, setB) {
  let intersection = new Set();

  for (let elem of setB) {
    if (setA.has(elem)) {
      intersection.add(elem);
    }
  }

  return intersection;
}

console.log(intersection(setOne, setTwo));

// _________________6. map______________________
console.log('______________________________________________________');

let myMap = new Map();

myMap.set('name', 'John');
myMap.set('age', 25);

console.log(myMap.get('name'));
console.log(myMap.has('age'));

myMap.delete('name');
myMap.clear();

// _________________7. map multiple 3 way______________________
console.log('______________________________________________________');

let students = new Map();

students.set('Ahmed', 25);
students.set('Jane', 22);
students.set('Doe', 30);

for (let [key, value] of students) {
  console.log(key + ' is ' + value + ' years old');
}

console.log('___Other way___');

students.forEach((value, key) => {
  console.log(key + ' is ' + value + ' years old');
});

console.log('___Other way___');

for (let item of students) {
  console.log(item[0] + ' is ' + item[1] + ' years old');
}

// _________________8.Map employeeData______________________
console.log('______________________________________________________');

let employeeData = new Map();

employeeData.set('1', { name: 'Saher', salary: 50000 });
employeeData.set('2', { name: 'Ali', salary: 60000 });
employeeData.set('3', { name: 'John', salary: 70000 });

function getEmployeeInfo(id) {
  let data = employeeData.get(id);
  return data.name + ' | ' + data.salary;
}

console.log(getEmployeeInfo('1'));
