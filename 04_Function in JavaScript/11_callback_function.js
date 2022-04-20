
// callback function


function myFunc(a)
{

    console.log(a);

    console.log("hello world");
}


// we can pass object

myFunc({Name: "Mehedi"});

/* 
    output:
    {Name: 'Mehedi'}
    hello world
*/


// *************** we can pass function inside the function

function passFunc(a)
{
    // whole function take now we can call that function 
    console.log(a);
}

// create a function to pass function

function  f()
{
    console.log("Mehedi Hi");
}

// call with function arguments

passFunc(f);

/* 
    output:
    ƒ f()
    {
         console.log("Mehedi Hi");
    }
*/


// ****************** function pass into another function then we can be call it

function myFunc3(a)
{
    // call taking function from here
    a();
}

function myf()
{
    console.log("Hi Mehedi");
}

myFunc3( myf ); // ouput: Hi Mehedi


// *********** when we get function as parameter it is a convention to put name as => callback

function myFunc5( callback ) 
{
    // call taking function 
    callback();
}

function myF2()
{
    console.log("Mehedi is good boy");
}

myFunc5( myF2 ); // ouput: Mehedi is good boy