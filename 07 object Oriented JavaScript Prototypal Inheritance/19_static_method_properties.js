

// ************ static Method and properites 

// class has direct relation that is static method 

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // static method 

    static classInfo(){
        return 'this is static peroson';
    }

    // static property 

    static dec =  'static property';

    get Name(){
        return this.name;
    }

    set Name(name)
    {
        this.name = name;
    }
}

// direcetly call the static method 
console.log(Person.classInfo()); // ouput: this is static peroson

console.log( Person.dec ); // ouput: static property


