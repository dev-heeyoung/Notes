// // 1. Use strict
// // added in ES5
// // use this for Vanilla Javascript.
// 'use strict';


// // 2. Variable
// // let (added in ES6)
// let globalName = 'global name'; // global variables stay in memory while the program is running.
//                                 // Use global variables only when we need
// {
//     let name = 'heeyoung';
//     console.log(name);
//     name = 'hello';
//     console.log(name);
// }
// console.log(name); // cannot access name
// console.log(globalName); // global name

// // var (don't ever use this!)
// // var hoisting (move declaration from bottom to top : doesn't matter when we declare a variable)
// // has no block scope

// console.log(age);
// var age; // can access age before initialization

// {
//     age = 4;
//     var age;
// }
// console.log(age);

// name = 4;
// let name;


// // 3. Constants
// // favor immutable data type always for a few reasons:
// // - security
// // - thread safety
// // - reduce human mistakes
// const dayInWeek = 7;
// const maxNumber = 5;


// // 4. Variable types
// // primitive, single item: number, string, boolean, null, undefined, 
// // symble, object, box container, function, first-class function
// const count = 17; // integer
// const size = 17.1; // decimal number
// console.log(`value: ${count}, type: ${typeof count}`); // value: 17, type: number
// console.log(`value: ${size}, type: ${typeof size}`); // value: 17.1, type: number

// // number - special numeric values:
// const infinity = 1 / 0;
// const negaiveIninity = -1 / 0;
// const nAn = 'not a number' / 2;
// console.log(infinity); // Infinity
// console.log(negaiveIninity); // -Infinity
// console.log(nAn); // NaN

// // bigInt (fairly new, don't use it yet)
// const bigInt = 1213241523234293849208308203091239n; // over (-2**53) ~ 2*53)
// console.log(`value: ${bigInt}, type: ${typeof bigInt}`); 
// //value: 1213241523234293849208308203091239, type: bigint

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
// value: hello brendan, type: string
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
// value: hi brendan!, type: string
console.log('value: ' + helloBob + ', type: ' + typeof helloBob);
// value: hi brendan!, type: string

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
// value: true, type: boolean
console.log(`value: ${test}, type: ${typeof test}`);
// value: false, type: boolean

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);
// value: null, type: object

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);
// value: undefined, type: undefined

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const symbol3 = Symbol.for('id');
const symbol4 = Symbol.for('id');
console.log(symbol3=== symbol4); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // value: id, type: symbol
// cannot print without .description when we use symbol

// object, real-life object, data structure
const heeyoung = { name: 'heeyoung', age: 20 };
heeyoung.age = 21; // OK. why? It cannot be assigned to another object 
                   // but an object contains a pointer to the memory.
                   

// 5. Dynamic typing: dynamically typed language
// Javascript decide type at runtime
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
// value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
// value: 1, type: number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
// value: 75, type: string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// value: 4, type: number