
// XHR_request_chaining
// one after another request come and work 

// supposed we need all the data in object after that search on the data by specific id

const URL = "https://jsonplaceholder.typicode.come/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

xhr.onload = () =>{
    if(xhr.status >= 200 && xhr.status < 300)
    {
        const data = JSON.parse(xhr.response);
        // console.log(data);
        //const id = data[3]; // all id 3 object come
        // but we need the data id only 
        const id = data[3].id;

        // this we we pass the url 
        // https://jsonplaceholder.typicode.com/posts/id

        const xhr2 = new XMLHttpRequest();
        const URL2 = `${URL}/${id}`;
        console.log(URL2); 

        xhr2.open("GET", URL2);
        xhr2.onload = ()=>{
            const data2 = JSON.parse(xhr2.response);
            console.log(data2); // only specific data2 print
        };
        xhr2.send();
    }
}