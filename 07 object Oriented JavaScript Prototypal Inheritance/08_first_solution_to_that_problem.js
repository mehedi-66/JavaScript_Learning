

// when we careate daynamic object by using function

// when  function set as value inside the object that time memory repeted or copy for several object
// we can reduce that memory wast

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
   

// several user create and function about and is18 copy all of them 

const user1 = createUser('Mehedi', 'Hasan', 'mehedi@gmail.com', 21, 'myAddress');
const user2 = createUser('Mehedi', 'Hasan', 'mehedi@gmail.com', 21, 'myAddress');
const user3 = createUser('Mehedi', 'Hasan', 'mehedi@gmail.com', 21, 'myAddress');

// ************ how we can solve this problem   


// now we create another object and reference the function into main => function object so that no extra memory loss

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },

    is18 : function(){
        return this.age >= 18;
    }
}

function createNewUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.address = address;
    user.age = age;

    // reference 
    user.about = userMethods.about;
    user.is18 = userMethods.is18;

    return user;
}

// create new object 

const user4 = createNewUser('Mehedi', 'Hasan', 'Mehedi@gmail.com', 21, 'myAddress');
const user5 = createNewUser('Hasan', 'Mehedi', 'Hasan@gmail.com', 22, 'myAddress');

console.log(user4.about()); // output: Mehedi is 21 years old
console.log(user5.about()); // output: Hasan is 22 years old

