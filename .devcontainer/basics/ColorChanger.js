//generate the random color---
const randomColor = function () {
    let hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
console.log(randomColor());

//method 1 ---
let intervalId;
function startBgColor() {
    intervalId = setInterval(function () {
        document.body.style.backgroundColor = randomColor();
    }, 1000);
}
const start = document.querySelector("#start");
start.addEventListener("click", startBgColor);
// Callback Function: Pass the reference to the function startBgColor without invoking it (i.e., without ())---

const stopBgColor = function () {
    clearInterval(intervalId);
    intervalId(null);
};
const stop = document.querySelector("#stop");
stop.addEventListener("click", stopBgColor);
