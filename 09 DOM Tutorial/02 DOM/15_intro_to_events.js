
// intro to events
// click 
// button press 
// mouse hover

// ************ click 

/* 
    Inside the html tag => we can use => onclick = "console.log('you click me!')" 

    but this is old way ... new way is that select the element then use even
*/

const btn = document.querySelector('.btn-headline');
console.log(btn); 

// if we want to see in object Mode then 

console.dir(btn);

// we set the onclick property with a function 

// this one is not better old way 
btn.onclick = function(){
    console.log('You clicked me !!');
}



// new and trading way Now we see 
// addEventListiner()

btn.addEventListener('click', function(){

    console.log('Hi, You click me!');
});


