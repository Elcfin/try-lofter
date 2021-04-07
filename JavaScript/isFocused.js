function isFocused() {
    let isFocus = document.getElementById("isFocused");
    isFocus.onclick = function () {
        if (isFocus.innerHTML == "+关注") {
            isFocus.innerHTML = "取消关注";
        } else {
            isFocus.innerHTML = "+关注";
        }
    }
}

isFocused();