
// block scope vs function scope 

// let and const are block scope

// var is function scope


/* 
    {
        block 1
    }

    {
        block 2
    }

*/


{
    let firstName = "Mehedi";
}

// console.log(firstName); // show error outside of scope it try to print 

{
    var lastName = "Mehedi";
}

console.log(lastName); // output: Mehedi


// block check inside function 

function myApp(){
    if(true)
    {
        let firstName = "Mehedi";
        console.log(firstName); // output: Mehedi
    }

    console.log(firstName); // it shows error
}

myApp(); 

