
// ******** setInterval

/*
    NOTE: setInterval do someting continusly after given time dalay

*/

console.log('Script Started');

setInterval( ()=>{
    console.log(Math.random());
}, 1000);


console.log('script end');

/* 
    output: 

    Script Start
    Script End

    0.1100101
    0.202002
    0.111111
    ....
    ......
    ..
    ..
    ..
    ...
    ...

*/

// ************** setInterval gives id

console.log('Script Started');

const id = setInterval( ()=>{
    console.log(Math.random());
}, 1000);

console.log('script end');

clearTimeout(id);