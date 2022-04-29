

// class internaly used object and function constructor and new and this keyword 


class CreateUser{

    constructor(firstName, lastName, age)
    {
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    about(){
        return this.firstName + " " + this.lastName;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return 'lalallala';
    }

}

// we do not call constructor without new

const user1 = new CreateUser('Mehedi', 'Hasan', 21);
const user2 = new CreateUser('Suchana', 'Nayema', 22);


console.log(user1.about()); // output: Mehedi Hasan



// now we see the prototype of user1 

console.log(Object.getPrototypeOf(user1));

/* 
    output:
    {constructor: ƒ, about: ƒ, is18: ƒ, sing: ƒ}
    about: ƒ about()
    constructor: class CreateUser
    is18: ƒ is18()
    sing: ƒ sing()
    [[Prototype]]: Object
*/