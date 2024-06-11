'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import successSign from '../img/bi_check2-circle.svg';
import rejectSign from '../img/bi_x-octagon.svg';

const formEl = document.querySelector('.form');
const radioElems = document.querySelectorAll('fieldset input');
console.log(radioElems);
formEl.addEventListener('submit', event => {
  event.preventDefault();
  const delayValue = formEl.elements.delay.value;
  let checkedValue = '';
  for (let i = 0; i < radioElems.length; i++) {
    if (radioElems[i].checked) {
      checkedValue = radioElems[i].value;
    }
    break;
  }
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (checkedValue == 'fulfilled') {
        resolve(
          iziToast.success({
            title: 'OK',
            message: `Fulfilled promise in ${delayValue}ms`,
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
        );
      } else {
        reject(
          iziToast.error({
            title: '',
            message: `Rejected promise in ${delayValue}ms`,
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
      }
    }, delayValue);
  });

  promise
    .then(result => console.log(result))
    .catch(error => console.log(error));
  formEl.reset();
});
