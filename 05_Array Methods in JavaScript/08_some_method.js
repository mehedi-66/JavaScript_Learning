
// some method 

const numbers = [3, 5, 8, 9];

// can any number present in this array => even 
// true

const ans = numbers.some( (num) => num % 2 === 0);
console.log( ans ); // output: true


const userCart = [

    {productId : 1, productName : "mobile", price : 12000},
    {productId : 2, productName : "laptop", price : 22000},
    {productId : 3, productName : "tv", price : 3500000},

];

const ans1 = userCart.some( (cartItem) => cartItem.price > 100000);

console.log( ans1 ); // output: true