

// compilation 
// code execution 


// why compilation 

// how javascript code executes 


// what is global exection context ?
// wht is local execution context ?
// closures  

// ***************************************

/* 
    1) compile 
    2) execute

    why javascript need compile first => 
     1) early error chacking 
     2) determine varivale scope fast 

*/


// two more things print
console.log(this);
console.log(window);

console.log(firstName);

// declear down and print upper 

var firstName = 'Mehedi';



// JavaScript is itself => Synchronous progrmming language 

// --------- code execution pahase in JS code executes inside Execution Context 

// Execution context => Global Execturion Context 

/* Global execution Context 
    1) creation phase
    2) code Executon Phase

    1) creation phase
    First time when creatring phase active then the memory store the global variable and this and window inside the => creatrtion phase or global memory 
    [
        window => {} itself
        firstName => undefined
        this : window
    ]

    2) code Execution phase 
    [
        synchonous progrming language
        single thread language 
    ]

*/
     

