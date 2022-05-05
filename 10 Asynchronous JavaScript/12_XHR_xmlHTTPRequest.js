
// XHR === xmlHTTPRequest

const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();
console.log(xhr); // output: object ==> XMLHttpRequest {onreadystatechange: null, readyState: 0, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}

// step1
// this task work in asyncronously happend ... work do the broswer webAPI

console.log(xhr.readyState); // output: 0

xhr.open('GET', URL);

console.log(xhr.readyState); // output:1


xhr.onreadystatechange = function(){
    
    console.log(xhr); // this function do work in four time
    console.log(xhr.readyState); // output: 2 3 4

    if(xhr.readyState === 4){
        // when the readyState is 4 then respnse we get the

        console.log(xhr); // we see the response
        
        console.log(xhr.response); // json file all text we get
        
        console.log(typeof xhr.response); // output: string
        
        // we parse this stirng and make javascript object
        const data = JSON.parse(xhr.response); 
        console.log(data); // object data we get  from response base on the request
    }
}

// simply we can use onload instade of onreadystatechange
// then this onload function run  redyState === 4
xhr.onload = function() {

    console.log(xhr.readyState) // output: 4
    const response = xhr.response;
    const data = JSON.parse(respnse); // we get the javascript object data from respnse 
}

xhr.send();
