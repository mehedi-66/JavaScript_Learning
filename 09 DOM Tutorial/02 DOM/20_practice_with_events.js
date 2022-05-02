
// little practice with click event 

const allButtons = document.querySelectorAll('.btn-headline');

console.log(allButtons.length); // output: 2

allButtons.forEach( (button)=>{
    button.addEventListener('click', (e)=>{
         console.log(e.target); 
         e.target.style.backgroundColor = 'green';
         e.target.style.color = 'white'; 
    });
});