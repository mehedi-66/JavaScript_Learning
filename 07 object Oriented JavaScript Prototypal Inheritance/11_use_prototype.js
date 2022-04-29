
// ********** when we create a function that time one empty object create ... we utilize that object 

/*
const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },

    is18 : function(){
        return this.age >= 18;
    },

    sing : function(){
       return 'la la la song ';
    }
}

*/

function createNewUser(firstName, lastName, email, age, address){
    
    // create empty object and __proto__  chain 
    
    // const user = Object.create(userMethods);
    
    const user = Object.create(createNewUser.prototype);

    // we dont use extra object relation ... instade of user .. ==> function  ==> prototype  object 


    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.address = address;
    user.age = age;

   
    return user;
}


console.log( createNewUser.prototype ); // output: {constructor: ƒ}

// Now we set about mehtod

createNewUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
}

createNewUser.prototype.is18 = function(){
    return this.age >= 18;
}

createNewUser.prototype.sing = function(){
    return 'la la al';
}


const user1 = createNewUser('Mehedi', 'Hasan', 'mehedi@gmail.com', 21, 'myAddress');

console.log(user1); 

/*
    output:

createNewUser {firstName: 'Mehedi', lastName: 'Hasan', email: 'mehedi@gmail.com', address: 'myAddress', age: 21}
address: "myAddress"
age: 21
email: "mehedi@gmail.com"
firstName: "Mehedi"
lastName: "Hasan"
[[Prototype]]: Object
about: ƒ ()
is18: ƒ ()
sing: ƒ ()
constructor: ƒ createNewUser(firstName, lastName, email, age, address)
[[Prototype]]: Object

*/


console.log(user1.sing()); // output: la la al














