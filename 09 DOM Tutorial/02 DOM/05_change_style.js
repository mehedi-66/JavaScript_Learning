
// chage the style of element 

// chain way select 
const mainHeading = document.querySelector("div.headline h2");

console.log(mainHeading); // output: <h2 id="main-heading">Manage your tasks</h2>

// See object of style properties 

console.dir( mainHeading.style ); // output: Object  of style properites


mainHeading.style.color = 'red' ;  // text color change and red show

// background color change

mainHeading.style.backgroundColor = 'green';

