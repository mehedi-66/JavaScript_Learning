
// setTimeout 

/* 
    setTimeout( fun, timeDelay ) function ==> take input ==> function, and time dealy 

    Now we want go to market ==> take a bag and reach to market ==>
    =>  After reach to market my mind function tigure and see that Forget my money bag at home

*/

conole.log('script start');

function hello(){
    console.log('Hello world!');
}

setTimeout(hello, 1000); // 1000 milisecond === 1 second

console.log('script End');

/* 
    output:

    Script start
    Script end
    Hello World => 1 s leter 
*/


// ***** Arrow function pass on setTimeout()

console.log('Script Start');

setTimeout( ()=>{
    
    console.log('iinside setTimeout');

}, 1000);

console.log('Script End');

/* 
    output:

    Script Start
    Script end
    inside setTimeout

*/



// ************** interview 

console.log('Script Start');

setTimeout( ()=>{
    
    console.log('iinside setTimeout');

}, 0);

for(let i = 0; i <= 100; i++)
{
    console.log('...');
}

console.log('Script End');

/* 
    output:
    
    Script Start
    100 ...
    Script End

    inside setTimeout

    NOTE: ==> when execution code line by line that setTimeout() give to WebAPI After move the exectuon to next line
          ==> when setTimeout return calback function that is store in queue
          ===> Event loop check that callstack empty or not empty
         ===> when empty callstack then Queue data goes to callstack and execute the setTimeout callback fucntion  Okay

    WebAPI: 
    return data store in Queue ==> after hole file execute the ...==> queue data goes to callstack and execute one by one queue data


*/


// **************** setTimeout give a id of WebAPI which give to setTimeout funciton

console.log('Script Start');

// store setTimeout id

const id = setTimeout( ()=>{
    
    console.log('iinside setTimeout');

}, 1000);

for(let i = 0; i <= 100; i++)
{
    console.log('...');
}


console.log('Clear setTimeout by ID');
// not run that setTimeout function 
clearTimeout(id);

console.log('Script End');

/* 
    output:
    
    Script Start
    100 ...
    clear setTimeout by ID
    Script End

*/