

// useful string method

 


//********** trim()

let firstName = "      mehedi      ";

// trim generate new string 

// firstName length => 13
let newString = firstName.trim();

// newString length => 6

console.log(firstName.trim());

// Aftere trim() firstName length => 13

// output: mehedi
// Before and After remove space


//***********  toUpperCase()

console.log(firstName.toUpperCase());

let NewStringUpperCase = firstName.toUpperCase();

console.log(NewStringUpperCase)

//************* toLowerCase()

// *********** slice()
// your want to show part of a string
// start index, end index

// after trim()

firstName = "Mehedi";

let newStringSlice = firstName.slice(0, 3);  // ( ] index given

console.log(newStringSlice); // 0 1 2 => Meh
