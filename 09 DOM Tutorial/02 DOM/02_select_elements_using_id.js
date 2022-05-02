
// DOM
// document object model
// overview
// how to use
// deep study

// __________________________

console.log(document); // document structure print on console
console.log(window.document); // #document object structure print

console.dir(window.document); // JS document object print 

// ********** select element using get element by id


console.log( document.getElementById("main-heading") ); // <h2 id="main-heading">Manage your tasks</h2> => understeding object return
console.dir( document.getElementById("main-heading") ); // hure number of option return as Object many functionality

console.log( typeof document.getElementById("main-heading") ); // output: Object


// store the object into a variable 

const mainHeading = document.getElementById("main-heading");

console.log(mainHading); 