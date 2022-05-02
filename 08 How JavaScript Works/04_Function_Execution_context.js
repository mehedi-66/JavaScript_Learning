
// function execution context 


/* 

    global exectuon context 

    global memory 

    initialy 
    [
        window : window
        this : {window}
        foo : uninitialized 
        getFullName: function(){}
        personName: uninitialized

       Aother function execution context create 
        [
            argument : [....] list
            fName : Mehedi
            lName : Hasan
            myVar : var inside func
            fullName: Mehedi Hasan
        ]
    ]

*/




let foo = 'foo';
console.log(foo); // ouput: foo 

function getFullName(firstName, lastName) {
    
    // by default argument present in function 
    console.log(arguments); // ouput:  Arguments(2) ['Mehedi', 'Hasan', callee: ƒ, Symbol(Symbol.iterator): ƒ]

    let myVar = 'var inside func';
    console.log(myVar); // ouput: var inside func
    const fullName = firstName + ' ' + lastName;
    return fullName;
}

const personName = getFullName('Mehedi', 'Hasan');
console.log(personName); // ouput: Mehedi Hasan