

// ************** Mehtod overriding **********

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


   // some modifications in eat method  Overriding 
   eat(){
       return `Modified Eat ${this.name} is eating`;
   }

   run(){
       return `${this.name} is running at ${this.speed}`
   }

}

const tommy = new Dog('tommy', 2, 45);

console.log(tommy.eat()); // output: Modified Eat tommy is eating

