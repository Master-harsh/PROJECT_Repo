let hours = 0;
let minutes = 0;
let secends = 0;
let millisecends = 0;
let timerInterval;

function updateDisplay() {
    const timebar = document.getElementById('timebar');
    timebar.textContent = `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} :  ${String(secends).padStart(2, '0')} : ${String(millisecends).padStart(3, '0')}`;
} 

function startTime() {
    timerInterval = setInterval(() => {
        millisecends = millisecends + 10;
        if (millisecends >= 1000) {
            millisecends = 0;
            secends++;
        }

        if (secends >= 60) {
            secends = 0;
            minutes++;
        }

        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();
    }, 10);

    // document.getElementById('start-btn').style.display = "none";
    // document.getElementById("pause-btn").style.display = "inline";
    // document.getElementById("reset-btn").style.display = "inline";
}

function PauseTime() {
    clearInterval(timerInterval);

    // document.getElementById('pause-btn').style.display = "none";
    // document.getElementById("start-btn").style.display = "inline";
    // document.getElementById("reset-btn").style.display = "inline";
}

function ResetTime() {
    clearInterval(timerInterval);

    hours = 0;
    minutes = 0;
    secends = 0;
    millisecends = 0;

    updateDisplay();

    // document.getElementById("start-btn").style.display = "inline";
    // document.getElementById("reset-btn").style.display = "inline";
}

document.getElementById('start-btn').addEventListener('click', () => {
    clearInterval(timerInterval);
    startTime();
});

document.getElementById('pause-btn').addEventListener("click", PauseTime);

document.getElementById('reset-btn').addEventListener('click', ResetTime);