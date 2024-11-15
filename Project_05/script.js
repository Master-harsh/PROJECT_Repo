const StartButton = document.getElementById('start-Btn');
const StopButton = document.getElementById('stop-Btn');


function getRandomColor() {
    const hexCode = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += hexCode[Math.floor(Math.random() * 16)];
    }

    document.body.style.backgroundColor = color
}



StartButton.addEventListener('click', () => {
   Interval = setInterval(getRandomColor, 2000);
});

// function stopColor() {
//     clearInterval();
// }

StopButton.addEventListener('click', () => {
    clearInterval(Interval);
});