window.onload = function () {
    //红心与灰心start
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
    //红心与灰心end

    //评论展开与收起start
    var commentsChange = document.getElementsByClassName("commentsChange");
    for (var i = 0; i < commentsChange.length; i++) {
        commentsChange[i].onclick = function () {
            var commentsInV  = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("comments-inv")[0];
            var commentsV  = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("comments-v")[0];
            var commentsVorInV;
            if(commentsInV)
            {
                commentsVorInV=commentsInV;
            }
            else{
                commentsVorInV=commentsV;
            }
            //var commentsVorInV = comments.childNodes[1];
            if (commentsVorInV.className == "comments-v") {
                commentsVorInV.className = "comments-inv";
            }
            else {
                commentsVorInV.className = "comments-v";
            }
        }
    }
    //评论展开与收起end
}

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