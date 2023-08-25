// Calculator class
class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            throw new Error("Division by zero is not allowed.");
        }
    }
}

// ScientificCalculator class extending Calculator
class ScientificCalculator extends Calculator {
    square(num) {
        return num * num;
    }

    cube(num) {
        return num * num * num;
    }

    power(base, exponent) {
        return Math.pow(base, exponent);
    }
}
// Instance
const scien=new ScientificCalculator();

// call
const add=scien.add.call(scien,10,5);
console.log(add)


//apply
const args=[10,5]
const subtract=Calculator.prototype.subtract.apply(scien,args);
console.log(subtract)

//divide
const divide=scien.divide.bind(scien,10,5);
console.log(divide())