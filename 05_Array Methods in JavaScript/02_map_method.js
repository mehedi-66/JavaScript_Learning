

// map method in Array 

const numbers = [3, 4, 6, 1, 8];

// same way work like forEach()
// map method take call back function 

function myFunc(num)
{
    return num * 2;
}

// map function return a new array .... store that array 

const multiply = numbers.map( myFunc );

console.log( multiply ); // output: (5) [6, 8, 12, 2, 16]


// ************ supposed we not returing somthing from calback function only print that time => calback function by defult return => undefined
// new creatring array store undefined 

function myFunc2( num )
{
    console.log(num * 2); // each number print but return to map undefined 
    /* 
        6
        8
        12
        2
        16
    */
}

const a = numbers.map( myFunc2 );

console.log(a) ; // ouput: (5) [undefined, undefined, undefined, undefined, undefined]



// **************** pass function inside the map()

const b = numbers.map( function(num) {
     return num * 2;
});

console.log(b); // ouput: (5) [6, 8, 12, 2, 16]


// *************** we can pass second parameter as => index inside map calback function

const c = numbers.map( (num, index) =>{
    return `index ${index} , ${num * 2}`;
});

console.log( c ); // output: (5) ['index 0 , 6', 'index 1 , 8', 'index 2 , 12', 'index 3 , 2', 'index 4 , 16']



// ****************** Real example 

const users = [
    {firstName : "Mehedi", age : 23},
    {firstName : "Suchana", age : 20},
]

const userNames = users.map( (user) => {
    return user.firstName;
});

console.log( userNames); // output: (2) ['Mehedi', 'Suchana']


