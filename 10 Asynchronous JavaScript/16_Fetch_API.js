
// Fetch API 

const URL = "https://jsonplaceholder.typicode.com/posts";

// by default GET method use 
// fetch return a promise

fetch(URL)
    .then( (response) =>{
        // after resolve Promise
        console.log(response); // object we found
        console.log(response.json()); // return a Promise
        
        // pass the promise 
        // if the 404 error ocured then() run means the response come
        // ok value when true => if the response send is okay 
        if(response.ok)
        {
            return response.json();
        }
        else{
            throw new Error('something went wrong');
        }
        
    })
    .then( (data) =>{
        // we get the data object
        console.log(data); 

    })
    .catch( (err) =>{
        console.log('inside catch');
        console.log(err);
    });


// ******************* Method POST pass object with extra info inside ===> fetch(url, {});

fetch(URL, { 
    mthod: 'POST',
    body : JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers : {
        'content-type': 'application/json; charset=UTF-8',

    }
})
.then( (response) => {

})