const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();
let passenger = new Person('Nikoto', 2, 5);

elevator.start(passenger);
