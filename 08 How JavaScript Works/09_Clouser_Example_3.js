

/* 
    we have to develop a program that return a function from inside the function
    if the return function call one time then it work With positive responsoe when
    second time call that time it shows negetive resposne     
*/

function myFunc()
{
    let myVar = 0;

    return function Check(){
        myVar++;
        if(myVar === 1)
        {
            console.log('Hi , You called Me !!');
        }
        else{
            console.log('This function is all ready called');
        }
    }
}

const ans = myFunc();
ans(); // output: Hi, You called Me !!

ans(); // output: This function is all ready Called 
