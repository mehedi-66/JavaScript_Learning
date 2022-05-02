
// get multiple elements using getElements by class name
// get multiple elements items using querySelectorAll

const navItems = document.getElementsByClassName("navItem");

console.log(navItems); // output: HTMLCollection(3) [li.navItem, li.navItem, li.navItem]

// scond navItem needs Array like object 

console.log( navItems[1] );

console.log(typeof navItems ); // output: object

// is it array or not

console.log(Array.isArray(navItems)); // output: false 


// ********** querySelectorAll() 


const allNavItem = document.querySelectorAll('.navItem');

console.log(allNavItem); // output: NodeList(3) [li.navItem, li.navItem, li.navItem]

console.log( allNavItem[1] ); // output: NodeList










