
// loop 

// Array like object ==> indexing, lenght protperty 

let navItem = document.getElementsByClassName('navItem'); // HTMLCollection

console.log(navItem); // give Array like object

console.log(navItem.length); // output: 3

// loop 
// we can not use forEach method to iterate through HTMLCollection

// simple for loop

for(let i = 0; i < navItem.length; i++)
{
    console.log( navItem[i] );  
    
    // we want to make style each item 

    const navItems = navItem[i];
    navItems.style.background = '#fff';
    navItems.style.color = "green";
}

/* 
    output:

    <li class="navItem"><a href="#home">Home</a></li>
    <li class="navItem"><a href="">Todo</a></li>
    <li class="navItem"><a href="">Sign up</a></li>
*/



// for of loop 

for(let navItems of navItem)
{
    navItems.style.background = '#fff';
    navItems.style.color = "green";
}


// forEach

// convert into array then use forEach loop i

navItem = Array.from(navItem);

console.log(Array.isArray(navItem)); // output: true

navItem.forEach( (navItems) =>{
    navItems.style.background = '#fff';
    navItems.style.color = "green";
});



// ******************** querySelectorAll()

let navItemAll = document.querySelectorAll('a'); // NodeList  array Like Objects

console.log(navItemAll); // NodeList(3) [a, a, a]



// same way to use .... looping with NodeLis as well 







