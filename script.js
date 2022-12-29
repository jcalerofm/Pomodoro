const timeEl = document.getElementById('time');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let interval;
let seconds = 1500;

function updateTime() {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  timeEl.innerHTML = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function startTimer() {
  interval = setInterval(() => {
    seconds--;
    updateTime();
    if (seconds === 0) {
      stopTimer();
      alert("Time's up!");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  seconds = 1500;
  updateTime();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);


updateTime();
