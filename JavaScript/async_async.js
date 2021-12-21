// async & await
// clear style of using promise

// 1. async
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         // do network request in 10 secs ...
//         resolve('heeyoung');
//     });
// }
async function fetchUser() {
    return 'heeyoung';
}

const user = fetchUser();
user.then(console.log); // Promise { 'heeyoung' }
console.log(user); // heeyoung


// 2. await: It can be used inside of async function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

// callback hell
// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }

// with async & await
// async function pickFruits() {
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} + ${banana}`;
// }

// with async & await & promise
// async function pickFruits() {
//     const applePromise = getApple();
//     const bananaPromise = getBanana();
//     const apple = await applePromise;
//     const banana = await bananaPromise;
//     return `${apple} + ${banana}`;
// }

pickFruits().then(console.log) // 🍎 + 🍌


// 3. useful promise APIs
function pickAllFruits() {
    return Promise.all()([getApple(), getBanana()]).then(fruits =>
        fruits.join(' + ')
    );
}
pickAllFruits().then(console.log); // 🍎 + 🍌

// race: only the first return value
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log); // 🍌