

// arrow function behaviour

// arrow function not have any => this keyword
// it take this by it's surounding 
// one level up => this ... that means => window object  

const user = {
    firstName: 'Mehedi',
    age : 8, 
    about : () =>{
        
        console.log(this); // window object 
        console.log(this.firstName, this.age);
    }
}

user.about(); // output: undefined undefined

// call used but not change => again it show the window object

user.about.call(user); // output: undefined undefined
