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
        let uCContentImg = document.querySelectorAll(".uC-content img");
        for (let i = 0; i < uCContentImg.length; i++) {
            uCContentImg[i].onclick = function () {
                if (this.className == "uC-contentImgMax") {
                    this.className = "uC-contentImgMin";
                } else if (this.className == "uC-contentImgMin") {
                    this.className = "uC-contentImgMax";
                }
            }
        }
    }

    imgSizeChange();

    function publishModule() {
        let hideGreyIcon = document.querySelectorAll(".icon");

        function hideGreyBack() {
            let hideGrey = document.querySelector("#hideGrey");
            let bodyHeight = document.documentElement.scrollHeight; //获取页面全部高度
            hideGrey.style.display = "block";
            hideGrey.style.height = bodyHeight + "px";
        }

        for (let i = 0; i < hideGreyIcon.length; i++) {
            hideGreyIcon[i].addEventListener("click", hideGreyBack, false);
            hideGreyIcon[i].addEventListener("click", function () {
                let hidePublish = document.querySelector("#hidePublish");
                let publishBar = document.querySelector("#publishBar");
                hidePublish.id = "hidePublish-inv";
                publishBar.id = "publishBar-inv";
            }, false);
        }

        let cancel = document.getElementById("cancel");

        function hideGreyBackCancel() {
            let hideGrey = document.querySelector("#hideGrey");
            hideGrey.style.display = "none";
        }
        cancel.addEventListener("click", hideGreyBackCancel, false);
        cancel.addEventListener("click", function () {
            let hidePublish = document.querySelector("#hidePublish-inv");
            let publishBar = document.querySelector("#publishBar-inv");
            hidePublish.id = "hidePublish";
            publishBar.id = "publishBar";
        }, false);
    }

    publishModule();

    function commentPublishOut() {
        let commentsTotal = document.querySelectorAll(".commentsTotal");
        for (let i = 0; i < commentsTotal.length; i++) {
            commentsTotal[i].onclick = function () {
                if (event.target.className == "publishOut") {
                    let writing = this.querySelector(".publishOutWrite").value;
                    let divComment = document.createElement("div");
                    divComment.className = "comment";
                    let div = document.createElement("div");
                    let divCommentName = document.createElement("div");
                    divCommentName.className = "commentName";
                    divCommentName.innerHTML = "Elcfin";
                    let divCommentContent = document.createElement("div");
                    divCommentContent.className = "commentContent";
                    divCommentContent.innerHTML = writing;
                    div.appendChild(divCommentName);
                    div.appendChild(divCommentContent);
                    let divCommentReply = document.createElement("div");
                    divCommentReply.className = "commentReply";
                    divCommentReply.innerHTML = "回复";
                    divComment.appendChild(div);
                    divComment.appendChild(divCommentReply);
                    this.appendChild(divComment);
                    this.querySelector(".publishOutWrite").value = "";
                }
            }
        }
    }

    commentPublishOut()
}