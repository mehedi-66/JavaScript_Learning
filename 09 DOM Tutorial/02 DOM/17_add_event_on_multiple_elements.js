
// supposed we have there button and we want to add event on it

const allButtons = document.querySelectorAll('button');

for(let button of allButtons) {
    button.addEventListener('click', function(){
        console.log(this.textContent);
    });
}

