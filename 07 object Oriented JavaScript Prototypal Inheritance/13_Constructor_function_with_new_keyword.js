

// Constructor function ... create or initialize with new keyword

// convention is that first letter is capital letter 

function CreateNewUser(firstName, age) {
    // empty object create by default => this = {}

    // set {kev: value}

    this.firstName = firstName;
    this.age = age;

    // return this{} by default 
}

// create some function by default prototype {} object 

CreateNewUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old`;
}

// by using new create call function create users

const user2 = new CreateNewUser('Mehedi', 21);
const user3 = new CreateNewUser('Suchana', 22);

console.log( user3.about() ); // output: Suchana is 22 years old



for(let key in user2)
{
    console.log(key);
}

/* 
    output:
    firstName
    age
    about

*/

// but we don't want to see the proto property 

for(let key in user2)
{
    if( user2.hasOwnProperty(key) ) {
        console.log(key);
    } 
}

/* 
    output:
    firstName
    age
*/