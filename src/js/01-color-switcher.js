const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

btnStart.addEventListener('click', () => handler(true));
btnStop.addEventListener('click', () => handler(false));

let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColors(start) {
  if (start) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  } else {
    clearInterval(intervalId);
    document.body.style.backgroundColor = '#fff';
  }
}

function handler(start) {
  changeColors(start);
  btnStart.disabled = start;
}
