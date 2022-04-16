

// for of loop array 

const fruits = ["apple", "mango"];

for(let fruit of fruits) {
    console.log(fruit);
}

/* 
    for of loop work like tradition for loop 
    this loop run ... length times

    output:

    apple
    mango

*/

// store upperCase elements in new array using => for of  loop

const upperCase = [];

for(let fruit of fruits)
{
    upperCase.push(fruit.toUpperCase());
}

console.log(upperCase); // output:  ['APPLE', 'MANGO']




