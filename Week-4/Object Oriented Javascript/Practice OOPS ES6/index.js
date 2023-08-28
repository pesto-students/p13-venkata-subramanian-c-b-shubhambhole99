// Section 1 Inheritance
// Base Vehicle class
class Vehicle {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive() {
        console.log(`Driving ${this.make} ${this.model}.`);
    }
}

// Subclass Car extending Vehicle
class Car extends Vehicle {
    constructor(make, model, year, color, numSeats) {
        super(make, model, year, color);
        this.numSeats = numSeats;
    }
}

// Subclass RideShareCar extending Car
class RideShareCar extends Car {
    constructor(make, model, year, color, numSeats, isAvailable) {
        super(make, model, year, color, numSeats);
        this.isAvailable = isAvailable;
    }
}

// Example usage
const regularCar = new Car("Toyota", "Camry", 2022, "Silver", 5);
regularCar.drive();
console.log(regularCar);

const rideShareCar = new RideShareCar("Uber", "XL", 2021, "Black", 7, true);
rideShareCar.drive();
console.log(rideShareCar);

// Section 2 Polymorphism
// Base Shape class
class Shape {
    calculateArea() {
        // This method will be overridden by subclasses
    }
}

// Subclass Rectangle extending Shape
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

// Subclass Triangle extending Shape
class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return (this.base * this.height) / 2;
    }
}

// Subclass Circle extending Shape
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

// Example usage
const rectangle = new Rectangle(5, 10);
console.log("Rectangle area:", rectangle.calculateArea());

const triangle = new Triangle(4, 6);
console.log("Triangle area:", triangle.calculateArea());

const circle = new Circle(3);
console.log("Circle area:", circle.calculateArea());


// Section 3 Abstraction and Encapsulation
class BankAccount {
    #accountNumber;
    #balance;
    #accountHolderName;

    constructor(accountNumber, balance, accountHolderName) {
        this.#accountNumber = accountNumber;
        this.#balance = balance;
        this.#accountHolderName = accountHolderName;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(amount) {
        this.#balance = amount;
    }
}

class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
        super(accountNumber, balance, accountHolderName);
    }

    deposit(amount) {
        this.setBalance(this.getBalance() + amount);
    }

    withdraw(amount) {
        if (this.getBalance() >= amount) {
            this.setBalance(this.getBalance() - amount);
        } else {
            console.log("Withdrawal failed: Insufficient balance.");
        }
    }
}

class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
        super(accountNumber, balance, accountHolderName);
    }

    deposit(amount) {
        this.setBalance(this.getBalance() + amount);
    }

    withdraw(amount) {
        if (this.getBalance() - amount >= 0) {
            this.setBalance(this.getBalance() - amount);
        } else {
            console.log("Withdrawal failed: Insufficient balance.");
        }
    }
}

// Example usage
const checking = new CheckingAccount("123456", 1000, "John Doe");
const savings = new SavingsAccount("789012", 500, "Jane Smith");

console.log("Initial balance in Checking Account:", checking.getBalance());
checking.deposit(200);
checking.withdraw(300);
console.log("Balance in Checking Account after transactions:", checking.getBalance());

console.log("Initial balance in Savings Account:", savings.getBalance());
savings.deposit(100);
savings.withdraw(700);
console.log("Balance in Savings Account after transactions:", savings.getBalance());
