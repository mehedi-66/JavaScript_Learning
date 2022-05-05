
// synchronous programming vs asynchronous programming

// ************* javaScript Synchronous programming language and single threaded

// synchronous programming

/* 
    step by step not skip 
    After one task finish then go to next task

*/

console.log('script start');

for(let i = 0; i < 10000; i++)
{
    console.log('inside for loop');
}

console.log('script end');

/*
    someting this one after another blocking behaviour can be costly => that time 
    we need somthing to track the execution but not blocking the execution
    
    *********** Asynchronous **********
    when we need data from database that time 
    
    ==> data come from database but not wait execution 
    ==> when data come it will work on data no problem 

*/