

// typeof operator

/* 
    data types ( primitive data types )
    String
    number
    booleans
    undefined
    null
    BigInt
    symbol

*/

 let age = 23;
 let firstName = "Mehedi";

 console.log(typeof age); // output: number
 console.log(typeof firstName); // output: string


//***********  convert number to string
age = age + ""; // empty string add

console.log(typeof age); // output: string

//*************  convert string to number

let myStr = "34";

console.log(typeof myStr); // output: String

myStr = +myStr;

console.log(typeof myStr); // output: number

