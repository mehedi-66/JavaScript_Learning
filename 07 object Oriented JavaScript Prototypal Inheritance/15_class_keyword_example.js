
// create animal class 

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

const animal1 = new Animal('tom', 1);
console.log(animal1); 

/* 
    Animal {name: 'tom', age: 1}
    age: 1
    name: "tom"
    [[Prototype]]: Object
    constructor: class Animal
    eat: ƒ eat()
    isCute: ƒ isCute()
    isSuperCute: ƒ isSuperCute()
    [[Prototype]]: Object
*/
console.log(animal1.eat()); // ouput: tom is eating
console.log(animal1.isSuperCute()); // output: true


// ********* create another call and inheritance 

class Dog extends Animal{
   
    // inherite all the mehtod and property of Animal class 

}

const tommy = new Dog('tommy', 2);

console.log(tommy); 

/* 
    ouptut:
   Dog {name: 'tommy', age: 2}
    age: 2
    name: "tommy"
    [[Prototype]]: Animal
    constructor: class Dog
    [[Prototype]]: Object
    constructor: class Animal
    eat: ƒ eat()
    isCute: ƒ isCute()
    isSuperCute: ƒ isSuperCute()
    [[Prototype]]: Object

*/

console.log(tommy.eat()); // ouput: tom is eating