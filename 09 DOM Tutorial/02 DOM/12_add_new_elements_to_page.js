
// add   new elements to page 

// innerHTML to add html element

const todoList = document.querySelector('.todo-list');
console.log(todoList);

// todoList.innerHTML = '<li> New Todo </li>';

todoList.innerHTML += '<li>New todo </li>';
 

// when you shoed use it , when you should not ?

/* 
    innerHTML costly in term of time becouse it render full inner part of html 
*/

// *********** better soluton to create remove elemnt => document.createElement()

// document.createElement()
// append 
// prepend d
// remove

const newTodoItem = document.createElement('li');

// create text Node
const newTodoItemText = document.createTextNode('Teach Student');

newTodoItem.appendChild( newTodoItemText );

todoList.append(newTodoItem);

console.log( newTodoItem ); 


// ******** remove 
const todo1 = document.querySelector('.todo-list li');

todo1.remove();
console.log(todo1);

// before and after 
// insert element before the selected Item
// after the Selected Item