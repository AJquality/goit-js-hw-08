const startButton = document.querySelector('[data-start]');
startButton.disabled = false;
const stopButton = document.querySelector('[data-stop]');
stopButton.disabled = true;
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let functionInterval = null;

function startRandomColor() {
  functionInterval = setInterval(function () {
    body.style.cssText = `background-color: ${getRandomHexColor()}`;
  }, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
}

function stopRandomColor() {
  clearInterval(functionInterval);
  startButton.disabled = false;
  stopButton.disabled = true;
}

startButton.addEventListener('click', () => startRandomColor());

stopButton.addEventListener('click', () => stopRandomColor());
