const assert = require ('assert');

// Solve the below problems:
// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const hasJohn = dragons.some(dragon => dragon.includes('John'));
assert(hasJohn);

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const match = dragons.filter(dragon => dragon.includes('John'));
assert.deepEqual(match, ['Johnathan']);

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
function pow100(n){
    return Math.pow(n,100);
}

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
assert.equal(pow100(10000), Number.POSITIVE_INFINITY);

