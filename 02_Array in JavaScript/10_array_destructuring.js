
// array destructuring

const myArray = ["value1", "value2"];

let myvar1 = myArray[0];
let myvar2 = myArray[1];

console.log(myvar1, myvar2); // output: value1 value2


// array destructuring


let [myvar3, myvar4] = myArray;

console.log(myvar3, myvar4); // output: value1 value2


let [myvar5, myvar6, ...myvarRestAll] = myArray;
// first   second    rest all 


   
