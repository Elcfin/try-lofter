window.onload = function () {
    //红心与灰心start
    let likeChange = document.getElementsByClassName("likeChange");
    for (let i = 0; i < likeChange.length; i++) {
        likeChange[i].onclick = function () {
            let reg = new RegExp("like.svg");
            if (reg.test(this.src)) {
                this.src = "Images\\index\\uC-bottomicon\\like(red).svg";
            } else {
                this.src = "Images\\index\\uC-bottomicon\\like.svg";
            }
        }
    }
    //红心与灰心end

    //评论展开与收起start
    let commentsChange = document.getElementsByClassName("commentsChange");
    for (let i = 0; i < commentsChange.length; i++) {
        commentsChange[i].onclick = function () {
            let commentsInV = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("comments-inv")[0];
            let commentsV = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("comments-v")[0];
            let commentsVorInV;
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
    let uCContent = document.getElementsByClassName("uC-content");
    for (let i = 0; i < uCContent.length; i++) {
        uCContent[i].onclick = function () {
            let uCContentImgVorInV = this.childNodes[1];
            if (uCContentImgVorInV.className == "uC-contentImgMax") {
                uCContentImgVorInV.className = "uC-contentImgMin";
            } else if (uCContentImgVorInV.className == "uC-contentImgMin") {
                uCContentImgVorInV.className = "uC-contentImgMax";
            }
        }
    }
    //图片的展开与收起end

    //发布动态页展开start
    let hideGreyIcon = document.getElementsByClassName("icon");
    for (let i = 0; i < hideGreyIcon.length; i++) {
        hideGreyIcon[i].addEventListener("click", function () {
            let hideGrey = document.getElementById("hideGrey");
            let bodyHeight = document.body.scrollHeight; //获取页面全部高度
            hideGrey.style.display = "block";
            hideGrey.style.height = bodyHeight + "px";
        });
        hideGreyIcon[i].addEventListener("click", function () {
            let hidePublish = document.getElementById("hidePublish");
            hidePublish.style.opacity = 1;
            hidePublish.style.height = "auto";
            hidePublish.style.zIndex = 40;
            let pbName = document.getElementById("pb-name");
            pbName.style.height = 30 + "px";
            let pbContent = document.getElementById("pb-content");
            pbContent.style.height = 300 + "px";
            //pbContent.style.opacity = 1;
            let publishBar = document.getElementById("publishBar");
            publishBar.style.opacity = 0;
            publishBar.style.height = 0;
            publishBar.style.zIndex = 30;
            let profilePhotoPublisher = document.getElementById("profilePhotoPublisher");
            profilePhotoPublisher.style.height = 60 + "px";
            let profilePhotoPublisherImg = document.getElementById("profilePhotoPublisherImg");
            profilePhotoPublisherImg.style.height = 60 + "px";
            let profilePhotoImg = document.getElementById("profilePhotoImg");
            profilePhotoImg.style.height = 0 + "px";
            profilePhotoImg.style.opacity = 0;
            let publishTriangle = document.getElementById("publishTriangle");
            publishTriangle.style.opacity = 1;
            let hidePublishContent = document.getElementById("hidePublishContent");
            hidePublishContent.style.opacity = 1;
            //let pbInname = document.getElementById("pb-inname");
            //pbInname.style.opacity = 1;
        });
    }
    let cancel = document.getElementById("cancel");
    cancel.addEventListener("click", function () {
        let hideGrey = document.getElementById("hideGrey");
        hideGrey.style.display = "none";
        let hidePublish = document.getElementById("hidePublish");
        hidePublish.style.opacity = 0;
        hidePublish.style.height = 0 + "px";
        hidePublish.style.zIndex = 30;
        let publishBar = document.getElementById("publishBar");
        publishBar.style.opacity = 1;
        publishBar.style.height = 114 + "px";
        publishBar.style.zIndex = 35;
        let pbName = document.getElementById("pb-name");
        pbName.style.height = 12.5 + "px";
        let pbContent = document.getElementById("pb-content");
        pbContent.style.height = 0 + "px";
        let profilePhotoPublisher = document.getElementById("profilePhotoPublisher");
        profilePhotoPublisher.style.height = 0 + "px";
        let profilePhotoPublisherImg = document.getElementById("profilePhotoPublisherImg");
        profilePhotoPublisherImg.style.height = 0 + "px";
        let profilePhotoImg = document.getElementById("profilePhotoImg");
        profilePhotoImg.style.height = 114 + "px";
        profilePhotoImg.style.opacity = 1;
        let publishTriangle = document.getElementById("publishTriangle");
        publishTriangle.style.opacity = 0;
        let hidePublishContent = document.getElementById("hidePublishContent");
        hidePublishContent.style.opacity = 0;
        //pbContent.style.opacity = 0;
        //let pbInname = document.getElementById("pb-inname");
        //pbInname.style.opacity = 0;
    });
    //发布动态页收起end
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