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
    /*let publishOut = document.getElementsByClassName("publishOut");
    for (let i = 0; i < likeChange.length; i++) {
        publishOut[i].onclick = function () {
            let writing = this.parentNode.childNodes[1].value;
            this.parentNode.parentNode.innerHTML += ;
        }
    }*/
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
    /*let uCContent = document.getElementsByClassName("uC-content");
    for (let i = 0; i < uCContent.length; i++) {
        uCContent[i].onclick = function () {
            let uCContentImgVorInV = this.childNodes[1];
            if (uCContentImgVorInV.className == "uC-contentImgMax") {
                uCContentImgVorInV.className = "uC-contentImgMin";
            } else if (uCContentImgVorInV.className == "uC-contentImgMin") {
                uCContentImgVorInV.className = "uC-contentImgMax";
            }
        }
    }*/
    let uCContent = document.getElementsByClassName("uC-content");
    for (let i = 0; i < uCContent.length; i++) {
        uCContent[i].childNodes[1].onclick = function () {
            let uCContentImgVorInV = this;
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
            hidePublish.style.zIndex = 60;
            let pbName = document.getElementById("pb-name");
            pbName.style.height = 30 + "px";
            let pbContent = document.getElementById("pb-content");
            pbContent.style.height = 200 + "px";
            //pbContent.style.opacity = 1;
            let publishBar = document.getElementById("publishBar");
            publishBar.style.opacity = 0;
            publishBar.style.height = 0;
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
            let iconImg = document.getElementsByClassName("iconImg");
            let c = document.getElementsByClassName("c");
            for (var i = 0; i < iconImg.length; i++) {
                iconImg[i].style.opacity = 0;
                c[i].style.opacity = 0;
            }
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
        hidePublish.style.zIndex = 20;
        let publishBar = document.getElementById("publishBar");
        publishBar.style.opacity = 1;
        publishBar.style.height = 114 + "px";
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
        let iconImg = document.getElementsByClassName("iconImg");
        let c = document.getElementsByClassName("c");
        for (var i = 0; i < iconImg.length; i++) {
            iconImg[i].style.opacity = 1;
            c[i].style.opacity = 1;
        }
        //pbContent.style.opacity = 0;
        //let pbInname = document.getElementById("pb-inname");
        //pbInname.style.opacity = 0;
    });
    //发布动态页收起end

    //回到顶部start
    /*let backTop = document.getElementById("backTop");
    backTop.onclick = function () {
        let gotoTop = function () {
            let currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentPosition > 5000) {
                window.scrollTo(0, 0);
            } else if (currentPosition > 150) {
                currentPosition -= 10;
                window.scrollTo(0, currentPosition);
            } else if (currentPosition > 80) {
                currentPosition -= 2;
                window.scrollTo(0, currentPosition);
            } else if (currentPosition > 0) {
                currentPosition -= 1;
                window.scrollTo(0, currentPosition);
            } else {
                window.scrollTo(0, 0);
                clearInterval(repeat);
                repeat = null;
            }
        }
        let repeat = setInterval(gotoTop, 1);
    }*/
    let backTop = document.getElementById("backTop");
    backTop.onclick = function () {
        function backToTop() {
            let currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
            currentPosition -= (currentPosition / 80); //越接近顶部速度越慢
            if (currentPosition > 0) {
                window.scrollTo(0, currentPosition);
            } else if (currentPosition <= 0) {
                window.scrollTo(0, 0);
                clearInterval(repeat);
                repeat = null;
            }
        }
        let repeat = setInterval(backToTop, 1);
    }
    let backTopImg = document.getElementById("backTopImg");
    let buttonAppear = function () {
        let currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentPosition > 500) {
            backTop.style.opacity = 1;
            backTopImg.style.opacity = 1;
        } else {
            backTop.style.opacity = 0;
            backTopImg.style.opacity = 0;
        }
    }
    setInterval(buttonAppear, 1);
    //回到顶部end

    //右侧为空时，menu模块出现并保持吸顶start
    let mBSide = document.getElementById("mBsideMain");
    let menuAppear = function () {
        let currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
        let menu = document.getElementById("menu");
        let mBL = document.getElementById("mB-l");
        if (mBSide.offsetHeight - currentPosition < 0) {
            menu.style.position = "fixed";
            menu.style.left = mBL.right + 20 + "px"; //获取实时左侧相对距离
            menu.style.top = 94 + "px";
        } else {
            menu.style.position = "static";
        }
    }
    setInterval(menuAppear, 1);
    //右侧为空时，menu模块出现并保持吸顶end
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