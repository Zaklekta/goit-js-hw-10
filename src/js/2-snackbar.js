'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import successSign from '../img/bi_check2-circle.svg';
import rejectSign from '../img/bi_x-octagon.svg';

const formEl = document.querySelector('.form');
const radioElems = document.querySelectorAll('fieldset input');
const inputDelayEl = formEl.elements.delay;
const inputStateEl = formEl.elements.state;
const labelEl = document.querySelector('label');
const fieldsetEl = document.querySelector('fieldset');
const btnEl = document.querySelector('button');

labelEl.classList.add('form-label');
inputDelayEl.classList.add('input-delay');
fieldsetEl.classList.add('fieldset');
btnEl.classList.add('submit-btn');

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const delayValue = formEl.elements.delay.value;
  let checkedValue = '';
  for (let i = 0; i < radioElems.length; i++) {
    if (radioElems[i].checked) {
      checkedValue = radioElems[i].value;
    }
  }
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (checkedValue == 'fulfilled') {
        resolve(delayValue);
      } else {
        reject(delayValue);
      }
    }, delayValue);
  });

  promise
    .then(result =>
      iziToast.success({
        title: 'OK',
        message: `Fulfilled promise in ${result}ms`,
        position: 'topCenter',
        iconUrl: successSign,
        backgroundColor: 'rgb(89, 161, 13)',
        titleColor: 'rgb(255, 255, 255)',
        messageColor: 'rgb(255, 255, 255)',
        messageSize: '16',
        iconColor: 'rgb(255, 255, 255)',
        theme: 'dark',
        progressBarColor: 'rgb(255, 255, 255)',
      })
    )
    .catch(error =>
      iziToast.error({
        title: '',
        message: `Rejected promise in ${error}ms`,
        iconUrl: rejectSign,
        backgroundColor: 'rgb(255, 99, 71)',
        titleColor: 'rgb(255, 255, 255)',
        messageColor: 'rgb(255, 255, 255)',
        messageSize: '16',
        iconColor: 'rgb(255, 255, 255)',
        theme: 'dark',
        progressBarColor: 'rgb(255, 255, 255)',
        position: 'topCenter',
      })
    );
  formEl.reset();
});
