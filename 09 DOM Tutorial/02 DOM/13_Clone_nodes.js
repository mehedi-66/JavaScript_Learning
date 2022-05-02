
// *********** clone Nodes

const ul = document.querySelector('.todo-list');
const li = document.createElement('li');
li.textContent = "New todo";
ul.append(li);

// ul.prepend(li);

// single node can be only one time append  

// to solve this issue ... clone the node


// it the node's child also clone then => (true) put 
const li2 = li.cloneNode(true);

ul.prepend(li2);
