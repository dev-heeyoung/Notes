// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// ** when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, reading files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('heeyoung');
        //reject(new Error('no network'));
    }, 2000);
});


// 2. Consumers: then, catch, finally
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => { // It is always executed at the end regardless of success 
        console.log('finally');
    });
// doing something...
// heeyoung
// finally


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));
    // 5 (takes 2 seconds)


// 4. Error Handling
const getHen1 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000)
    });
const getEgg1 = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    });
const cook1 = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000)
    });

getHen1()
    .then(hen => getEgg1(hen))
    .then(egg => cook1(egg))
    .then(meal => console.log(meal));
//🐔 => 🥚 => 🍳

// simple version
// when the function receive one return value and the next function use it as a parameter
getHen1()
    .then(getEgg1)
    .then(cook1)
    .then(console.log);
//🐔 => 🥚 => 🍳

// with reject
const getHen2 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000)
    });
const getEgg2 = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook2 = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000)
    });

getHen2()
    .then(getEgg2)
    .catch(error => {
        return '🍖';
    })
    .then(cook2)
    .then(console.log)
    .catch(console.log);
// 🍖 => 🍳