
// getter and setters 

class Person{
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    } 


    // getter 
    get fullName(){
        return this.firstName + ' ' + this.lastName;
    }


    // setter 

    setName(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set fullName(fullName)
    {
        // split the name 

        const [firstName, lastName] = fullName.splitfullname.split(' ');
        
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person('Mehedi', 'Hasan', 21);

console.log(person1);  // ouput: Person {firstName: 'Mehedi', lastName: 'Hasan', age: 21}

//console.log(person1.fullName()); // ouput: Mehedi Hasan


// properties like using get ==> without preantheis call it

console.log( person1.fullName ); // ouput: Mehedi Hasan


// set value and change vlaue

person1.setName('Mehedi', 'Hasan');

console.log( person1.firstName ); // ouput: Mehedi
console.log( person1.lastName ); // ouput: Hasan


// use set fullName method for seting values

person1.firstName = 'Mehedi Hasan';

console.log( person1 ); // ouput: Person {firstName: 'Mehedi Hasan', lastName: 'Hasan', age: 21}















