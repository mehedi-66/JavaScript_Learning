

// objects inside array

// very usefull in real world application

const users = [
    {
        userId : 1,
        firstName: "Mehedi",
        gender : "male",
    },

    {
        userId : 2,
        firstName: "Hasan",
        gender : "male",
    },

    {
        userId : 3,
        firstName: "Nayema",
        gender : "female",
    },
];

console.log(users); // (3) [{…}, {…}, {…}]

/* 
    output:
    (3) [{…}, {…}, {…}]
0: {userId: 1, firstName: 'Mehedi', gender: 'male'}
1: {userId: 2, firstName: 'Hasan', gender: 'male'}
2: {userId: 3, firstName: 'Nayema', gender: 'female'}
length: 3
[[Prototype]]: Array(0)

*/

// traverse through array elements

for(let user of users)
{
    console.log(user);
}

/* 
    output:
    {userId: 1, firstName: 'Mehedi', gender: 'male'}
    {userId: 2, firstName: 'Hasan', gender: 'male'}
    {userId: 3, firstName: 'Nayema', gender: 'female'}
*/

// specific properties need 

for(let user of users)
{
    console.log(user.firstName);
}

/* 
    output:
    Mehedi
    Hasan
    Nayema
*/