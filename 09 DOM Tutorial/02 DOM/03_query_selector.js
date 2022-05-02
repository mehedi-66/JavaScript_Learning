
// select element using query selector
/* 
    . for class select
    # for id select
*/

const mainHeading = document.querySelector("#main-heading");

console.log(mainHeading); // output: understandable object =>    <h2 id="main-heading">Manage your tasks</h2>

const header = document.querySelector(".header");

console.log(header); // output: 

// ****** when similer class has => querySelector => gives first match

// ******** But => querySelectorAll => gives all similer class 

