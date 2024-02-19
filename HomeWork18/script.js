class Person{
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    getInfo =  function () {
        return `Person name: ${this.name}.\nPerson age: ${this.age}.`;
    }
}

class Car{
    constructor(brand, model, year, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
    }
    setPerson = function (person) {
        if (person.age >= 18 )
            this.person = person;
        else
            return 'The owner is under 18';
    }
    getInfo = function () {
         return `Information about the car:\nСar brand: ${this.brand}.\nСar model: ${this.model}.\nСar year: ${this.year}.\nСar license plate: ${this.licensePlate}.\nInformation about the owner:\n${this.person ? this.person.getInfo() : 'The owner is under 18'}`;
    }
}

let vadym = new Person('Vadym', 23);
//console.log(vadym.getInfo());
let jetta = new Car('Volkswagen', 'Jetta', 2019, 'AA6377EM');
jetta.setPerson(vadym);
console.log(jetta.getInfo());


let roma = new Person('Roma', 17);
//console.log(roma.getInfo());
let ford = new Car('Ford', 'Focus', 2013, 'AC5368EX');
ford.setPerson(roma);
console.log(ford.getInfo());
