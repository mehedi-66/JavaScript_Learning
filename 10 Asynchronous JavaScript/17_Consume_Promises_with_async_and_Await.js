
// Asyn and wait

const URL = "https://jsonplaceholder.typicode.com/posts";

// async function always return Promise

// awit use to until the promise is return resolved and reject

async function getPosts(){

    // response wait until the fetch function gives the resolve reject value 
     const response = await fetch(URL);

     if( !response.ok){
         throw new Error('Something went wrong');
     }
     // After get the resolve and reject value
    console.log(response); 

    const data = await response.json();

    return data;
}

const returned = getPosts().then( (mydata) =>{
       
    console.log(mydata);

}).catch( (err)=>{
    console.log(err);
});

console.log(returned); // output: Promise






// ****** extra 

fetch(URL)
    .then((response) =>{
        return response.json();
    })
    .then( (data) =>{
        console.log(data);
    })