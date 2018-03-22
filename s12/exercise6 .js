const assert = require('assert');
//Evaluate these:
//#1
const arrayEq = [2] === [2];
const objEq = {} === {};

assert.notEqual(arrayEq);
assert.notEqual(objEq);

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // 4
const object2 = object1; // 4
const object3 = object2; // 4
const object4 = { a: 5}; // 5
object1.a = 4;

//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.

class Animal {
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal {
    constructor(name, type, color){
        super(name, type, color);
    }
}

const cow  = new Mamal('Daisy', 'Cow', 'black & white');
cow.moo = function(){
    return this.name + ' ' + this.type + ' ' + this.color;
};

assert(cow instanceof Animal);
assert(cow instanceof Mamal);
assert.equal(cow.moo(), 'Daisy Cow black & white');
