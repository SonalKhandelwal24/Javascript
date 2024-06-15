const myPromise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Async task 1 is completed');
        resolve();
    }, 1000);
})
myPromise1.then(function () { console.log('Promise consumed') })


new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Async task 2 is completed');
        resolve();
    }, 1000);
}).then(function () { console.log('Async 2 resolved') })


const myPromise3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: 'Sonal', password: '1234' });
    }, 1000);
})
myPromise3.then(function (user) { console.log(user) })


const myPromise4 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: 'Sonal', password: '1234' });
        } else {
            reject('Error');
        }
    }, 1000);
})

myPromise4.then((user) => {
    console.log(user);
    return user.username;
}).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finally is executing always, and promise is either resolved and rejected');
})


const myPromise5 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: 'Sonal', password: '1234' });
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000);
})

async function consumePromise5(){
    try{
        let response = await myPromise5;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromise5();


// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json()
//         console.log(data)
//     } catch(error){
//         console.log('Error : ', error)
//     }
// }
// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//    return response.json()
// }).then ((value) => {
//     console.log(value)
// })
// .catch((error) => {
//     console.log('Error')
// })


fetch('https://jsonplaceholder.typicode.com/comments')
.then((response) => {
    return response.json()
 }).then ((value) => {
     console.log(value)
 })
 .catch((error) => {
     console.log('Error')
 })
 

