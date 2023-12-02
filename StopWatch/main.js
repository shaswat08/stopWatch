const timer = document.querySelector("#timer");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let paused = true;
let timerInterval;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;

        timerInterval = setInterval(updateTime, 1000);
    }
});

pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        clearInterval(timerInterval);
    }
});

resetBtn.addEventListener("click", () => {
    startTime = 0;
    elapsedTime = 0;
    paused = true;
    hrs = 0;
    mins = 0;
    secs = 0;
    clearInterval(timerInterval);
    timer.textContent = "00:00:00";
});

function updateTime(){

    elapsedTime = Date.now() - startTime;
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    secs = newTime(secs);
    mins = newTime(mins);
    hrs = newTime(hrs);

    timer.textContent = `${hrs}:${mins}:${secs}`;

    function newTime(unit){

        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}