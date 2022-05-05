
// promise 

// future value

// promise is unknow value ... which is not know right now ==> After certain taks we get those value or data 

/*
    Example:
    
    Supposed I promise ==> to make FrideRice

    current ==> status: pending
                value: undefined 

    I went to chitchen ans see that ===> vagetables, salt, rice 

    Then I cooked and return back:

    now current ===> status: fullfil
                    value: FrideRice

*/

console.log('Script Start');

const bucket = ['coffe', 'chips', 'vegetables', 'salt', 'rice'];

//new Promise(executorFunction()=>{});

// produce the Promise

const firedRicePromise = new Promise((resolve, reject)=>{
    if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')){
       
        // anything we can pass ==> array, object, string, function 
        resolve('Fride Rice');
    }
    else{
        reject('could not do it'); 
    }
});


// consume 
// how to consume 

// promise.then((resolveValue)=>{}, (rejectValue)=>{})

firedRicePromise.then( 
    (myFrideRice)=> {
       console.log('lets eat ', myFrideRice);
    }, 
    (error)=>{
       console.log('error');
    }
);


// *********** we can chaing by chathc => like try{} catch{}
// if resolve then work  ==> if not reject catch work

firedRicePromise.then( (data)=>{
    
    console.log(data);

}).catch( (error)=>{
    console.log(error);
})



// *************** Promise is a asynchronous Task
// prove that

for(let i = 0; i <= 5; i++)
{
    console.log(Math.random(), i); 
}

console.log('Script End');


/* 
    output: 

    Script Start
    
    0.10202 0
    0.1229 1
    0.0202 2
    0.2929 3
    0.1102 4
    0.2002 5
    
    Script end

    lets eat FriedRice
    FrideRice

*/


/* 
    promise is micro Task queue 

    Queue two type:
    1) callback Queue
    2) micro Task Queue

    supposed two thing happend ==> callback 
    and promise 

    then After done its work ==> at same time come two thins in queue

    callback queue
    microtask queue

    eventloop serve first ==> microtaks queue fast 
*/




