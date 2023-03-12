import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onFormClick);

function onFormClick(e) {
  e.preventDefault();
  const { amount, delay, step } = e.target.elements;
  let totalDelay = Number(delay.value);
  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(i, totalDelay)
      .then(value => Notify.success(value))
      .catch(error => Notify.failure(error));
    totalDelay += Number(step.value);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        res(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        rej(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
