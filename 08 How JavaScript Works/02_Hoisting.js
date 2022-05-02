

//************ hoisting 

// hoisting concept is that ... variable declear and initialze later but printing up 
// becouse of hoisting it work => Before Execution => var variable and funciton store in Global memory  


console.log(this); // ouput: window
console.log(window); // ouput: window
console.log(myFunction); // f myfunction(){ console.log('this is my function');}
console.log(fullName); // ouput: undefined 


function myFunction(){
    console.log('this is my function');
}

var firstName = 'Mehedi';
var lastName = 'Hasan';
var fullName = firstName + " " + lastName;
console.log(fullName);  // ouput: Mehedi Hasan



// ********* function expression 

/* 
    Global memory 

    previously printing : 

    firstly varibale store in => undefined

---------------------------------------------
    then set the value of that variable 
    After print 
    show that function 



*/

console.log(myFunction); // ouput: undefined

var myFunction = function(){
    console.log('this is my function');
}

console.log(myFunction); // ouput:  f (){ console.log('this is my function')}








