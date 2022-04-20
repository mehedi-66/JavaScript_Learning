
// arrow functions 

const sum = () =>{
    return 3 + 3;
}

console.log( sum() ); // output: 6


// check even or odd n

const add = (n) =>{

    return n % 2 === 0;
}

console.log( add(2) ); // output: true;

// when we use single parameter then if we not use parentheisis okay

const check = a =>{
    if(a > 0){
        console.log("positive");
    }
    else{
        console.log("Negative");
    }
}

check(5); // output: positive