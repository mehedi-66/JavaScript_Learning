
// Error handling in xmlHTTPRequest XHR

const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open('GET', URL);

// get response based on the request
xhr.onload = ()=>{
    if(xhr.status >= 200 && xhr.status < 300)
    {
        const data = JSON.parse(xhr.response);
        console.log(data); 
    }
    else{
        console.assert('somthing went wrong');
    }
   
}

// if any network error happend that time this functon call the browser ... 
xhr.onerror = ()=>{
    console.log('network error');
}

xhr.send();