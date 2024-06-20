//generate the random color---
const randomColor = function(){
    let hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
console.log(randomColor());
// console.log(Math.floor(Math.random() * 16));
//16 is the position of the random number

let intervalId;
//method 1 ---
// const startBgColor = function () {
//     intervalId = setInterval(function(){
//         document.body.style.backgroundColor = randomColor();
//     }, 1000);
// }
// document.querySelector('#start').addEventListener('click', startBgColor);

//method 2 ---
document.querySelector('#start').addEventListener('click', function () {
    intervalId = setInterval(function(){
        document.body.style.backgroundColor = randomColor();
    }, 1000);
})

const stopBgColor = function () {
    clearInterval(intervalId);
    intervalId(null);
}
document.querySelector('#stop').addEventListener('click', stopBgColor);
