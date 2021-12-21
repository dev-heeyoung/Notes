// Function declaration
function doSomething(add) {
    console.log(add);
    const result = add(2, 3);
    console.log(result);
}

function add(a, b) {
    const sum = a + b;
    return sum;
} 

// Function call
doSomething(add);
// [Function: add]
// 5

const addFun = add;
console.log(addFun); // [Function: add]
const result = addFun(1, 2);
console.log(result); // 3