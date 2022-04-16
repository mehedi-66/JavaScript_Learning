
// how to clone array

 
let array1 = ["item1", "item2"];

let array2 = array1;

// when same memeory location indicate

console.log(array1 === array2); // true

// but 
let array3 = ["item1", "item2"];
let array4 = ["item1", "item2"];

// not same memory location 
console.log(array3 === array4); // false

// create same element array in two seperate 
let array5 = ["item1", "item2"];
let array6 = array5.slice(0);

console.log(array6); // ['item1', 'item2']

// New way to spreade operator

let array7 = [...array5];

console.log(array7); // ['item1', 'item2']


 

// how to concatenate two arrays 

// clone array means seperate memory localtion make
// using concatenate

// empty array concatenate with none empty array 
let array8 = [].concat(array1);

console.log(array8); // output: ['item1', 'item2']


// After copping elements of array and concate new elements into it

let copyWithConcate = array1.slice(0).concat(["Mehedi", "Hasan"]);

console.log(copyWithConcate); // output: ['item1', 'item2', 'Mehedi', 'Hasan']

// another way 

let copyWithConcate1 = [].concat(array1, ["Mehedi", "Hasan"]);

console.log(copyWithConcate1); // output: ['item1', 'item2', 'Mehedi', 'Hasan']

// another way 2

let copyWithConcate2 = [...array1, 'Mehedi', 'Hasan'];

console.log(copyWithConcate2); // output: ['item1', 'item2', 'Mehedi', 'Hasan'] 

