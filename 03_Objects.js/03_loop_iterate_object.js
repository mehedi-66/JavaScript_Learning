

// how to iterate object 

const person = {
    name : "Mehedi",
    age : 22, 
    hobbies : ["eat", "sleep", "walking"],
}


// for in loop 
// object.keys

for(let key in person){

    console.log(key);

}

/* 
    output:
    name
    age
    hobbies
*/

// but we need the value

for(let key in person){

    console.log(person.key);
}

/* 
    output:
    3 undefined

    coz person.key try to find the key name variable mapping has or not
*/


for(let key in person) {
    console.log(person[key]);
}

/* 
    output:
    Mehedi
    22
    (3) ['eat', 'sleep', 'walking']

*/

for(let key in person) {

    console.log(`${key} : ${person[key]}`);
    console.log(key, " : ", person[key]);
}


/* 
    output:
    name : Mehedi
    name  :  Mehedi
    age : 22
    age  :  22
    hobbies : eat,sleep,walking
    hobbies  :  (3) ['eat', 'sleep', 'walking']

*/


// *********** another way 
// Object.keys(person);


console.log(Object.keys(person));  // output:  (3) ['name', 'age', 'hobbies']


// Object.keys(person) => gives a Array

const val = Array.isArray((Object.keys(person)));
console.log(val); // true


for(let key of Object.keys(person))
{
    console.log(key);
}

/* 
    output:
    name
    age
    hobbi

*/

for(let key of Object.keys(person))
{
    console.log(person[key]);
}

/* 
    output:
    Mehedi
    22
    (3) ['eat', 'sleep', 'walking']

*/