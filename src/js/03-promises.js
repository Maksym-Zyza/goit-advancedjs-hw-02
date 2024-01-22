import { showIziToast } from './iziToast';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

const createPromise = (position, delay) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.3
        ? resolve({ position, delay })
        : reject({ position, delay });
    }, delay);
  });

function onSubmit(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.target.elements;
  const data = {
    delay: Number(delay.value),
    step: Number(step.value),
    amount: Number(amount.value),
  };
  console.log(data);
  if (data.delay >= 0 && data.step >= 0 && data.amount > 0) {
    delayCreatePromises(data.delay, data.step, data.amount);
    form.reset();
  } else showIziToast('❗️ All values must be positive', '#fa903e');
}

function delayCreatePromises(timeout, step, amount) {
  setTimeout(() => {
    for (let i = 0; i < amount; i++) {
      const promiseDelay = i === 0 ? 0 : step * i;
      createPromise(i, promiseDelay)
        .then(({ position, delay }) => {
          const message = `✅ Fulfilled promise ${position} in ${delay}ms`;
          showIziToast(message, '#9ae39c');
        })
        .catch(({ position, delay }) => {
          const message = `❌ Rejected promise ${position} in ${delay}ms`;
          showIziToast(message, '#e39c9a');
        });
    }
  }, timeout);
}
