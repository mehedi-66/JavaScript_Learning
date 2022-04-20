

// find Method 
// find method take a callback 

const myArray = ["Hello", "cat", "dog", "lion"];

function isLength(string)
{
    // when length 3 that time return true otherwise false
    return string.length === 3;
}

// with the help of isLength calback function this => find method return first accourance => true or false 

const ans = myArray.find( isLength );
console.log(ans); //  cat => first accourance true
 

// ************ arrow function inside the => find method

const ans1 = myArray.find( (string) =>{
    return string === "dog";
});

console.log( ans1 ); // output: dog

// ***************** Real example 

const users = [

        {userId : 1, userName : "Mehedi"},
        {userId : 2, userName : "Hasan"},
        {userId : 3, userName : "suchana"},
];

// find the info of userId => 3

const myUser = users.find( (user) => {
    return user.userId === 3;
});

console.log(myUser); // output: {userId: 3, userName: 'suchana'}