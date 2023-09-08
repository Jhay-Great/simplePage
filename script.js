'use strict'
const day = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const time = document.querySelector('[data-testid="currentUTCTime"]');


const date = new Date();
day.textContent = `Today: ${new Intl.DateTimeFormat('en-GB', {weekday: "long"}).format(date)}`;

const timeInMilliseconds = date.getTime();
time.textContent = `Time: ${timeInMilliseconds}`
console.log(date.getTime());