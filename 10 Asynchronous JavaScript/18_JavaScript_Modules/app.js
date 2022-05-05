
//const firstName = 'Mehedi';
// const age = "22";


// seperate file date bring to here and show

// import firstName from the util/fname.js
import {firstName} from './utils/fname.js';
import {age} from './utils/age.js'

import {Person} from './utils/Person.js';

console.log(firstName, age);

const person = new Person('Mehedi', "Hasan", 22);
person.info(); // output: Mehedi Hasan 22
