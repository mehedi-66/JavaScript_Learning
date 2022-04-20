

//**********  hoisting in function 


// it is work in function declearation only => but it is not work in function expression
// up call then also work but why ??

hello(); 

function hello()
{
    console.log("hello world");
}


// bellow  call it is work
hello();  


// *************  function expression not working upper call (-_-)

hello2();

const hello2 = function()
{
    console.log("hello");
}

// not print coz error for hosting not happend here in case of => expression or array function

hello2(); 

console.log("Mehedi");


console.log(hello); // in case of var it show undefined but let case show error to previously print 
let hello = "hello world";
console.log(hello);