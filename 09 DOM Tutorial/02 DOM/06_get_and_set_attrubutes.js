
// get and set attrubutes 

const link = document.querySelector('a'); // first a tag find 

console.log( link.getAttribute('href') ); // output: #home => show the href value 
 
// change the attribute value 

link.setAttribute('href', 'https://codeprog.com');

console.log( link.getAttribute('href') ); // output: https://codeprog.com 


const inputElement = document.querySelector('.form-todo input'); // first input
console.log( inputElement.getAttribute('type') ); // output: text


