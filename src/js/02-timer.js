const timer = {
  input: document.querySelector('#datetime-picker'),
  btn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

timer.btn.addEventListener('click', handlerStart);

function handlerStart() {
  const { input, btn, days, hours, minutes, seconds } = timer;
  const currentTime = new Date();
  const selectedTime = new Date(input.value);
  let timerTime = selectedTime - currentTime;

  if (timerTime > 0) {
    const intervalId = setInterval(() => {
      btn.disabled = true;
      timerTime -= 1000;

      days.textContent = getTimerValue(timerTime / (24 * 60 * 60 * 1000));
      hours.textContent = getTimerValue(
        (timerTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      );
      minutes.textContent = getTimerValue(
        (timerTime % (60 * 60 * 1000)) / (60 * 1000)
      );
      seconds.textContent = getTimerValue((timerTime % (60 * 1000)) / 1000);

      console.log(timerTime);
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
      btn.disabled = false;
      console.log(intervalId);
    }, timerTime);
  } else {
    alert('Please choose a data in the future');
    btn.disabled = false;
  }
}

function getTimerValue(timerTime) {
  return Math.floor(timerTime).toString().padStart(2, '0');
}
