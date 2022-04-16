

// for loop in array 

let fruits = ["apple", "mango", "grapes"];

for(let i = 0; i < fruits.length; i++)
{
    console.log(fruits[i]);

}

/* 
    output:
    apple
    mango
    grapes
*/

// we have to print all elements in upperCase

for(let i = 0; i < fruits.length; i++)
{
    console.log(fruits[i].toUpperCase());
}

/* 
    output:
    APPLE
    MANGO
    GRAPES
*/ 

// store all the elements in NEW array UpperCase

let fruits1 = [];

for(let i = 0; i < fruits.length; i++)
{
    fruits1.push(fruits[i].toUpperCase());
}

console.log(fruits1); // output:  ['APPLE', 'MANGO', 'GRAPES']



