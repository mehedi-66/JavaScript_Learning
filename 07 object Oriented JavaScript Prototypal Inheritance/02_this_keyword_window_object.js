
// this keyword and window object 

console.low(this); // window object from browser
console.log(window);  // window object from browser object


function myFunc()
{
    console.log('hello world');

    // if we print this it refers same window object from browser

    console.log(this); 
}

myFunc();  // when we call myFunc() then it is add to window o

// same 

window.myFunc(); // same output: hello world


// note if we use "staic mode" then function inside this show undefined 


