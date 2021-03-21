window.onload = function () {
    var likeChange = document.getElementsByClassName("likeChange");
    for (var i = 0; i < likeChange.length; i++) {
        likeChange[i].onclick = function () {
            var reg = new RegExp("like.svg");
            if (reg.test(this.src)) {
                this.src = "Images\\index\\uC-bottomicon\\like(red).svg";
            }
            else {
                this.src = "Images\\index\\uC-bottomicon\\like.svg";
            }
        }
    }
}