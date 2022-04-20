

// Parameter destructuring

// object 
// react 

const Person = {
    firstName : "Mehedi",
    gender : "Male",
}

function printDetails(obj)
{
    console.log(obj.firstName);
    console.log(obj.gender);

    console.log(obj.age);
}

printDetails(Person);

/* 
    output:
    Mehedi
    Male
    undefined
*/


// ****** Now destructuring

function getDetails({firstName, gender}){
    console.log(firstName);
    console.log(gender);
}

getDetails(Person);

/* 
    output:
    Mehedi
    Male
*/




