// objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScripts are instances of Object
// Object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const heeyoung = { name: 'heeyoung', age: 4 };
print(heeyoung);
// heeyoung
// 4

// with JavaScript magic (dynamically typed language)
// can add properties later
heeyoung.hasJob = true;
console.log(heeyoung.hasJob); // true

// can delete properties later
delete heeyoung.hasJob;


// 2. Computed properties
// key should be always string
console.log(heeyoung.name); // heeyoung
console.log(heeyoung['name']); // heeyoung
heeyoung['hasJob'] = true;
console.log(heeyoung.hasJob); // true

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(heeyoung, 'name');
printValue(heeyoung, 'age');


// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('heeyoung', 30);
console.log(person4);


// 4. Constructor function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}


// 5. in operator: property existence check (key in obj)
console.log('name' in heeyoung); // true
console.log('age' in heeyoung); // true
console.log('random' in heeyoung); // false
console.log(heeyoung.random); //undefined


// 6. for..in vs for..of
// for (key in obj)
for (key in heeyoung){
    console.log(key);
}
// name
// age
// hasJob

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
    console.log(value);
}
// 1
// 2
// 4
// 5


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'heeyoung', age: 20 };
const user2 = user;
user2.age = 24;
console.log(user); // { name: 'heeyoung', age: 24 }

// old way
const user3 = {};
for (key in user){
    user3[key] = user[key];
}
console.log(user3); // { name: 'heeyoung', age: 24 }

// new way
const user4 = Object.assign({}, user);
console.log(user4); // { name: 'heeyoung', age: 24 }

// another example
const fruit1 = { color : 'red' };
const fruit2 = { color : 'blue', size: 'big' }; 
const mixed = Object.assign({}, fruit1, fruit2); // the latest one is applied
console.log(mixed.color); // blue
console.log(mixed.size); // big
