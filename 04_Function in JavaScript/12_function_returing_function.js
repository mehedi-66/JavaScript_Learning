
// function returning function 

// function returning anything 
function myFunc()
{
    return "Mehedi";
}

const ans = myFunc();
console.log(ans); // output: Mehedi


//  ******* function return => function 

function myFunc2()
{
    function f(){
        console.log("Mehedi Hi");
    }

    return f;
}

const ans1 = myFunc2();

console.log(ans1); 

/* 
    output:
    ƒ f(){
        console.log("Mehedi Hi");
    }
*/

 ans1() // output: Mehedi Hi


 // ************ inside retruning function return somthing 

 function myFunc6()
 {
     function f()
     {
         return "Mehedi is good boy";
     }

     return f;
 }

 const ans3 = myFunc6();
 
 console.log( ans3() ); // output: Mehedi is good boy