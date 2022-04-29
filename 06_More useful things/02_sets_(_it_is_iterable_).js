//************** Sets ( it is iterable )
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only (no duplicates allowed)

// normal array
const numbers = [1, 2, 3];

// sets
const numbers1 = new Set([1, 2, 3, 3]);

console.log(numbers1); // Set(3) {1, 2, 3}

// index not accessible in Set()
console.log(numbers1[1]); // undefined

const str = new Set("abc");
console.log(str); // Set(3) {"a", "b", "c"};

// ************ we can add elements of different type in set => add()

const itmes = ["item1", "item2", "item3"];

const numbers2 = new Set();
numbers2.add(1);
numbers2.add(2);
numbers2.add(itmes);

console.log(numbers2);

/* 
    output:
    Set(3) {1, 2, Array(3)}
    0: 1
    1: 2
    2: Array(3)
    value: (3) ['item1', 'item2', 'item3']
    0: "item1"
    1: "item2"
    2: "item3"
    length: 3
    [[Prototype]]: Array(0)
    size: 3
    [[Prototype]]: Set

*/

// **************** focus => when focus two seperate array => different memory location => then javaScirpt => treat as diffirent

const a = new Set();

a.add(1);
a.add(["item1", "item2"]);
a.add(["item1", "item2"]);

console.log(a);

// both are same elements but the store array in different memory location 

/* 
    output:

    Set(3) {1, Array(2), Array(2)}
    0: 1
    1: Array(2)
    value: (2) ['item1', 'item2']
    2: Array(2)
    value: (2) ['item1', 'item2']
    size: 3
    [[Prototype]]: Set
*/


//************** in Set() a element has or not 

// has()

const ans = a.has(1);

console.log( ans ); // output: true 


// ************* set is iterable => for of loop 
for(let item of a)
{
    console.log(item);
}

/* 
    output:
    1
 (2) ['item1', 'item2']
 (2) ['item1', 'item2']



*/

// *********** find uniqe elements of an array  => Set()

const myArray = [1, 2, 3, 4, 4, 5, 5, 6, 6];

const uniqueElements = new Set(myArray);

console.log(uniqueElements); // output: Set(6) {1, 2, 3, 4, 5, …}

let length = 0;

for(let num of uniqueElements)
{
    length++;
}

console.log(length); // output: 6
