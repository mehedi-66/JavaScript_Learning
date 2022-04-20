
// fill method 
// value, start, end

// [-1, -1, -1, -1]

const myArray = new Array(10).fill(-1);

console.log(myArray); // output: (10) [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]

// [1, 2, 3, 4, 5, 6, 7, 8]  => tranform to some to 0 0 0 => [1, 2, 3, 0, 0, 0, 7, 8]

const myArray1 =  [1, 2, 3, 4, 5, 6, 7, 8];
myArray1.fill(0,  2, 4); 

console.log( myArray1 ); // output: (8) [1, 2, 0, 0, 5, 6, 7, 8]