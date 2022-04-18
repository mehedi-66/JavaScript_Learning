

// nested destructuring 

const users = [

    {
        userId: 1,
        firstName: "Mehedi",
        gender: "male",
    },

    {
        userId: 2,
        firstName: "Hasan",
        gender: "male",
    },

    {
        userId: 3,
        firstName: "Nayema",
        gender: "female",
    },


];


// destructuring

const [user1, user2, user3] = users;

console.log(user3); // output: {userId: 3, firstName: 'Nayema', gender: 'female'}


// nested destructuring

 const [{firstName}, , {gender}] = users;

console.log(firstName); // output: Mehedi 



