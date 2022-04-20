

// ********** lexical scope 

function myApp()
{

    const myVar = "value1";

    function myFunc(){}
    const myFunc2 = function(){}
    const myFunc3 = () =>{}
    
    console.log(myVar);
}

myApp(); // output: value1 


// ************* inside function call and value print of local value 
function myApp1()
{

    const myVar = "value1";

    function myFunc(){
        const myVar = "value100";
        console.log("inside myFuc " + myVar);
    }
    
    
    console.log(myVar);
    myFunc();
}

myApp1(); 

/* 
    output:
    value1
    inside myFunc value100
*/

// ********** check imidate gobal myApp2
function myApp2()
{

    const myVar = "value1";

    function myFunc(){
        // const myVar = "value100";
        console.log("inside myFucntion " + myVar);
    }
    
    
    console.log(myVar);
    myFunc();
}

myApp2(); 

/* 
    output:
    value1
    inside myFunc value1
*/

// **************** Check upper imidate gobal to find the variable value

const myVar = "value1";

function myApp3()
{

    // const myVar = "value1";

    function myFunc(){
        // const myVar = "value100";
        console.log("inside myFucntion " + myVar);
    }
    
    
    console.log(myVar);
    myFunc();
}

myApp3(); 

/* 
    output:
    value1
    inside myFunction value1
*/

// this is lexial scope 