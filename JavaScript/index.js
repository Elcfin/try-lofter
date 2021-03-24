window.onload = function () {
    //红心与灰心start
    var likeChange = document.getElementsByClassName("likeChange");
    for (var i = 0; i < likeChange.length; i++) {
        likeChange[i].onclick = function () {
            var reg = new RegExp("like.svg");
            if (reg.test(this.src)) {
                this.src = "Images\\index\\uC-bottomicon\\like(red).svg";
            } else {
                this.src = "Images\\index\\uC-bottomicon\\like.svg";
            }
        }
    }
    //红心与灰心end

    //评论展开与收起start
    var commentsChange = document.getElementsByClassName("commentsChange");
    for (var i = 0; i < commentsChange.length; i++) {
        commentsChange[i].onclick = function () {
            var commentsInV = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("comments-inv")[0];
            var commentsV = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("comments-v")[0];
            var commentsVorInV;
            if (commentsInV) {
                commentsVorInV = commentsInV;
            } else {
                commentsVorInV = commentsV;
            }
            //var commentsVorInV = comments.childNodes[1];
            if (commentsVorInV.className == "comments-v") {
                commentsVorInV.className = "comments-inv";
            } else if (commentsVorInV.className == "comments-inv") {
                commentsVorInV.className = "comments-v";
            }
        }
    }
    //评论展开与收起end

    //图片的展开与收起start
    var uCContent = document.getElementsByClassName("uC-content");
    for (var i = 0; i < uCContent.length; i++) {
        uCContent[i].onclick = function () {
            var uCContentImgVorInV = this.childNodes[1];
            if (uCContentImgVorInV.className == "uC-contentImgMax") {
                uCContentImgVorInV.className = "uC-contentImgMin";
            } else if (uCContentImgVorInV.className == "uC-contentImgMin") {
                uCContentImgVorInV.className = "uC-contentImgMax";
            }
        }
    }
    //图片的展开与收起end

    //发布动态页展开start
    var hideGreyIcon = document.getElementsByClassName("icon");
    for (var i = 0; i < hideGreyIcon.length; i++) {
        hideGreyIcon[i].addEventListener("click", function () {
            var hideGrey = document.getElementById("hideGrey");
            var bodyHeight = document.body.scrollHeight; //获取页面全部高度
            hideGrey.style.display = "block";
            hideGrey.style.height = bodyHeight + "px";
        });
        hideGreyIcon[i].addEventListener("click", function () {
            var hidePublish = document.getElementById("hidePublish");
            hidePublish.style.display = "grid";
        });
        hideGreyIcon[i].addEventListener("click", function () {
            var publishBar = document.getElementById("publishBar");
            publishBar.style.display = "none";
        });
    }
    var cancel = document.getElementById("cancel");
    cancel.addEventListener("click", function () {
        var hideGrey = document.getElementById("hideGrey");
        var hidePublish = document.getElementById("hidePublish");
        hideGrey.style.display = "none";
        hidePublish.style.display = "none";
        var publishBar = document.getElementById("publishBar");
        publishBar.style.display = "grid";
    });
    //发布动态页收起end
}
//发布动态页展开start
//发布动态页收起end
/*      function SetCookie(sName, sValue) {
        date = new Date();
        s = date.getDate();
        date.setDate(s + 1);
        document.cookie = sName + "=" + escape(sValue) + "; expires=" + date.toGMTString();
    }

    function GetCookie(sName) {
        var aCookie = document.cookie.split("; ");
        for (var i = 0; i < aCookie.length; i++) {
            var aCrumb = aCookie[i].split("=");
            if (sName == aCrumb[0]) {
                return unescape(aCrumb[1]);
            }
        }
        return null;
    }

    function fnLoad() {
        document.body.scrollLeft = GetCookie("scrollLeft");
        document.body.scrollTop = GetCookie("scrollTop");
    }

    function fnUnLoad() {
        SetCookie("scrollLeft", document.body.scrollLeft);
        SetCookie("scrollTop", document.body.scrollTop);
    }

    var num = 1;
    setInterval(function () {
        console.log(num++);
        fnUnLoad();
    }, 1000)*/