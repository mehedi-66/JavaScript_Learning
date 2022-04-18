
//************  objects

// objects are store reference type


/* 
    arrays are good but not sufficient
    for real world data
    objects store key value pairs
    objects don't have index

*/

// how to create objects 

const person = {
    name : "Mehedi",
    age : 12
}

console.log(person.name); // output: Mehedi

console.log(typeof person); // output: object



// how to access data from objects
console.log(person.name); // output: Mehedi
console.log(person.age); // output: 12

 


const info = {
    name: "Mehedi",
    age : 12,
    hobbies: ["walking", "gaming", "eatting"],

}

console.log(info); // output:  {name: 'Mehedi', age: 12, hobbies: Array(3)}

console.log(info.hobbies); // output: (3) ['walking', 'gaming', 'eatting']
 
// how to add key value pair to objects

info.gender = "Male";

console.log(info); // output: {name: 'Mehedi', age: 12, hobbies: Array(3), gender: 'Male'}

// new wat to select the key ??
console.log(info["name"]); // output: Mehedi
console.log(info["age"]); // output: 12



