
// ************ DOM tree ***********

const rootNode = document.getRootNode();
console.log(rootNode); // output: document Object

console.log( rootNode.childNodes ); // output: NodeList(2) [<!DOCTYPE html>, html]

const htmlElementNode =  rootNode.childNodes[1];
console.log( htmlElementNode ); // output:


console.log(htmlElementNode.childNodes); // output: NodeList(3) [head, text, body]


// parent relationship

console.log( htmlElementNode.parentNode ); // output: #document Object

// siblings relationship

//console.log( htmlElementNode.childNodes.nextSibling.childNodes ); // output:


// children mathod

console.log(htmlElementNode.children);  // output: HTMLCollection(2) [head, body]


