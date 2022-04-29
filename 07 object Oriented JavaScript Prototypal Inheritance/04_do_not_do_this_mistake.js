
// some warnings
// do not do this mistake 

const user = {
    firstName: 'Mehedi',
    age : 21,
    about : function(){

        console.log(this); 
        console.log(this.firstName, this.age);
    }
}

user.about; // it refer window object 

// but it represent the user object => when we call the function from here 
user.about();

const myFunc = user.about;
myFunc(); // it shows output: undefined undefined

// we can solve by using bind 

const myFunc2 = user.about.bind(user);

myFunc2(); // output: Mehedi 21