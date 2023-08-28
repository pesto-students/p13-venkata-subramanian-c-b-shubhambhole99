// Protecting the Object

const person = {
    _name: "John",
    _age: 0,
    _email: "john@example.com",
    
    get name() {
        return this._name;
    },
    
    get email() {
        return this._email;
    },
    
    set age(newAge) {
        this._age = newAge;
    },
    
    getAge() {
        return this._age;
    },
    
    setAge(newAge) {
        this._age = newAge;
    }
};

console.log("Initial name:", person.name);
console.log("Initial email:", person.email);
person.age = 30;
console.log("Age set to:", person.getAge());
person.setAge(25);
console.log("Age set using setAge():", person.getAge());



function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Vehicle.prototype.getDetails = function() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
};

function Car(make, model, year, numDoors) {
    Vehicle.call(this, make, model, year);
    this.numDoors = numDoors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.getDetails = function() {
    return `${Vehicle.prototype.getDetails.call(this)}, Num Doors: ${this.numDoors}`;
};

const vehicleInstance = new Vehicle("Toyota", "Camry", 2022);
const carInstance = new Car("Ford", "Mustang", 2021, 2);

console.log("Vehicle details:", vehicleInstance.getDetails());
console.log("Car details:", carInstance.getDetails());
