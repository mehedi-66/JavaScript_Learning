

// spread operator 

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];

// copy  elements

const newArray = [...array1]; // new array take all from array1

console.log(newArray); // output: (3) [1, 2, 3]

 
const newS = [..."abc"];

console.log(newS); // output: (3) ['a', 'b', 'c']

const newS1 = [..."123345"];

console.log(newS1); // output: (6) ['1', '2', '3', '3', '4', '5']


//**************  spread operator in objects

const obj1 = {
    key1 : "value1",
    key2 : "value1",
};

console.log(obj1); // output: {key1: 'value1', key2: 'value1'}


// key not arive two times ... last on key priority maximum

const obj2 = {
    key1 : "value1",
    key2 : "value1",
    key1 : "mehedi",
}

console.log(obj2); // output: {key1: 'mehedi', key2: 'value1'}


// ****** obj copy 

const obj4 = {
    key1 : "value1",
    key2 : "value2",
}

const obj5 = {
    key3 : "value3",
    key4 : "value4",
}

const obj6 = {
    ...obj4,
    ...obj5,
}

console.log(obj6); 

/* 
    output:
    {key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4'}
*/


// ****** instant object by index 

const newObject = {..."abc"};
console.log(newObject); // output: {0: 'a', 1: 'b', 2: 'c'}

const newObj2 = {
    ...["item1", "item2"],
}
console.log(newObj2); // output: {0: 'item1', 1: 'item2'}






