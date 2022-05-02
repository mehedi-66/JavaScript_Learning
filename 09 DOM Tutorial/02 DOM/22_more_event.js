
// keypress events
// mouseover event

// when use press any kew we have to listen and say which keypress

const body = document.body;

body.addEventListener('keypress', (e)=>{
    console.log(e.key);
});

// mouse over event: when youser hover mouse on element the time event ocure:

const button = document.querySelector('.btn-headline');

button.addEventListener('mouseover', ()=>{
    console.log('mouseover event occurred!!');
});