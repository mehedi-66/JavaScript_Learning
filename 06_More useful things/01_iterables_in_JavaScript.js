

// iterables 

// we can use for of loop => that are itterables 
// string, array => are iterable 

const firstName = "Mehedi";

for(let ch of firstName) 
{
    console.log(ch);
}

/* 
    output:
    M
    e
    h
    e
    d
    i
*/



// array like object

 const items = ['item1', 'item2', 'item3'];

 for(let item of items)
 {
     console.log(item);
 }

 /*
    output:
    item1
    item2
    itme3
 */


// ************ objects are not iterable => using for of loop

const users = {'key1' : 'value1', 'key2' : 'value2'};

for(let item of users)
{
    console.log(item); 
}

// it show error .. coz  objects are not itterable 



// ************ array like objects
/* 
    array like objects 
    1) which have length property
    2) and whichever access to index 

*/

const firstName1 = "Mehedi";

console.log(firstName1.length);
console.log(firstName1[0]); 






