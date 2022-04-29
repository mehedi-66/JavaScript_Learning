
// optional chaining 

const user = {
    firstName: 'Mehedi', 
    address: {houseNumber: '1234'},
}

console.log(user.firstName); // output: Mehedi
console.log(user.address); // output: {houseNumber: '1234'}

// we need only address from object 
console.log(user.address.houseNumber); // output: 1234

// ? . we use then it is cheak any think has or not ... it has then .. feather go

console.log(user?.address?.houseNumber); // 