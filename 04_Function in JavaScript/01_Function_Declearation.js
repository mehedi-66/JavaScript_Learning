
// declearation of a function

function singHappyBirthday()
{
    console.log("Happy birthday to you....");
}

singHappyBirthday();


// supposed we need to print two number sum

function add()
{
    console.log(5 + 5);
}

add();

// call, invoke or run ... same meaning 


// function retrun somethings 

function add1()
{
    return 2 + 4;
}

let a = add1();
console.log( a ); // output: 6


// parameter function 

function sumTwoNumber( a, b)
{
    return a + b;
}

let sum = sumTwoNumber( 5 , 3 );
console.log( sum ); // output: 8


// check even number or Not

function isEven(number)
{
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

let check = isEven(10);

console.log( check ); // output: true;
 

// give an array and target ... find out index of that position ...

function findTarget(array, target)
{
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] === target)
        {
            return i;
        }
    }

    return -1;
}

let index = findTarget([1, 2, 4, 3, 5], 4);

console.log(index); // output: 2



// 








