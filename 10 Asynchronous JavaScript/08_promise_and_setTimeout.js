
// promise and setTimeout 

// I want to resolve / reject promise after 2 seconds

function myPromise(){

    return new Promise( (resolve, reject)=>{
        const value = true;
        setTimeout(()=>{
            if(value){
                resolve();
            }
            else{
                reject();
            }
        }, 2000);
    });
}

// consume

myPromise()
    .then(()=>{console.log('resolved promise')})
    .catch( ()=>{console.log('Rejected promise')});


/* 
    output:
    resolved promise

*/