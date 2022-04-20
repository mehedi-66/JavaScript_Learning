
// every method

const numbers = [2, 4, 6, 8, 10];

// we have to find each elements of array even ?? => like this condition apply

const ans = numbers.every( (num) => {
    return num % 2 === 0;
} );

// calback function return  => true or false

 // every method return => true or false as well

 console.log( ans ); // output: true



 // *********** real example 

 const userCart = [

        {productId : 1, productName : 'mobile', price : 1200},
        {productId : 2, productName : 'laptop', price : 20000},
        {productId : 3, productName : 'tv', price : 12000},
 ];

 // check => each product price gratter then 10000 the return true

 const ans1 = userCart.every( (cartItem) => {
     return cartItem.price > 500;
 });

 console.log( ans1 ); //output: true 


 