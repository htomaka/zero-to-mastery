// Complete the below questions using this array:
const assert = require ('assert');
const array = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];
//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const bangs = [];
array.forEach (( { username } ) => {
    bangs.push (`${username}!`)
});
assert.deepEqual (bangs, ['john!', 'becky!', 'susy!', 'tyson!']);
//Create an array using map that has all the usernames with a "? to each of the usernames
const qMarks = array.map (( { username } ) => `${username}?`);
assert.deepEqual (qMarks, ['john?', 'becky?', 'susy?', 'tyson?']);
//Filter the array to only include users who are on team: red
const red = array.filter (user => user.team === 'red');
/*assert.deepEqual (red, [
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    }
]);*/

//Find out the total score of all users using reduce
const total = array.reduce((acc, {score}) => acc + score, 0);
assert.equal(total, 71);
// (1), what is the value of i?
// the index of the current item
// (2), Make this map function pure:
//no side effects
//for given input always returns the same output

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map (( num, i ) => {
    return num * 2;
});
assert.deepEqual(newArray, [2,4,8,10,16,18]);
assert.deepEqual(newArray, [2,4,8,10,16,18]);
//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const users = array.map(user => {
    user.items = user.items.map(item => `${item}!`);
    return user;
});

assert.deepEqual(users[0].items, ["ball!", "book!", "pen!"]);
