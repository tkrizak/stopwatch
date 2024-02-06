const stopwatchElement = document.querySelector('.js-stopwatch');
const startButton = document.querySelector('.js-start-button');
const resetButton = document.querySelector('.js-reset-button');

const milisecondsElement = document.querySelector('.js-miliseconds');
const secondsElement = document.querySelector('.js-seconds');
const minutesElement = document.querySelector('.js-minutes');
const hoursElement = document.querySelector('.js-hours');

// start button

function toggleStartButton() {
  if (startButton.innerHTML === 'Start') {
    startButton.innerHTML = 'Stop';
    startButton.classList.add('stop-button');
  } else {
    startButton.innerHTML = 'Start';
    startButton.classList.remove('stop-button');
  }
}

startButton.addEventListener('click', () => {
  toggleStartButton();
  toggleStopwatch();
});

// reset button

resetButton.addEventListener('click', () => {
  startButton.innerHTML = 'Start';
  resetStopwatch();
});

function resetStopwatch() {
  clearInterval(milisecondsIntervalId);
  isCounting = false;
  miliseconds = 0;
  milisecondsElement.innerHTML = '0' + miliseconds;

  clearInterval(secondsIntervalId);
  isCounting = false;
  seconds = 0;
  secondsElement.innerHTML = '0' + seconds;

  clearInterval(minutesIntervalId);
  isCounting = false;
  minutes = 0;
  minutesElement.innerHTML = '0' + minutes + ':';

  clearInterval(hoursIntervalId);
  isCounting = false;
  hours = 0;
  hoursElement.innerHTML = '0' + hours + ':';
}

// stopwatch timer

function toggleStopwatch() {
  countMiliseconds();
  countSeconds();
  countMinutes();
  countHours();
}

let milisecondsIntervalId;
let secondsIntervalId;
let minutesIntervalId;
let hoursIntervalId;

let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let isCounting;

function countMiliseconds() {
  if (!isCounting) {
    isCounting = true;

    milisecondsIntervalId = setInterval(() => {
      miliseconds++;

      if (miliseconds < 10) {
        milisecondsElement.innerHTML = '0' + miliseconds;
      } else if (miliseconds > 99) {
        miliseconds = 0;
        milisecondsElement.innerHTML = '0' + miliseconds;
      } else {
        milisecondsElement.innerHTML = miliseconds;
      }
    }, 10);
  } else {
    isCounting = false;
    miliseconds;
    setTimeout(() => {
      clearInterval(milisecondsIntervalId);
    }, 0);
  }
}

function countSeconds() {
  if (isCounting) {
    secondsIntervalId = setInterval(() => {
      seconds++;

      if (seconds < 10) {
        secondsElement.innerHTML = '0' + seconds;
      } else if (seconds > 15) {
        seconds = 0;
        secondsElement.innerHTML = '0' + seconds;
      } else {
        secondsElement.innerHTML = seconds;
      }
    }, 1000);
  } else {
    isCounting = false;
    seconds;
    setTimeout(() => {
      clearInterval(secondsIntervalId);
    }, 0);
  }
}

function countMinutes() {
  if (isCounting) {
    minutesIntervalId = setInterval(() => {
      minutes++;

      if (minutes < 10) {
        minutesElement.innerHTML = '0' + minutes + ':';
      } else if (minutes > 60) {
        minutes = 0;
        minutesElement.innerHTML = '0' + minutes + ':';
      } else {
        minutesElement.innerHTML = minutes + ':';
      }
    }, 5000);
  } else {
    isCounting = false;
    minutes;
    setTimeout(() => {
      clearInterval(minutesIntervalId);
    }, 0);
  }
}

function countHours() {
  if (isCounting) {
    hoursIntervalId = setInterval(() => {
      hours++;

      if (hours < 10) {
        hoursElement.innerHTML = '0' + hours + ':';
      } else if (hours > 60) {
        hours = 0;
        hoursElement.innerHTML = '0' + hours + ':';
      } else {
        hoursElement.innerHTML = hours + ':';
      }
    }, 3600000);
  } else {
    isCounting = false;
    setTimeout(() => {
      clearInterval(hoursIntervalId);
    }, 0);
  }
}
