
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secEl = document.getElementById('sec');


const newYears = '31 dec 2021';

function countdown(){

    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const seconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(seconds / 24 / 3600);
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = Math.floor(seconds / 60 ) % 60;
    const sec = Math.floor(seconds % 60);



    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secEl.innerHTML = formatTime(sec);
    // console.log(days, hours , minutes, sec);
}
  
function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);