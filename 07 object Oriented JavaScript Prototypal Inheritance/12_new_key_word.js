

//**************** New keyword 

function createUser(firstName, age){
    this.firstName = firstName;
    this.age = age;
}

createUser.prototype.about = function(){
    console.log(this.firstName, this.age);
}


const user1 = new createUser('Mehedi', 21);


/* new keyword 

    Object.create(createUser.prototype);
    
    __proto__ chain work => new keyword done by auto ... and set the vlaue of ==> prototype autometitcally    


1) empty object => this means => empty {}  object 
2) return this 
3) 
 */
console.log(user1); 

/* 

    with the help of new keyword ==> __proto__ chanin done ==> auto => see about() come auto 
    output:

    createUser {firstName: 'Mehedi', age: 21}
    age: 21
    firstName: "Mehedi"
    [[Prototype]]: Object
    about: ƒ ()
    constructor: ƒ createUser(firstName, age)
    [[Prototype]]: Object

*/

user1.about(); // output: Mehedi 21


// ************************** example of new kewyword 

/* 
    new keyword
    1) this = {}  =====> create empty object and take (key value)
    2) return this object 
    3) set __proto__ of function prototype {} by default  
*/



function createNewUser(firstName, age) {
    // empty object create by default => this = {}

    // set {kev: value}

    this.firstName = firstName;
    this.age = age;

    // return this{} by default 
}

// create some function by default prototype {} object 

createNewUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old`;
}

// by using new create call function create users

const user2 = new createNewUser('Mehedi', 21);
const user3 = new createNewUser('Suchana', 22);

console.log( user3.about() ); // output: Suchana is 22 years old