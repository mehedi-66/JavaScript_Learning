

// array push  pop

let fruits = ["apple", "mango", "grapes"];
 
// push => add element in the last

fruits.push("Mehedi");

console.log(fruits); // output: ['apple', 'mango', 'grapes', 'Mehedi']


// pop => remove last elemet and return as well
let last = fruits.pop();
console.log(last); // output: Mehedi
console.log(fruits); // output: ['apple', 'mango', 'grapes']



// array shift unshift

// starting position add element using unshift

let player = ["hasan", "suchana", "Mehedi"];

player.unshift("Mehedi");

console.log(player); // output: ['Mehedi', 'hasan', 'suchana', 'Mehedi']

// removsing element from fornt side 
// and return it
let first = player.shift();
console.log(first); // output: Mehedi
console.log(player); // output: ['hasan', 'suchana', 'Mehedi']