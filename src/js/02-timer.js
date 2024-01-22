import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { convertMs, addLeadingZero } from './helper';

const timer = {
  btn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};
timer.btn.disabled = true;
let selectedTime;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedTime = selectedDates[0];
    if (selectedDates[0] < new Date()) {
      alert('Please choose a date in the future');
    } else timer.btn.disabled = false;
  },
};

flatpickr('input[type="text"]', options);
timer.btn.addEventListener('click', handlerTimer);

function handlerTimer() {
  const currentTime = new Date();
  let timerTime = Math.floor(selectedTime - currentTime);

  if (timerTime <= 0) return;
  const intervalId = setInterval(() => {
    timer.btn.disabled = true;
    timerTime -= 1000;
    setValues(timerTime);
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
    timer.btn.disabled = false;
    console.log(intervalId);
  }, timerTime);
}

function setValues(time) {
  const { days, hours, minutes, seconds } = convertMs(time);
  timer.days.textContent = addLeadingZero(days);
  timer.hours.textContent = addLeadingZero(hours);
  timer.minutes.textContent = addLeadingZero(minutes);
  timer.seconds.textContent = addLeadingZero(seconds);
}
