{
    let mBSide = document.getElementById("mBsideMain");
    //const offsetHeight = mBSide.offsetHeight; //不会随着menu位置的变化而发生改变
    const offsetHeight = 854;

    function menuAppear() {
        let scrollTop = document.documentElement.scrollTop;
        let menu = document.getElementById("menu");
        let mBL = document.getElementById("mB-l");
        if (offsetHeight - scrollTop < 0) {
            menu.style.position = "fixed";
            menu.style.left = mBL.right + 20 + "px"; //获取实时左侧相对距离
            menu.style.top = 94 + "px";
        } else {
            menu.style.position = "static";
        }
    }

    window.addEventListener("scroll", menuAppear, false);
}