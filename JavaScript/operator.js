// 1. String Concatenation
console.log('my' + ' cat'); // my cat
console.log('1' + 2); // 12
console.log('Heeyoung\'s book'); //Heeyoung's book
console.log("Heeyoung's \nbook"); //Heeyoung's
                                  //book
console.log(`string literals: 1 + 2 = ${1 + 2}`); // string literals: 1 + 2 = 3
//``: allow us using special characters and lines.
console.log(`string literals:

...
1 + 2 = ${1 + 2}`); 
 // literals:
 //
 // ...
 // 1 + 2 = 3


// 2. Numeric operators
console.log(1 + 1); // add : 2
console.log(1 - 1); // substract : 0
console.log(1 / 1); // divide : 1
console.log(1 * 1); // multiply : 1
console.log(5 % 2); // remainder : 1
console.log(2 ** 3); // exponentiation : 8


// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); //preIncrement: 3, counter: 3
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`); //preIncrement: 3, counter: 4
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); //preIncrement: 3, counter: 3
const postDecrement = counter--;
console.log(`preIncrement: ${postDecrement}, counter: ${counter}`); //preIncrement: 3, counter: 2


// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;


// 5. Comparison operators
console.log(10 < 6); // less than : false
console.log(10 <= 6); // less than or equal : false
console.log(10 > 6); // greater than : true
console.log(10 >= 6); // greater than or equal : true 


// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${ value1 || value2 || check()}`);
// *** It is efficient to use expression at the end when we use logical operators
//     because the condition is validated from left to right.
//     In this example, if the value1 or value2 is true, the function 'check()' won't be called.

// && (and), finds the first falsy value
console.log(`and: ${ value1 && value2 && check()}`);

// often used to compress long if-statement nullableObject && nullableObject.something
//if (nullableObject != null) {
//    nullableObject.something;
//}

function check() {
    for (let i=0; i < 10; i++) {
        //wasting time
        console.log('@');
    }
    return true;
}

// ! (not)
console.log(!value1); //false


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == lose equality, with type conversion
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false

// == strict equality, no type conversion
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

// object equality by reference
const Heeyoung1 = { name : 'Heeyoung' };
const Heeyoung2 = { name : 'Heeyoung' };
const Heeyoung3 = Heeyoung1;
console.log(Heeyoung1 == Heeyoung2); //false
console.log(Heeyoung1 === Heeyoung2); //false
console.log(Heeyoung1 == Heeyoung3); //true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false


// 8. Conditional operators: if
// if, else if, else
const name = 'aa';
if (name === 'Heeyoung') {
    console.log('Welcome, Heeyoung!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}
// unknown


// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');


// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}
//go away!


// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i>0) {
    console.log(`while: ${i}`);
    i--;
}
// while: 3
// while: 2
// while: 1

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);
// do while: 0

// for loop, for(begin; condition; step)
for (i = 3 ; i > 0; i--){
    console.log(`for: ${i}`);
}
// for: 3
// for: 2
// for: 1

for (let i = 3; i > 0; i= i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}
// inline variable for: 3
// inline variable for: 1

// nested loops
for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}
// i: 0, j:0
// i: 0, j:1
// i: 0, j:2
// i: 1, j:0
// i: 1, j:1
// i: 1, j:2
// i: 2, j:0
// i: 2, j:1
// i: 2, j:2

// break, continue
// iterate from 0 to 5 and print only even numbers (use continue)
for(let i = 0; i < 5; i++){
    if ( i % 2 !== 0) {
        continue;
    }
    console.log(`continue. ${i}`);
}
// continue. 0
// continue. 2
// continue. 4

// iterate from 0 to 5 and print numbers until reaching 3 (use break)
for(let i = 0; i < 5; i++){
    if ( i > 3 ) {
        break;
    }
    console.log(`break. ${i}`);
}
// break. 0
// break. 1
// break. 2
// break. 3
