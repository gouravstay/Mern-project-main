let timeLeft = 1500; // 25 minutes in seconds
let timerInterval;
let isRunning = false;

function startTimer() {
    isRunning = true;
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
            updateProgressBar();
        } else {
            clearInterval(timerInterval);
            isRunning = false;
            // You can add a notification or sound here to notify the end of the Pomodoro session
        }
    }, 1000);
}

function toggleTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        document.getElementById("start_stop").innerText = "Start Pomodoro Timer";
    } else {
        startTimer();
        document.getElementById("start_stop").innerText = "Stop Pomodoro Timer";
    }
}

// function resetTimer() {
//     clearInterval(timerInterval);
//     isRunning = false;
//     timeLeft = 1500;
//     updateTimerDisplay();
//     updateProgressBar();
//     document.getElementById("start_stop").innerText = "Stop Pomodoro Timer";
// }

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("time-left").innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function updateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    const progressWidth = (timeLeft / 1500) * 100; // Calculate progress percentage
    progressBar.style.width = `${progressWidth}%`;
}
