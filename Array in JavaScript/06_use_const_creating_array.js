
// use const for creating array 

const pi = 3.14;

// pi = 12 => error we can not assign to constant variable 
// we can not change value of constant variable because

console.log(pi);

// create constant array 

const fruits = ["apple", "mango"];
fruits.push("banana");
console.log(fruits);  // output: ['apple', 'mango', 'banana']

// if the array is constant but how elements push ??

/* 
    const fruits = ["apple", "mango"];
    
    stack memeory => fruits constat it's address create => 0x11

    heap memory => elements of fruits store  address is 0x11 => ["apple", "mango"];
    
    when we push that time only heap memory's elemnts change or update not address change

    BUT if we change to assigne new array into fruits then it show ... constant variable value not assigned 

    fruits = ["banana"]; it shows erraor 

*/


