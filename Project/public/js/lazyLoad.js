import throttle from './throttle.js';

const lazyload = function () {
    const imgs = document.querySelectorAll("img");
    const clientHeight = document.documentElement.clientHeight; //获取可视区域高度
    const scrollTop = document.documentElement.scrollTop; //获取滚动区域高度

    for (let i = 0; i < imgs.length; i++) {
        if (clientHeight + scrollTop > imgs[i].offsetTop - 150) {
            //图片距离顶部的距离小于可视区域和滚动区域之和时懒加载函数执行
            imgs[i].src = imgs[i].getAttribute("data-src");
        }
    }
}

window.addEventListener("scroll", throttle(lazyload, 1000), false);

export default lazyload;