window.onload = function () {
    let isFocused = document.getElementById("isFocused");
    isFocused.onclick = function () {
        if (isFocused.innerHTML == "+关注") {
            isFocused.innerHTML = "取消关注";
        } else {
            isFocused.innerHTML = "+关注";
        }
    }
}