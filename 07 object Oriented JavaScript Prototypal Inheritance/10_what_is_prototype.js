

// *********** protototype *************

function hello(){
    console.log('hello world');
}

// javaScirpt  function ==> function +  object

console.log(hello.name); // output: hello 

// we can add my on properties on funaction 

hello.myOwnProperty = 'very unique value';
console.log(hello.myOwnProperty); // output: very unique value

// name property ----> tells function name;

// function proviedes more usefull properites



 // *********** function provided free space => that is object {} => this object call as prototype 

 console.log( hello.prototype ); // {}


 // only function provide prototype property 

 if( hello.prototype )
 {
     console.log('prototpype is present in prototype')
 }
 else{
     console.log('prototype is not present');
 }

 // output: prototpype is present in prototype


 // now we add some elements on the property

 hello.prototype.abc = 'Mehedi';
 hello.prototype.xyz = 12;
 hello.prototype.sing = function(){
     return 'lalalal';
 };


 console.log(hello.prototype); // output: {abc: 'Mehedi', xyz: 12, sing: ƒ, constructor: ƒ}










 