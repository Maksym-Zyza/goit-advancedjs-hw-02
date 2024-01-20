const timer = {
  input: document.querySelector('#datetime-picker'),
  btn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

timer.btn.addEventListener('click', handlerTimer);

function handlerTimer() {
  const { input, btn, days, hours, minutes, seconds } = timer;
  const currentTime = new Date();
  const selectedTime = new Date(input.value);
  let timerTime = Math.floor((selectedTime - currentTime) / 1000);

  if (timerTime > 0) {
    const intervalId = setInterval(() => {
      btn.disabled = true;
      timerTime--;
      days.textContent = getValue(timerTime / (24 * 3600));
      hours.textContent = getValue((timerTime % (24 * 3600)) / 3600);
      minutes.textContent = getValue((timerTime % 3600) / 60);
      seconds.textContent = getValue(timerTime % 60);
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
      btn.disabled = false;
      console.log(intervalId);
    }, timerTime * 1000);
  } else {
    alert('Please choose a date in the future');
    btn.disabled = false;
  }
}

const padStart = value => value.toString().padStart(2, '0');
const getValue = timerTime => padStart(Math.floor(timerTime));

function getStartDate(date) {
  const year = date.getFullYear();
  const month = padStart(date.getMonth() + 1);
  const day = padStart(date.getDate());
  const hours = padStart(date.getHours());
  const minutes = padStart(date.getMinutes());
  timer.input.value = `${year}-${month}-${day}T${hours}:${minutes}`;
}

getStartDate(new Date());
