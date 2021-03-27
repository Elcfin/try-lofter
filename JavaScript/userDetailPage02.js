window.onload = function () {
    //懒加载start
    let imgs = document.querySelectorAll("img");

    function lazyload() {
        let imgs = document.querySelectorAll("img");
        //获取可视区域高度
        let h = window.innerHeight;
        //获取滚动区域高度
        let s = document.documentElement.scrollTop;
        for (let i = 0; i < imgs.length; i++) {
            //图片距离顶部的距离小于可视区域和滚动区域之和时懒加载函数执行
            if ((h + s) * 3 > imgs[i].offsetTop) {
                imgs[i].src = imgs[i].getAttribute("data-src");
            }
        }
    }

    lazyload();
    //当滚动的时候懒加载函数执行
    window.onscroll = function () {
        lazyload();
    };
    //懒加载end
}