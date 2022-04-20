
// reduce method 

const numbers = [1, 2, 3, 4, 5];


// inially accumulator[0], currentValue[1] store 
// second accumulator[result] and currentValue[3]


const sum = numbers.reduce((accumulator, currentValue) =>{
        //console.log(accumulator, currentValue);
        return accumulator + currentValue;
});

console.log(sum); // 15

/* accumulator   , currentValue ,    return 
    1               2                   3
    3               3                   6
    6               4                   10
    10              5                   15
*/

// ************* we can pass insitial accumulator value => 
// 10
const sum1 = numbers.reduce((accumulator, currentValue) => {
   
    return accumulator + currentValue;

}, 10);

console.log(sum1); // output: 25



// ************** Real life example 

const userCart = [ 
    {productId : 1, productName : "moblile", price : 12000},
    {productId : 2, productName : "laptop", price : 120000},
]

const totalAmount = userCart.reduce((totalPrice, currentProduct) =>{
  
    return totalPrice + currentProduct.price;

}, 0);

console.log(totalAmount); // output: 132000

/* 
    total price,    currentProduct,     return
    0                   {currentProduct.price}                12000
*/