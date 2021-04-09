function listPublishOut() {
    let listArray = [
        '<div class="user"><a href="Pages\\UserHomePage02.html"><img data-src="Images\\index\\other\\dragon.jpg"></a></div>',
        '<div class="Triangle"></div>'
        //'<div class="userContentOut"></div>'
    ];
    let userContentOutArray = [
        //'<div class="userContent"></div>',
        //'<div class="comments-inv"></div>'
    ];
    let userContentArray = [
        '<div class="uC-name"><a href="Pages\\UserHomePage02.html">Elcfin</a></div>',
        '<div class="uC-title"></div>',
        '<div class="uC-content"><div class="uC-contentArticle"></div></div>'
        //'<div class="uC-bottom"></div>'
    ];
    let uCbottomArray = [
        '<div class="uCb-tag"><ul class="dock"><li style="padding-right: 6px;"><img data-src="Images\\index\\uC-bottomicon\\tag.svg"></li></ul></div>',
        '<div class="uCb-like"><ul class="dock"><li><span class="popularity">热度（0）</span></li><li><span class="commentsChange">评论（0）</span></li><li><span>分享</span></li><li><span>推荐</span></li><li style="padding-right: 0px;"><span><img class="likeChange" data-src="Images\\index\\uC-bottomicon\\like.svg"></span></li></ul></div>'
    ];
    let commentsInvArray = [
        '<div class="publish"><input class="publishOutWrite" type="text"><input class="publishOut" type="submit" value="发布" /></div><div class="commentsTotal"></div>'
    ];

    let list = document.createElement("div");
    list.className = "list";
    for (let i = 0; i < listArray.length; i++)
        list.innerHTML += listArray[i];

    let userContentOut = document.createElement("div");
    userContentOut.className = "userContentOut";

    let userContent = document.createElement("div");
    userContent.className = "userContent";
    for (let i = 0; i < userContentArray.length; i++)
        userContent.innerHTML += userContentArray[i];

    let uCbottom = document.createElement("div");
    uCbottom.className = "uC-bottom";
    for (let i = 0; i < uCbottomArray.length; i++)
        uCbottom.innerHTML += uCbottomArray[i];

    userContent.appendChild(uCbottom);

    let commentsInv = document.createElement("div");
    commentsInv.className = "comments-inv";
    for (let i = 0; i < commentsInvArray.length; i++)
        commentsInv.innerHTML += commentsInvArray[i];

    userContentOut.appendChild(userContent);
    userContentOut.appendChild(commentsInv);
    list.appendChild(userContentOut);

    let mBL = document.getElementById("mB-l");
    mBL.insertBefore(list, mBL.querySelector(".list"));
}

let publishList = document.querySelector("#publishList");
publishList.addEventListener("click", function () {
    listPublishOut();
    let pbtitle = document.querySelector("#pb-title");
    let uCtitle = document.querySelector(".uC-title");
    if (pbtitle.value) {
        uCtitle.innerHTML = "【标题】" + pbtitle.value;
    }

    let pbcontent = document.querySelector("#pb-content");
    let uCcontentArticle = document.querySelector(".uC-contentArticle");
    uCcontentArticle.innerHTML = "<p>" + pbcontent.value + "</p>";
    /*for (let i = 0, j = 0; pbcontent.value[j]; i++) {
        uCcontentArticle.innerHTML += pbcontent.value[j++];
        if (i == 56) {
            uCcontentArticle.innerHTML += "<br />";
            i = 0;
        }
    }*/

    let pbimg = document.querySelector("#pb-img");
    if (pbimg.value) {
        let img = document.createElement("img");
        img.className = "uC-contentImgMin";
        img.setAttribute("data-src", pbimg.value);
        let uCcontent = document.querySelector(".uC-content");
        uCcontent.insertBefore(img, uCcontent.firstChild);
    }

    let dock = document.querySelector(".uCb-tag .dock");
    let pbtag = document.querySelector("#pb-tag");
    if (pbtag.value) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.innerHTML = pbtag.value;
        li.appendChild(a);
        dock.appendChild(li);
    }

    pbtitle.value = "";
    pbimg.value = "";
    pbcontent.value = "";
    pbtag.value = "";
    lazyload();

    let likeChange = document.querySelector(".likeChange");
    likeChange.addEventListener("click", function () {
        let reg = new RegExp("like.svg");
        if (reg.test(this.src)) {
            this.src = "Images\\index\\uC-bottomicon\\like(red).svg";
        } else {
            this.src = "Images\\index\\uC-bottomicon\\like.svg";
        }
    }, false);

    let userContentOut = document.querySelector(".userContentOut");
    userContentOut.addEventListener("click", function () {
        if (event.target.className == "commentsChange") {
            let commentsV = this.querySelector(".comments-v");
            let commentsInV = this.querySelector(".comments-inv");
            if (commentsInV) {
                commentsInV.className = "comments-v";
            } else if (commentsV) {
                commentsV.className = "comments-inv";
            }
        }
    }, false);

    let uCContentImg = document.querySelector(".uC-content img");
    uCContentImg.addEventListener("click", function () {
        if (this.className == "uC-contentImgMax") {
            this.className = "uC-contentImgMin";
        } else if (this.className == "uC-contentImgMin") {
            this.className = "uC-contentImgMax";
        }
    }, false);

    userContentOut.addEventListener("click", function () {
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
            this.querySelector(".commentsTotal").appendChild(divComment);
            this.querySelector(".publishOutWrite").value = "";
        }
    }, false);

    let cancel = document.querySelector("#cancel");
    cancel.click();
}, false);