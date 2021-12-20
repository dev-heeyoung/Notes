// JSON
// JavaScript Object Notation
// - simplest data interchange format
// - lightweight text-based structure
// - easy to read
// - key-value pairs
// - used for serializtion and transmission of data between the network the network connection
// - independent programming language and platform

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json); // true

json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple","banana"]

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    }
}

json = JSON.stringify(rabbit);
console.log(json);
// {"name":"tori","color":"white","size":null,"birthDate":"2021-12-20T22:39:14.815Z"}
// ** method(function) is not included 

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json); 
// {"name":"tori","color":"white"}

json = JSON.stringify(rabbit, (key, value) => {
    //console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'heeyoung' : value;
});
console.log(json);
// {"name":"heeyoung","color":"white","size":null,"birthDate":"2021-12-20T22:43:10.818Z"}


// 2. JSON to Object
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    //console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
// {
//     name: 'tori',
//     color: 'white',
//     size: null,
//     birthDate: '2021-12-20T22:47:33.315Z'
//   }

console.log(rabbit.birthDate.getDate()); // 20
console.log(obj.birthDate.getDate()); // 20 