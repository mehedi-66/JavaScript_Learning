

// Introduction to Array in JavaScript

// reference type of array 

// how to create array

let fruit = "apple";

// array is a ordered collection of items

let fruits = ["apple", "mango", "grapes"];
            //  0        1         2

// change the index 
fruits[1] = "Mangoes";


console.log(fruits[0]);
console.log(fruits[1]); 

let numbers = [1, 2, 3, 4];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers);

let mixed = [1, 2, 3.5, "string", null, undefined];
console.log(mixed);

// array is object type

console.log(typeof mixed); // output: object

// check that array is acturally a array ?

let check = Array.isArray(mixed);

console.log(check); // output: true

// array is object and object literal is also object
let fruits1 = ["apple", "mango", "grapes"];
let obj = {};

console.log(typeof fruits, typeof obj); // output: object object

 let checkArray = Array.isArray(fruits1);
 let checkArrayObj = Array.isArray(obj);

 console.log(checkArray, checkArrayObj); // output: true  false


