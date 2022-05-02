

// closures
// closure : 30 - 40 %
// analyse : 70 - 80 %
// real example : 100 % 


// function can return functions


function myFunc()
{
    // return array, object anythings
    return 1;
}

const ans = myFunc();

console.log(ans); // ouput: 1


 function myFunc2()
 {
    // return function 
    function a(){
        console.log('hi Mehedi');
    }
    
    return a;
 }

 const ans1 = myFunc2();
 console.log(ans1); 
 
/* 
    ouput:
    ƒ a(){
        console.log('hi Mehedi');
    } 
 */


// ****************** Closuer Introduction 

/*
    key point => When a function inside => return function
                that time the return function return local memory store variable and data as well 

*/


function printFullName(firstName, lastName){

        function print(){
            console.log(`${firstName} ${lastName}`)
        }

    return print;
}

const ans3 = printFullName('Mehedi', 'Hasan');

ans3(); // ouput: Mehedi Hasan












