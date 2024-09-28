class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  personInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`;
  }
}

let person1 = new Person('AHmed', 30, 'Egypt');
console.log(person1.personInfo());

let person2 = new Person('Mohamed', 25, 'Canada');
console.log(person2.personInfo());

// ______________________________________________________________________________________
console.log(
  '______________________________________________________________________________________'
);

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calcArea() {
    return this.width * this.height;
  }
  calcPerimeter() {
    return 2 * (this.width + this.height);
  }
}

let rect1 = new Rectangle(10, 5);
console.log(rect1.calcArea());

let rect2 = new Rectangle(20, 10);
console.log(rect2.calcPerimeter());

// ______________________________________________________________________________________
console.log(
  '______________________________________________________________________________________'
);

class Employee {
  constructor(name, salary) {
    if (this.constructor === Employee) {
      throw new Error(
        'Abstract class Employee cannot be instantiated directly.'
      );
    }
    this.name = name;
    this.salary = salary;
  }
  annualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
  annualSalary() {
    return super.annualSalary() + 5000;
  }
}

const manager1 = new Manager('Mohamed', 9000, 'Frontend');
const manager2 = new Manager('Ahmed', 8000, 'Backend');

console.log(manager1.annualSalary());
console.log(manager2.annualSalary());

// ______________________________________________________________________________________
console.log(
  '______________________________________________________________________________________'
);

let arrToDistraction = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [first, , , , , , , , , last] = arrToDistraction;

console.log(first);
console.log(last);
