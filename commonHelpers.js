import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as S}from"./assets/vendor-77e16229.js";const p="/goit-js-hw-10/assets/errorSign-c0a9ef0a.svg";function E(t){const u=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:d,minutes:c,seconds:l}}let s;const e={inputEl:document.querySelector("#datetime-picker"),buttonStartEl:document.querySelector("[data-start]"),daysSpanEl:document.querySelector("[data-days]"),hoursSpanEl:document.querySelector("[data-hours]"),minSpanEl:document.querySelector("[data-minutes]"),secSpanEl:document.querySelector("[data-seconds]")};e.buttonStartEl.setAttribute("disabled","");e.inputEl.classList.add("data-input");e.buttonStartEl.classList.add("start-btn");const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){return t[0]<new Date?(i(e.buttonStartEl),S.error({title:"",message:"Please choose a date in the future",iconUrl:p,position:"topCenter"})):(e.buttonStartEl.removeAttribute("disabled"),s=t[0]),s}};m("#datetime-picker",h);e.buttonStartEl.addEventListener("click",t=>{i(e.inputEl),i(e.buttonStartEl);const r=setInterval(()=>{const a=Date.now(),o=s-a;let n=y(E(o));e.daysSpanEl.textContent=n.days,e.hoursSpanEl.textContent=n.hours,e.minSpanEl.textContent=n.minutes,e.secSpanEl.textContent=n.seconds,(o===0||o<0)&&(clearInterval(r),f(e.inputEl))})});function i(t){t.setAttribute("disabled","")}function f(t){t.removeAttribute("disabled")}function y(t){const r=t.days.toString().padStart(2,"0"),a=t.hours.toString().padStart(2,"0"),o=t.minutes.toString().padStart(2,"0"),n=t.seconds.toString().padStart(2,"0");return{days:r,hours:a,minutes:o,seconds:n}}
//# sourceMappingURL=commonHelpers.js.map
