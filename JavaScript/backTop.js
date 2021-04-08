{
    let backTop = document.getElementById("backTop");
    backTop.onclick = function () {
        let beforeScroll = document.documentElement.scrollTop;
        let timmer = setInterval(backToTop, 1);

        function backToTop() {
            let scrollTop = document.documentElement.scrollTop;
            if (scrollTop > beforeScroll) //向下滚动时打断
            {
                clearInterval(timmer);
                timmer = null;
            }
            scrollTop -= (scrollTop / 80); //越接近顶部速度越慢
            if (scrollTop > 0) {
                window.scrollTo(0, scrollTop);
            } else if (scrollTop <= 0) {
                window.scrollTo(0, 0);
                clearInterval(timmer);
                timmer = null;
            }
            beforeScroll = scrollTop;
        }
    }

    let backTopImg = document.getElementById("backTopImg");

    function buttonAppear() {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 500) {
            backTop.style.opacity = 1;
            backTopImg.style.opacity = 1;
        } else {
            backTop.style.opacity = 0;
            backTopImg.style.opacity = 0;
        }
    }

    window.addEventListener("scroll", buttonAppear, false);
}