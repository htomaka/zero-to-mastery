// Solve the below problems:
var assert = require ('assert');
// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

const pad = startLine.split('<')[0].length;

turtle = turtle.padStart(pad + turtle.length);
rabbit = rabbit.padStart(pad + rabbit.length);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
assert.equal(startLine, '     ||<- Start line');
assert.equal(turtle, '       🐢');
assert.equal(rabbit, '       🐇');


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
assert.equal(turtle, '🐢=======');


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
};
// to this: 'my name is Rudolf the raindeer'

function concatObj(obj){
  return Object.keys(obj)
      .map(key => {
          return `${key} ${obj[key]}`;
      })
      .join(' ');
}

assert.equal(concatObj(obj), 'my name is Rudolf the raindeer');
