function throttle(func, delay) {
    let shift = true;
    return function () {
        if (!shift) {
            return;
        }
        shift = false;
        setTimeout(() => {
            func.apply(this, arguments);
            shift = true;
        }, delay);
    }
}