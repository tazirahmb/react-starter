import padLeft from 'voca/pad_left';

export function setCountdown(seconds, firstCb, secondCb) {
  const interval = setInterval(() => {
    seconds -= 1;

    if (seconds >= 0) {
      firstCb(seconds);
    } else {
      secondCb();
      clearInterval(interval);
    }
  }, 1000);
}

export function hmsToSeconds(str) {
  return str.split(':').reduce((acc, time) => 60 * acc + +time);
}

export function secondsToHms(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${padLeft(hours, 2, '00')}:${padLeft(minutes, 2, '00')}:${padLeft(
    seconds,
    2,
    '00'
  )}`;
}
