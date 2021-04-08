window.onload = function () {

    function likeChange() {
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
    }

    likeChange();

    function commentsChange() {
        let userContentOut = document.querySelectorAll(".userContentOut");
        for (let i = 0; i < userContentOut.length; i++) {
            userContentOut[i].onclick = function () {
                if (event.target.className == "commentsChange") {
                    let commentsV = this.querySelector(".comments-v");
                    let commentsInV = this.querySelector(".comments-inv");
                    if (commentsInV) {
                        commentsInV.className = "comments-v";
                    } else if (commentsV) {
                        commentsV.className = "comments-inv";
                    }
                }
            }
        }
    }

    commentsChange();

    function imgSizeChange() {
        let uCContent = document.querySelectorAll(".uC-content");
        for (let i = 0; i < uCContent.length; i++) {
            uCContent[i].childNodes[1].onclick = function () {
                if (this.className == "uC-contentImgMax") {
                    this.className = "uC-contentImgMin";
                } else if (this.className == "uC-contentImgMin") {
                    this.className = "uC-contentImgMax";
                }
            }
        }
    }

    imgSizeChange()

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
    });
}