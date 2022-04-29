

const user1 = {
    firstName: 'Mehedi',
    lastName: 'Hasan', 
    email: 'mehedi@gmail.com', 
    age: 21,
    address: 'house number, colony, pincode, state',

    about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },

    is18: function(){
        return this.age >= 18;
    }
}

const aboutUser = user1.about();

console.log(aboutUser); // output: Mehedi is 21 years old


// *************** but we need 100+ object where first name and other property but input => lastly return object 

/*   1) we create a function create object
    2) add key value pairs 
    3) return object 
*/

function createUser(firstName, lastName, email, age, address)
{
    const user = {};

    // add key value pair into user object 

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    // add two function 
    user.about = function()
    {
        return `${this.firstName} is ${this.age} years old`;
    }

    user.is18 = function(){
        return this.age >= 18;
    }

    return user;
}


// now create user 

const user2 = createUser('Mehedi', 'Hasan', 'mehedi@gmail.com', 21, 'myAddress');

console.log(user2); // output: {firstName: 'Mehedi', lastName: 'Hasan', email: 'mehedi@gmail.com', age: 21, address: 'myAddress', …}

const is18 = user2.is18();

console.log(is18); // output: true

const about = user2.about();

console.log(about); // output: Mehedi is 21 years old














