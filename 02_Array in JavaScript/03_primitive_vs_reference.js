

// primitive vs reference data types


// Primitive type

let num1 = 6;
let num2 = num1;

console.log("value is num1 is: ", num1); // 6
console.log("value is num2 is: ", num2); // 6

num1++; // increment

console.log("value is num1 is: ", num1); // 7
console.log("value is num2 is: ", num2); // 6


// Reference type
// same memory location point [memory] <= array1 && array2


let array1 = [1, 2, 3];
let array2 = array1;

console.log(array1); // [1, 2, 3]
console.log(array2); // [1, 2, 3]

array1.push(4);

// after change one both one 

console.log(array1); // [1, 2, 3, 4]
console.log(array2); // [1, 2, 3, 4]



   
