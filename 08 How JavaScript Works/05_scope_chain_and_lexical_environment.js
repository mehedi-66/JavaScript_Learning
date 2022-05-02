
//*************** lexical environment scope chain 


/* 
    
    [
        lastName;
        [
            firstNmae;

            print ==> firstName
            print ==> lastName
        ]
    ]

    when inside print try to print lastName it is not in the inside scope that time 
    to see upword funciton and it it is found then it print

*/



const lastName = 'Hasan';

const printName = function()
{
    const firstName = 'Mehedi';
    console.log(firstName); // output: Mehedi
    console.log(lastName); // output: Hasan
}
