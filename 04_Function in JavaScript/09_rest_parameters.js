
// rest parameters 

function myFunction(a, b, c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);

}

myFunction(1, 2, 3);


// many elements pass in the arguments 

function myFunction1(a, b, c, ...rest){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);

    console.log(rest);
}

myFunction1(1, 2, 3, 4, 5, 6);

/* 
    output:
    a is 1
    b is 2
    c is 3
    (3) [4, 5, 6]

*/


// all elements sum 

function addAll(...numbers){
    let total = 0;

    for(let number of numbers)
    {
        total += number;
    }

    return total;
}

const ans = addAll(4, 5, 6);
console.log(ans); // output: 15

