

//*************  Maps objects 

// map is an iterable 

// store data in ordered fashion 

// store key value pair (like objects)
// duplicate keys are not allowed like objects


// different between maps and objects


// objects can only have string or symbole
// as key


// in maps you can anything as key
// like array, number, string


// ********** object normal  => object literal say =>

// key as => string most of the case in object  


const person = {
    firstName : "Mehedi",
    age : 7,
    1 : "one"
}

console.log(person.firstName);
console.log(person["firstName"]);

console.log(person["1"]); // output: one

// traverse of object using => for in loop 

for(let key in person) {
    console.log(typeof key);
}

/* 
    all are string consider as key => in object 

    output:
    string
    string
    string
*/



// ************** Map object  

const person1 = new Map();

console.log(person1); 

/* 
    output:
    
    Map(0) {size: 0}
    [[Entries]]
    No propertiessize: 0
    [[Prototype]]: Map

*/

// ************ set map => key value pair

person1.set('firstName', 'Mehedi');
person1.set('age', 21);

console.log(person1);

/* 
    output:
    
    Map(2) {'firstName' => 'Mehedi', 'age' => 21}
    [[Entries]]
    0: {"firstName" => "Mehedi"}
    key: "firstName"
    value: "Mehedi"
    1: {"age" => 21}
    key: "age"
    value: 21
    size: 2
    [[Prototype]]: Map

*/


// ************** in the Map object key we can give ans type =< like number, array others 

// 1 is key consider as number type of key 
person1.set(1, "one");

console.log(person1); //ouput:  Map(3) {'firstName' => 'Mehedi', 'age' => 21, 1 => 'one'}

// ************** to print or see specific value we can not use ( . ) it show undefined How we can access 

console.log(person1.firstName); //output: undefined
console.log(person1['firstName']); //output: undefined

// How ?? find specific property 

console.log(person1.get('firstName')); //output:   Mehedi
console.log(person1.get(1)); //output: one

console.log(person1.keys()); //output: MapIterator {'firstName', 'age', 1}

// ************ how iterate loop on map object => with the help of keys

for(let key of person1.keys())
{
    console.log(key, typeof key); 
}

/* 
    output:
    firstName , string 
    age , string
    1 , number 
*/

// value print  using loop 

for(let key of person1.keys())
{
    console.log(key, person1.get(key));
}

/*
    output:
    firstName , Mehedi
    age  21
    1  one
*/


// *************** we can give key as different dataype 


const a = new Map();

a.set("firstName", "Mehedi");
a.set("age", "21");
a.set([1, 2, 3], "Hi Array good boy");
a.set(1, "one");
a.set({1: "one"}, "one map one");

console.log(a); // output: Map(5) {'firstName' => 'Mehedi', 'age' => '21', Array(3) => 'Hi Array good boy', 1 => 'one', {…} => 'one map one'}


// ***************** map is iterable 
for(let key of a) 
{
    console.log(key);
}

// it is gives array => first key => second value 

/* 
    output:
    (2) ['firstName', 'Mehedi']
   ['age', '21']
 (2) [Array(3), 'Hi Array good boy']
 (2) [1, 'one']
 (2) [{…}, 'one map one']

*/

// ************ destructuring of array elements 

for(let [key, value] of a)
{
    console.log(key, value);
}

/* 
    output:

    firstName   Mehedi
    age        21
    (3) [1, 2, 3] 'Hi Array good boy'
    1 'one'
    {1: 'one'} 'one map one'
*/


// ****************** Map() inside  set key value pairs 

// array insde arrya put into Map() => [ [ ], [] ]




const person2 =  new Map([['firstName', 'Mehedi'], ['age', 7]]);

console.log( person2 ); // output: Map(2) {'firstName' => 'Mehedi', 'age' => 7}



// now we have a object person5

const person5 = {
    id : 1,
    firstName: "Mehedi",
}


const userInfo = new Map();
userInfo.set(person5, {age: 8, gender: "Male"});

console.log(userInfo);

console.log(person5.firstName); // output: Mehedi
 
console.log(userInfo.get(person5).firstName ); // output: Mehedi




