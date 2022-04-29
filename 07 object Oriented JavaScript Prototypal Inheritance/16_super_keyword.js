
// *********** super keyword


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


// now we create another class 
class Dog extends Animal{
   
    constructor(name, age, speed){

        // super initialize the base class values 
        super(name, age);

       this.speed = speed;
   }


   run(){
       return `${this.name} is running at ${this.speed}`
   }

}

const tommy = new Dog('tommy', 2, 45);

console.log(tommy); // output: Dog {name: 'tommy', age: 2, speed: 45}

console.log(tommy.run()); // output: tommy is running at 45


