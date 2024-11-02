// Get references to elements
const playButton = document.getElementById('img3');
const audio = new Audio('your-audio-file.mp3'); // Replace 'your-audio-file.mp3' with your audio file path
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTime');
const totalDurationDisplay = document.getElementById('totalDuration');

// Play/pause functionality
let isPlaying = false;
playButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }
});

// Update progress bar and time displays
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;

    // Format time display
    const currentTime = formatTime(audio.currentTime);
    const totalDuration = formatTime(audio.duration);
    currentTimeDisplay.textContent = currentTime;
    totalDurationDisplay.textContent = totalDuration;
});

// Format time in MM:SS format
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function updatePlayButton() {
    if (isPlaying) {
        playButton.src = 'pause.png'; // Replace 'pause.png' with your pause button image path
    } else {
        playButton.src = 'play.png'; // Replace 'play.png' with your play button image path
    }
}