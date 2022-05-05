
// understand callback

// function take input as function 
function myFunc(a){
    console.log('Function is doing task 1');
    a(); // call that input function 
}

function myFunc2(){
    console.log('Function is doing task 2')
}


myFunc(myFunc2); // output: function is doing task1 
                //          function is doing task 2


// callback is that a function do its work as well as take input a function and call it as well is callback


function myFunc3( callback ) {
    callback();
}

function myfunc4(){
    console.log('call it inside the function ');
}

myFunc3(myfunc4);



