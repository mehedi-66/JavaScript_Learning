

// function expression 

// function singHappyBirthday()
// {
//     console.log("happy birthday to your ....");
// }

// given function by expression 

const singHappyBirthday = function(){
    console.log("happy birthday to your ....");
}


singHappyBirthday();


// function with parameter 

const sum = function(a, b){
    console.log(a + b); // 4
}

sum(1, 3); 

// even or odd by using function 
const isEven = function(number)
{
    return number % 2 === 0;
}

console.log(isEven(3)); // output: false