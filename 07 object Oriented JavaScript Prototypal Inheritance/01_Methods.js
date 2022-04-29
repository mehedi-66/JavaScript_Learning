
// methods
// function inside object  

const person = {
    firstName: 'Mehedi',
    age : 21,
    about : function () {
        console.log("person name is Mehedi and person age 21 ");
        
        // tamplate string  => variable indicate by this
        console.log(`person name is ${this.firstName} and person age ${this.age}`);
    }
}

console.log(person.firstName); // output: Mehedi

console.log(person.about); 

/* 
    output:
    ƒ () {
        console.log("person name is Mehedi and person age 21 ");
    }
*/ 

// call the function

person.about();  // output: person name is Mehedi and person age 21 

// this acutally mean a object => which object => that is which mathod call 
// person.about(); => here .... this acutally refer => person object

// create new object 

const person1 = {
    Name : 'Mehedi',
    age : 21,
    about : function(){
        console.log(this); // what refere this ??
    }
}

person1.about(); 

/* 
    full person object mention 
    output:
    {Name: 'Mehedi', age: 21, about: ƒ}
*/

// ****************** reUse code by using this keyword 

// create one function and set into object value 

function personInfo(){
    console.log(`person name is ${this.firstName} age is ${this.age}`);
}

const person3 = {
    firstName : 'Mehedi', 
    age : 21,
    about : personInfo,
}

const person4 = {
    firstName : 'Hasan', 
    age : 22,
    about : personInfo,
}

const person5 = {
    firstName : 'suchana',
    age : 23,
    about : personInfo,
}

person3.about(); // output: person name is Mehedi age is 21
person4.about(); // output: person name is Hasan age is 22
person5.about(); // output: person name is suchana age is 23