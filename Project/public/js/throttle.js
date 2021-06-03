const throttle = function (func, delay) {
  let pre = Date.now();
  return function () {
    let now = Date.now();
    if (now - pre >= delay) {
      func();
      pre = Date.now();
    }
  }
}

export default throttle;