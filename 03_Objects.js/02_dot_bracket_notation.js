

// difference between dot and bracket 02_dot_bracket_notation

// we have to give space into key namming that time we have to give => ""
const person = {
    name : "Mehedi",
    age : 22, 

    // give space inside key name 
    
    "person hobbies" : ["eat", "sleep", "walking"],
}


console.log(person["person hobbies"]); // output: (3) ['eat', 'sleep', 'walking'] 


// supposed we need to a variable key => const key = "email"

const key = "email";

person.key = "mehedi@gmail.com";

console.log(person); // output: {name: 'Mehedi', age: 22, person hobbies: Array(3), key: 'mehedi@gmail.com'}

// but need email: "mehedi@gamil.com" but it insert => key : "***";

// that time [variable put] helps 

person[key] = 'mehedi@gmail.com';

console.log(person); // output: {name: 'Mehedi', age: 22, person hobbies: Array(3), key: 'mehedi@gmail.com', email: 'mehedi@gmail.com'}


