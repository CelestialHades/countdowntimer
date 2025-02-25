// 1. Get DOM elements
const targetDateInput = document.getElementById('targetDate');
const display = document.getElementById('display');

// 2. Initialize timer variables
let intervalId = null;

// 3. Function to update the display
function updateDisplay(target) {
  const now = new Date();
  const timeLeft = target - now; // Difference in milliseconds
  
  if (timeLeft <= 0) {
    clearInterval(intervalId);
    intervalId = null;
    display.textContent = '00:00:00:00';
    alert('Time’s up!');
    return;
  }
  
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
  display.textContent = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// 4. Function to start the timer
function startTimer() {
  const targetDate = new Date(targetDateInput.value);
  
  if (isNaN(targetDate) || targetDate <= new Date()) {
    display.textContent = 'Please set a future date!';
    return;
  }
  
  if (intervalId) {
    clearInterval(intervalId); // Clear any existing timer
  }
  
  updateDisplay(targetDate); // Immediate update
  intervalId = setInterval(() => updateDisplay(targetDate), 1000);
}

// 5. Function to reset the timer
function resetTimer() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  display.textContent = '00:00:00:00';
  targetDateInput.value = '';
}