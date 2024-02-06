import { showIziToast } from './iziToast';
import { getRandomHexColor } from './helper';

const TOAST_TIME = 2000;
const INTERVAL_TIME = 1000;
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

btnStart.addEventListener('click', () => handler(true));
btnStop.addEventListener('click', () => handler(false));

let intervalId;
btnStop.disabled = true;

function changeColors(start) {
  if (start) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, INTERVAL_TIME);
    showIziToast('✅ Started color change', '#9ae39c', TOAST_TIME);
  } else {
    clearInterval(intervalId);
    document.body.style.backgroundColor = '#fff';
    showIziToast('❌ Stopped color change', '#fa903e', TOAST_TIME);
  }
}

function handler(start) {
  changeColors(start);
  btnStart.disabled = start;
  btnStop.disabled = !start;
}
