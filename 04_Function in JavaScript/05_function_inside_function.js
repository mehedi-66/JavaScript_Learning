
// function inside function

// example only 

const app = () =>{
    console.log("inside app");
}

app(); // output: inside app


// function inside function 

const app1 = ()=>{
    const myFunc = () =>{
        console.log("hello from myFunc");
    }

    const addTwo = (num1, num2) =>{
        return num1 + num2;
    }

    const mul = (num1, num2) => num1 * num2;

    console.log("inside app1");

    myFunc(); // inside function call
    console.log(addTwo(2, 3));


}


app1();

/* 
    output:
    inside app1
    hello from myFunc
    5

*/

