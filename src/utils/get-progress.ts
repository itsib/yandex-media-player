export const getProgress = (duration?: number): string => {
  if (duration === undefined) {
    return '';
  }
  let seconds: number | string = Math.abs(parseInt(`${duration % 60}`, 10));
  let minutes: number | string = Math.abs(parseInt(`${(duration / 60) % 60}`, 10));
  let hours: number | string = Math.abs(parseInt(`${(duration / (60 * 60)) % 24}`, 10));

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${hours !== '00' ? `${hours}:` : ''}${minutes}:${seconds}`;
};
