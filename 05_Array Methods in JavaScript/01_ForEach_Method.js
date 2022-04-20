

// ********** Important array methods 

// forEach 
// map 
// filter
// reduce 


// create array 

const numbers = [4, 2, 5, 8];

function multiplyBy2(number, index)
{
    console.log("index is: ",  index);
    console.log(number * 2);
}

multiplyBy2(numbers[0], 0); // output: index is 0 => 8

// every index we have to do same work 

for(let i = 0; i < numbers.length; i++)
{
    //console.log(i);
    multiplyBy2(numbers[i], i);
}

/* 
    output:
    index 0 => 8
    index 1 => 4
    index 2 => 10
    index 3 => 16

*/



// ************** Now simplty travers this full array and do somthig with value and index (+, -, *, / .....)

// forEach take input as callback 

function myFunc(num, index)
{
    console.log(`index is ${index} number is ${num}`);
}

numbers.forEach(myFunc);

// forEach auto pass a (num, index) =>  from numbers Array to myFunc

/* 
    output:
    index is 0 number is 4
    index is 1 number is 2
    index is 2 number is 5
    index is 3 number is 8

*/


// ************ calback function declear inside the forEach loop
// anneomous function => without name

// the function take two parameters (num, index);

numbers.forEach(function(num, index){
    console.log(`index is ${index} number is ${num}`);
}); 

/* 
    output:
    index is 0 number is 4
    index is 1 number is 2
    index is 2 number is 5
    index is 3 number is 8
*/

// *********** we can pass only on paramer only taken values form array 

numbers.forEach((num) => {
    console.log(`number is ${num}`);
});
  
/* 
    output:
    number is 4
    number is 2
    number is 5
    number is 8
*/

// ******** multiply number with 2

numbers.forEach((num) => {
    console.log(num*2);
});

/*
    output:
    8
    4
    10
    16
*/


// *********** Real life use 

const users = [
    {firstName: "Mehedi", age : 23},
    {firstName: "Suchana", age: 20},
]

// we have to print only firstName of this object

users.forEach((user) =>{
    console.log(user.firstName);
});

/* 
    output:
    Mehedi
    suchana
*/

// ****** we can do same task using => for of loop

for(let user of users)
{
    console.log(user.firstName);
}

/* 
    ouput:
    Mehedi
    Suchana
*/


