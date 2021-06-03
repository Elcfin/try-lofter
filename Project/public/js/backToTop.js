import throttle from './throttle.js';

const backToTop = function () {
    let preScroll = document.documentElement.scrollTop;

    const back = function () {
        let nowScroll = document.documentElement.scrollTop;
        if (nowScroll > preScroll) //向下滚动时打断
        {
            clearInterval(timmer);
            timmer = null;
            return;
        }

        nowScroll -= (nowScroll / 80); //越接近顶部速度越慢

        if (nowScroll > 0) {
            window.scrollTo(0, nowScroll);
        } else {
            window.scrollTo(0, 0);
            clearInterval(timmer);
            timmer = null;
        }

        preScroll = nowScroll;
    }

    let timmer = setInterval(back, 1);
};

const backTop = document.querySelector("#backTop");
backTop.addEventListener("click", backToTop, false);

const buttonAppear = function () {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 500) {
        backTop.style.opacity = 1;
        backTopImg.style.opacity = 1;
    } else {
        backTop.style.opacity = 0;
        backTopImg.style.opacity = 0;
    }
}

const backTopImg = document.getElementById("backTopImg");
window.addEventListener("scroll", throttle(buttonAppear, 1000), false);