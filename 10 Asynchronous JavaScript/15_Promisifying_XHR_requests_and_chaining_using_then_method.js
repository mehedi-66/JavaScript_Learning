
// Promisifying the XHR request using then Method

const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url){
   
    return new Promise( (resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.onload = function() {
             if(xhr.status >= 200 && xhr.status < 300)
             {
                 resolve(xhr.response);
             }
             else{
                  reject(new Error('Something went wrong'));
             }
        }

        xhr.onerror = function(){
            reject(new Error('Something went wrong'));
        }


        xhr.send();
    });
}

const whatisthis = sendRequest('GET', URL).then( (response) => {
    console.log(response);
   
    const data = JSON.parse(response);
    return data;

}).then((data) =>{
    
    const id = data[3].id;
    return id;

}).then( (id)=>{
    
    console.log(id);
    
    const url = `${URL}/${id}`;
    console.log(url);
    
    return sendRequest('GET', url); // promise

}).then( (newResponse)=>{
    
    console.log(newResponse);
    
    const newData = JSON.parse(newResponse);
    console.log(newData);

})
.catch( (err) => {
    console.log(err);
});
console.log('whatisthis', whatisthis); //promise return 
