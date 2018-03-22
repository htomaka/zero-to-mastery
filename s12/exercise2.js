/**
 * Created by htomaka on 21/03/18.
 */
const assert = require('assert');
//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    return winBattle () ? 10 : 1;
}


//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommant("forward");
// undefined
//#3 return value when moveCommant("back");
// you arrived home
//#4 return value when moveCommant("right");
//you found a river
//#5 return value when moveCommant("left");
// undefined
//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!


function cry(){
    return 'you cry';
}

function laugh(){
    return 'you laugh';
}

function shout(){
    return 'you shout';
}

function getReaction(mood){
    let reaction;
    switch(mood){
        case 'sad':
            reaction = cry();
            break;
        case 'happy':
            reaction = laugh();
            break;
        case 'angry':
            reaction = shout();
            break;
        default:
            reaction = 'you are zen';
            break;
    }
    return reaction;
}

assert.equal(getReaction('sad'), 'you cry');
assert.equal(getReaction('happy'), 'you laugh');
assert.equal(getReaction('angry'), 'you shout');
assert.equal(getReaction(), 'you are zen');
