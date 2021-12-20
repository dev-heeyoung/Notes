// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];


// 2. Index Position
const fruits = ['apple', 'banana'];
console.log(fruits); // [ 'apple', 'banana' ]
console.log(fruits.length); // 2
console.log(fruits[0]); // apple
console.log(fruits[2]); // undefined


// 3. Loopping over an array
// print all fruits 
// a. for
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
// apple
// banana

// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}
// apple
// banana

// c. forEach
fruits.forEach((fruit) => console.log(fruit));
// apple
// banana


// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits); // [ 'apple', 'banana', 'strawberry', 'peach' ]

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits); // [ 'apple', 'banana' ]

// unshift: add an item to the beginning
fruits.unshift('lemon'); 
console.log(fruits); // [ 'lemon', 'apple', 'banana' ]

// shift: remove an item from the begnning
fruits.shift();
console.log(fruits); // [ 'apple', 'banana' ]

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits); // [ 'apple', 'banana', 'strawberry', 'peach', 'lemon' ]
fruits.splice(1, 1);
console.log(fruits); // [ 'apple', 'strawberry', 'peach', 'lemon' ]
fruits.splice(1, 1, 'melon', 'mango');
console.log(fruits); // [ 'apple', 'melon', 'mango', 'peach', 'lemon' ]
fruits.splice(1); 
console.log(fruits); // ['apple']

// combine two arrays
const fruits2 = ['pear', 'coconut'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // [ 'apple', 'pear', 'coconut' ]


// 5. Searching
// find the index
fruits.push('strawberry', 'peach', 'lemon', 'mango');
console.log(fruits); // [ 'apple', 'strawberry', 'peach', 'lemon', 'mango' ]

// indexOf
console.log(fruits.indexOf('peach')); // 2
console.log(fruits.indexOf('lemon')); // 3
console.log(fruits.indexOf('avocado')); // -1

// includes
console.log(fruits.includes('mango')); // true
console.log(fruits.includes('avocado')); // false

// lastIndexOf
fruits.push('apple');
console.log(fruits); // [ 'apple', 'strawberry', 'peach', 'lemon', 'mango', 'apple' ]
console.log(fruits.indexOf('apple')); // 0
console.log(fruits.lastIndexOf('apple')); // 5