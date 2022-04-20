
// filter Method in JavaScript

// take a callback function return array

// the callback function return true or false ... this is deciden which elements stroe in new Array

const numbers = [1, 3, 2, 6, 4, 8];

const isEven = function(number)
{
     // is retrun true or false
    return number % 2 ===  0;
}

const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers); // output: (4) [2, 6, 4, 8]


//*********************** inside function

const isOdd = numbers.filter((num) =>{
    return num % 2 !== 0;
});

console.log(isOdd); // output: (2) [1, 3]

