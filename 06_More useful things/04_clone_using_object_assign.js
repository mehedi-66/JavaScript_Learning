
// clone using object.assing

const obj = {
    key1 : "value1",
    kye2 : "value2",
}

// when we assing any object into any object then we need 
// they share same memory location .... it we change any of then .. both are effacted
// example: 

const obj2 = obj;


// we need to create different memory location inside heap 

const obj3 = {...obj}; // the are diffiernt memory location

// another way to cloneing 
const obj4 = Object.assign({}, obj); 