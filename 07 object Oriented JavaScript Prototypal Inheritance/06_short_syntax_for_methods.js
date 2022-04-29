
// short syntax 

/* 
    const user = {
        firstName : 'Mehedi',
        age : 21,
        about : function() {
            console.log(this.firstName, this.age);
        }
    }

*/

// equvalent syntax

const user = {
    firstName : 'Mehedi',
    age : 21,
    about(){
        console.log(this.firstName, this.age);
    }
}

user.about(); // output: Mehedi 21