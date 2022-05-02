

// class List ==> how many class given to an element 

const sectionTodo = document.querySelector('.section-todo');
console.log(sectionTodo);

console.log(sectionTodo.classList); // output:  DOMTokenList(2) ['section-todo', 'container', value: 'section-todo container']

// *** supposed we want to add extra class into our selected element?

sectionTodo.classList.add('bd-dark');

console.log(sectionTodo.classList); // output: DOMTokenList(3) ['section-todo', 'container', 'bd-dark', value: 'section-todo container bd-dark']

// **** Remove class from a selected element

sectionTodo.classList.remove('container'); 

console.log(sectionTodo.classList); // output: DOMTokenList(2) ['section-todo', 'bd-dark', value: 'section-todo bd-dark'] 

// **** supposed we need to check a class present into class list or not

let ans = sectionTodo.classList.contains('container'); 

console.log(ans); // output: false;

// ****** supposed we need to dynamically toggle a class present into class

sectionTodo.classList.toggle('bg-dark');

// if it is present then remove => it not then add to classList


