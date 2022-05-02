
//*************  let and const are not hoisted ??
// let and const 
// it is hosted but not initialized and not workable
// Before ***
 
console.log(firstName);
let firstName = 'Mehedi';
console.log(lastName);


/* 

    Global memory 

    [
        window : {window}
        this : window
        firstNmae: uninitialised
    ]

    when we try to print previously before create and initialized
    it shows error 

*/