

//Computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myValue1";
const value2 = "myvalue2";

// how we can get this object with this const variables
const obj = {
    objkey1 : "myvalue1",
    objekey2 : "myvalue2",
}



const obj1 = {
    [key1] : value1,
    [key2] : value2,
}

console.log(obj1);

/* 
    output:
    {objkey1: 'myValue1', objkey2: 'myvalue2'}

*/

// or firstly we create empty object and dynamically assing from variable key value

const obj2 = {};

obj2[key1] = value1;
obj2[key2] = value2;

console.log(obj2); // output: {objkey1: 'myValue1', objkey2: 'myvalue2'}


 


