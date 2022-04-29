


// **************** Learn something new 

const obj1 = {
    key1 : 'value1', 
    key2 : 'value2',
}

const obj2 = {
    key3 : 'value3',
}


console.log(obj1.key1); // output: value1
console.log(obj1.key2); // output: value2
console.log(obj2.key3); // output: value3

// but we want ??
console.log(obj2.key1); // output: undefined

// we create empty object two way 

const obj3 = {};

obj3.key3 = 'value3';

// another way to create empty object 

const obj4 = Object.create(obj1);

console.log(obj4); // output: {} 

obj4.key3 = 'value3';

// now we achive something that we want => ??

console.log(obj4.key1); // output: value1

/* 
    when we create object by initialize into another object 
    that insert into inside the new created object:

    {}
    key3: "value3"
    [[Prototype]]: Object
    
    key1: "value1"
    key2: "value2"
    
    [[Prototype]]: Object


*/


console.log(obj4.__proto__); // output: {key1: 'value1', key2: 'value2'}


/* 
 
    __proto__

    ofical ecmascript documentation

    __proto__ and [[prototype]]

    both are same thing 
*/

/* 
    but prototype is the different things 

*/


// ************** we create empty object and chain another object by => __proto__



// sometimes we need a lot of method that time we have to improve 

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

function createNewUser(firstName, lastName, email, age, address){
    
    // create empty object and __proto__  chain 
    const user = Object.create(userMethods);
    
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.address = address;
    user.age = age;

    // reference 
    user.about = userMethods.about;
    user.is18 = userMethods.is18;

    // we have to write here as well 

    user.sing = userMethods.sing;

    return user;
}

// create new object 

const user4 = createNewUser('Mehedi', 'Hasan', 'Mehedi@gmail.com', 21, 'myAddress');
const user5 = createNewUser('Hasan', 'Mehedi', 'Hasan@gmail.com', 22, 'myAddress');

console.log(user4.about()); // output: Mehedi is 21 years old
console.log(user5.about()); // output: Hasan is 22 years old

console.log(user4.sing()); // output: la la la song 




