window.onload = function () {
    //懒加载start
    function lazyload() {
        let imgs = document.querySelectorAll("img");
        //获取可视区域高度
        let h = window.innerHeight;
        //获取滚动区域高度
        let s = document.documentElement.scrollTop;
        for (let i = 0; i < imgs.length; i++) {
            //图片距离顶部的距离小于可视区域和滚动区域之和时懒加载函数执行
            if ((h + s) > imgs[i].offsetTop) {
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

    let tContentUserFocusChange = document.getElementsByClassName("tContentUserFocusChange");
    for (let i = 0; i < tContentUserFocusChange.length; i++) {
        tContentUserFocusChange[i].onclick = function () {
            if (this.value == "取消关注") {
                this.value = "+关注";
                this.style.letterSpacing = 6 + "px";
                this.style.backgroundColor = "rgb(125, 166, 0)";
                this.style.color = "rgb(255,255,255)";
                alert("取消关注成功！");
            } else {
                this.value = "取消关注";
                this.style.letterSpacing = 1 + "px";
                this.style.backgroundColor = "rgb(234, 234, 234)";
                this.style.color = "rgb(160, 160, 160)";
                alert("关注成功！");
            }
        }
    }

}

/*
function throttle(method, delay) {
    let timer = null;
    return function () {
        let context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            method.apply(context, args);
        }, delay);
    }
}
*/