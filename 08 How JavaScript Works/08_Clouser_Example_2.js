
// *********** Clouser Example 2


function myFunc(Power)
{

    function calculate(Base){
        console.log(Math.pow(Base, Power));
    }

    return calculate;
}

const squre = myFunc(2);

squre(4); // output: 16 



// *********** equvalent code with Arrow function 

const myFunction1 = power => number => number ** power;

const squre2 = myFunction1(2);

console.log( squre2(4) ); // output: 16

