
// change text
//  textContent and innerText 

const mainHeading = document.querySelector("#main-heading");

console.log( mainHeading.textContent ); // output: Manage your tasks

mainHeading.textContent = 'Hi, I am from JS';

mainHeading.innerText = 'HI, I am form JS too';

// it is change the selected html element text