
// splice method 
// start, delete, insert

const myArray = ['item1', 'item2', 'item3'];

// delete 
const ansD = myArray.splice(1, 1); // splice(startIndex, howManayDeletes);

console.log(myArray); // output: (2) ['item1', 'item3']

console.log("deleted Item ", ansD); // output: deleted Item  ['item2']
  
// insert 
myArray.splice(1, 0, 'inserted item');

console.log(myArray); // output: (3) ['item1', 'inserted item', 'item3']