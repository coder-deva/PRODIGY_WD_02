"use strict";
const btnsEl = document.querySelectorAll(".btn");
const timerEl = document.querySelector(".timer");
let hour = 0;
let minute = 0;
let seconds = 0;
let count = 0;
let timer;
let html;

btnsEl.forEach((btns) => {
    btns.addEventListener("click", () => {
        if (btns.id === "start") {
            timer = true;
            stopWatch();
        } else if (btns.id === "stop") {
            timer = false;
            stopWatch();
        } else {
            timer = false;
            hour = 0;
            minute = 0;
            seconds = 0;
            count = 0;
            html = `<p>00:00:00:</p><span>00</span>`;
            timerEl.innerHTML = html;
            stopWatch();
        }
    });
});

function stopWatch() {
    if (timer) {
        count++;
        if (count == 100) {
            seconds++;
            count = 0;
        }
        if (seconds == 60) {
            minute++;
            seconds = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
            seconds = 0;
        }
        let hrString = hour;
        let minString = minute;
        let secString = seconds;
        let countString = count;
        if (hour < 10) {
            hrString = "0" + hrString;
        }
        if (minute < 10) {
            minString = "0" + minString;
        }
        if (seconds < 10) {
            secString = "0" + secString;
        }
        if (count < 10) {
            countString = "0" + countString;
        }
        html = `<p>${hrString}:${minString}:${secString}:</p><span>${countString}</span>`;
        timerEl.innerHTML = html;
        setTimeout(stopWatch, 10);
    }
}
