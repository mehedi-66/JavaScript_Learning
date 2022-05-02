

// how to get the dimension of element
// height and width

const sectionTodo = document.querySelector('.section-todo');

const  info = sectionTodo.getBoundingClientRect();

console.log(info);

/* 
    output:

    DOMRect
    bottom: 577.59375
    height: 89.59375
    left: 43.703125
    right: 830.296875
    top: 488
    width: 786.59375
    x: 43.703125
    y: 488
    [[Prototype]]: DOMRect


*/

// if only need the height:

const  info1 = sectionTodo.getBoundingClientRect().height;

console.log(info1); // output: 89.59375