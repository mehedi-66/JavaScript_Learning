

// call apply bind mehtod

function hello(){
    console.log("hello world"); 
}

hello(); // output: hello world
hello.call(); // output: hello world  


const user1 = {
    firstName : 'Mehedi',
    age : 21,
    about : function(){
        console.log(this.firstName, this.age);
    }
}

user1.about(); // output: Mehedi 21





// ************** we select which object pass on => this refer object

const user2 = {
    firstName: 'Mehedi', 
    age : 21,
    about : function(){
        console.log(this.firstName, this.age);
    }
}

const user3 = {
    firstName: 'suchana',
    age : 20,
}

// now we want to call about function to Given value of user3 as this 

// by call we pass this our select object => user3
user2.about.call(user3); // output: suchana 20

// if we dont pass any object inside call => (this) then it will show undefined
user2.about.call(); // output: undefined, undefined


// ********* parameter pass after passing object 

const user4 = {
    firstName: 'Mehedi', 
    age : 21,

    about : function(hobby, favMusic){
        console.log(this.firstName, this.age, hobby, favMusic);
    }
}

const user5 = {
    firstName : 'Suchana',
    age : 20,
}

// argument pass in the function 
user4.about.call(user5, "walking", "nothing"); // output: Suchana 20 walking nothing 

// ************* apply and call same as it is 
// only differenct is that ... in apply we have to pass , array after object aregument => 

user4.about.apply(user5, ["walking", "nothing"]); // output: Suchana 20 walking nothing


// *************** we can create seperate function and pass arguement => object and pass arguments


function about(hobby, message){
    console.log(this.firstName, this.age, hobby, message);
}


const user6 = {
    firstName: 'Mehedi',
    age : 21,
}

const user7 = {
    firstName: 'Hasan', 
    age : 23,
}


about.call(user6, "walking", "nothing"); // output:  Mehedi 21 walking nothing

about.apply(user6, ['Gamming', 'Nothing']); // output: Mehedi 21 Gamming Nothing



// ***************** bind return a function store it and again run the function to get output:

const fun = about.bind(user6, 'Gamming', 'Something');

fun(); // output: Mehedi 21 Gamming Something