

// sort method
// ASCII TABLE
// char : ascii value 


// *********** sort()

// 5, 9, 1200, 400, 3000

// 5, 9, 400, 1200, 3000 (expected)

// sort method change the array elements order

const numbers = [5, 9, 1200, 400, 3000];
numbers.sort();

// JavaScript this element teat => like a string then sort => not number 

// ["5", "9", "1200", "400", "3000"]; then sort
// [53, 57,  49,    52,    51] => first digit check only 

console.log(numbers); // output: (5) [1200, 3000, 400, 5, 9]


// *********** string sort in decnoary order sorting 
// this sort() function work perfectly in string case 
// caplital letter sort first 
// Ascii value fast capital letter element


const userName = ['suchana', 'mehedi', 'Apple'];
userName.sort();

console.log(userName); // output: (3) ['Apple', 'mehedi', 'suchana']


// ****************** Try to get  expected output

numbers.sort( (a, b) =>{
    return a-b;
} );

console.log(numbers); // output: (5) [5, 9, 400, 1200, 3000]

// ************ but how 

/*
    1200, 410
    a - b => 790
    a - b => positive ( greater than 0)
    410 , 1200

    a - b => negative
    5, 9 => -4
    5, 9

*/

// ************shoping => product ==> lowTHigh, HighToLow
const products = [
    {productId: 1, productName : "p1", price: 300},
    {productId: 2, productName : "p2", price: 900},
    {productId: 3, productName : "p3", price: 100},

];

// lowToHigh

products.sort( (a, b) =>{
    return a.price - b.price;
});

console.log(products); 

/* 
    (3) [{…}, {…}, {…}]
0: {productId: 3, productName: 'p3', price: 100}
1: {productId: 1, productName: 'p1', price: 300}
2: {productId: 2, productName: 'p2', price: 900}
length: 3
[[Prototype]]: Array(0)

*/

// *************** copy the array using => sclice(0).    Method

const lowToHigh = products.slice(0).sort( (a, b) =>{
    return a.price - b.price;
});

console.log(lowToHigh);