

// undefined
// null
// BigInt

// if only create variable not initialize
 let firstName;

 console.log(typeof firstName); // output: undefined

firstName = "Mehedi";

console.log(typeof firstName, firstName); // output: string, Mehedi


// myVariable
let myVariable = null;
console.log(typeof myVariable); // output: null

myVariable = "Mehedi";

console.log(typeof myVariable, myVariable); // output: string, Mehedi

// BigInt
let myNUmber = 1234;
console.log(myNUmber);

// limit of integer

console.log(Number.MAX_SAFE_INTEGER); // output: 9007199254740991

let myBigInt = BigInt(1222020202002);
let myBigInt2 = 10203930n;

console.log(myBigInt, myBigInt2);

// output: 1222020202002n   10203930n
