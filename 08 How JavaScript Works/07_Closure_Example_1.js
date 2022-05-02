
// *********** Closure Example 1 

/* 
    When return a function from insdie the function that time 
    it will return it's lexical scope as well  => function inside local memory as well

    hello() it's local memory => 
    [
        a
        b
        x 
    ]

    when return the function () then => a, b, x with return as well
*/

function hello(x){
    const a = 'varA';
    const b = 'varB';
    return function(){
        console.log(a, b, x);
    }
}

const ans = hello('arg');

// takeing data from lexical environment

ans(); // output: varA varB arg