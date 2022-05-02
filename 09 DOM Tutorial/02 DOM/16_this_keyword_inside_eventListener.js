
// this keyword inside the EventListener

const btn = document.querySelector('.btn-headline');

btn.addEventListener('click', function(){
    console.log('you clicked me !!!');
    console.log('Value of this => ');

    // when the nomal function 
    console.log(this); // output:  <button class="btn btn-headline">Learn More</button>
   
});

/* 
    But the this value for ()=>{} is that the => window object 
*/