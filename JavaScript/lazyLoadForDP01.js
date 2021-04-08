function lazyload() {
    let imgs = document.querySelectorAll("img");
    //获取可视区域高度
    let clientHeight = document.documentElement.clientHeight;
    //获取滚动区域高度
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < imgs.length; i++) {
        //图片距离顶部的距离小于可视区域和滚动区域之和时懒加载函数执行
        if ((clientHeight + scrollTop) * 3 > imgs[i].offsetTop - 150) {
            imgs[i].src = imgs[i].getAttribute("data-src");
        }
    }
    imgs[imgs.length - 1].onload = function () {
        if (window.waterFall) {
            waterFall();
        }
    };
}

lazyload();

window.addEventListener("scroll", lazyload, false);