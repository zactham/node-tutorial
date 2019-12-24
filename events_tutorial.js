const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2)=> {
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1, 2);

class Person extends EventEmitter {
    var name = " ";
    constructor(n) {
        super();
        name = n;
    }

    get name () {
        return this._name;
    }
}

let zac = new Person('Zac');
let zee = new Person('Zee');
zee.on('name', ()=> {
    console.log('my name is ' + zee.name);
});
zac.on('name', ()=> {
    console.log('my name is ' + zac.name);
});

zac.emit('name');
zee.emit('name');