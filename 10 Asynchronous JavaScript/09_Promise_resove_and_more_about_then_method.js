
// Promise.resolve 
// promise chaining


const myPromise = Promise.resolve(5);
myPromise.then((value) =>{
    console.log(value); 
});


// then() method hamesha promise return

function myPromise1(){
    return new Promise((resolve,reject) =>{
        resolve('foo');
    })
}

myPromise1().then((data) => {
    console.log(data); // output: foo 
    // add 
    data += 'bar';
    return data;

    // internaly promise return 
    /* 
        return Promise.resolve( data );
    */

    // then() always returns Promise  BUT if we do not return something then it return undefined
    // return undefined
})
.then( (data) =>{
    console.log(data); // output: foobar
})




