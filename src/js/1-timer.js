'use strict';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import errorSign from '../img/errorSign.svg';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
let userSelectedDate;
const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  buttonStartEl: document.querySelector('[data-start]'),
  daysSpanEl: document.querySelector('[data-days]'),
  hoursSpanEl: document.querySelector('[data-hours]'),
  minSpanEl: document.querySelector('[data-minutes]'),
  secSpanEl: document.querySelector('[data-seconds]'),
};
refs.buttonStartEl.setAttribute('disabled', '');
refs.inputEl.classList.add('data-input');
refs.buttonStartEl.classList.add('start-btn');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      makeElemDisabled(refs.buttonStartEl);
      iziToast.error({
        title: '',
        message: 'Please choose a date in the future',
        iconUrl: errorSign,
        position: 'topCenter',
      });
    } else {
      refs.buttonStartEl.removeAttribute('disabled');
      userSelectedDate = selectedDates[0];
    }
    return userSelectedDate;
  },
};
flatpickr('#datetime-picker', options);

refs.buttonStartEl.addEventListener('click', e => {
  makeElemDisabled(refs.inputEl);
  makeElemDisabled(refs.buttonStartEl);
  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    const diff = userSelectedDate - currentTime;
    let timeObj = addLeadingZero(convertMs(diff));
    refs.daysSpanEl.textContent = timeObj.days;
    refs.hoursSpanEl.textContent = timeObj.hours;
    refs.minSpanEl.textContent = timeObj.minutes;
    refs.secSpanEl.textContent = timeObj.seconds;
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
    removeDisabled(refs.inputEl);
  }, userSelectedDate - Date.now());
});

function makeElemDisabled(elem) {
  elem.setAttribute('disabled', '');
}
function removeDisabled(elem) {
  elem.removeAttribute('disabled');
}

function addLeadingZero(obj) {
  const days = obj.days.toString().padStart(2, '0');
  const hours = obj.hours.toString().padStart(2, '0');
  const minutes = obj.minutes.toString().padStart(2, '0');
  const seconds = obj.seconds.toString().padStart(2, '0');
  return { days, hours, minutes, seconds };
}
