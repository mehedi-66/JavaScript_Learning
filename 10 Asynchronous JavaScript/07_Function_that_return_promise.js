

// function returning promise 

const bucket = ['mango', 'vagetables', 'salt', 'rice'];


function ricePromise(){ 

    const firedRicePromise = new Promise((resolve, reject)=>{
        if(bucket.includes('vagetables') && bucket.includes('salt') && bucket.includes('rice'))
        {
            // we can pass anythings => array, object, string

            resolve('Good you make Fride Rice');
        }
        else{
            reject('does not make that');
        }
    });

    return firedRicePromise;

}



// consume simplly call 

  ricePromise().then( (data)=>{

    console.log(data);
  
}).catch( (err)=>{

    console.log(err);

})

/*
    output:
    Good you make Fride Rice
*/
