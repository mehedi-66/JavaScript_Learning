
// innerHTML 
// inside the header tag all is the innerHTML


const headline = document.querySelector('.headline');
console.log(headline);

console.log(headline.innerHTML); // output: all innerHTML come to its 

headline.innerHTML = '<h1> Inner html changed </h1>';

// add to innerHTML somthing more to it

headline.innerHTML += '<button class="bnt" >Learn More</button>';
