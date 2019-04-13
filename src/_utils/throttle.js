// Throttle for error messages
let timeOut = null;
export let throttle = (callback, time) => {
  clearTimeout(timeOut);
  timeOut = setTimeout(() => {
    callback();
  }, time);
};