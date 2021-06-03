const offsetHeight = 854;

const menuAppear = function () {
    const scrollTop = document.documentElement.scrollTop;
    const menu = document.querySelector("#menu");
    const mBL = document.querySelector("#mB-l");
    if (offsetHeight - scrollTop < 0) {
        menu.style.position = "fixed";
        menu.style.left = mBL.right + 20 + "px"; //获取实时左侧相对距离
        menu.style.top = 94 + "px";
    } else {
        menu.style.position = "static";
    }
}

window.addEventListener("scroll", menuAppear, false);