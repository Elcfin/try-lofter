window.onload = function () {
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