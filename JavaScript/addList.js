function addlist() {
    let listArray = [
        '<div class="user"><a href=""><img data-src=""></a></div>',
        '<div class="Triangle"></div>'
        //'<div class="userContentOut"></div>'
    ];
    let userContentOutArray = [
        //'<div class="userContent"></div>',
        //'<div class="comments-inv"></div>'
    ];
    let userContentArray = [
        '<div class="uC-name"><a href=""></a></div>',
        '<div class="uC-title"></div>',
        '<div class="uC-content"><div class="uC-contentArticle"></div></div>'
        //'<div class="uC-bottom"></div>'
    ];
    let uCbottomArray = [
        '<div class="uCb-tag"><ul class="dock"><li style="padding-right: 6px;"><img data-src="Images\\index\\uC-bottomicon\\tag.svg"></li></ul></div>',
        '<div class="uCb-like"><ul class="dock"><li><span class="popularity"></span></li><li><span class="commentsChange"></span></li><li><span>分享</span></li><li><span>推荐</span></li><li style="padding-right: 0px;"><span><img class="likeChange" data-src="Images\\index\\uC-bottomicon\\like.svg"></span></li></ul></div>'
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
    mBL.appendChild(list);
}


for (let i = 0; i < dataContent.itemsIndex.length; i++) {
    addlist();

    let userA = document.querySelectorAll(".user a");
    userA[i].href = dataContent.userA[i];

    let userImg = document.querySelectorAll(".user img");
    userImg[i].setAttribute("data-src", dataContent.userImg[i]);

    let uCnameA = document.querySelectorAll(".uC-name a");
    uCnameA[i].href = dataContent.uCnameA[i];
    uCnameA[i].innerHTML = dataContent.uCname[i];

    let uCtitle = document.querySelectorAll(".uC-title");
    uCtitle[i].innerHTML = dataContent.uCtitle[i];


    if (dataContent.uCcontentImg[i]) {
        let img = document.createElement("img");
        img.className = "uC-contentImgMin";
        img.setAttribute("data-src", dataContent.uCcontentImg[i]);
        let uCcontent = document.querySelectorAll(".uC-content");
        uCcontent[i].insertBefore(img, uCcontent[i].firstChild);
    }
    //<img class="uC-contentImgMin" data-src="">
    let uCcontentArticle = document.querySelectorAll(".uC-contentArticle");
    uCcontentArticle[i].innerHTML = dataContent.uCcontentArticle[i];

    let dock = document.querySelectorAll(".uCb-tag .dock");
    for (j = 0; j < dataContent.tag[i].length; j++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.innerHTML = dataContent.tag[i][j];
        li.appendChild(a);
        dock[i].appendChild(li);
    }

    let popularity = document.querySelectorAll(".popularity");
    popularity[i].innerHTML = dataContent.popularity[i];

    let commentsNum = document.querySelectorAll(".commentsChange");
    commentsNum[i].innerHTML = dataContent.commentsNum[i];

    let commentsTotal = document.querySelectorAll(".commentsTotal");
    for (let j = 0; j < dataContent.comments.itemsIndex[i].length; j++) {
        let divComment = document.createElement("div");
        divComment.className = "comment";
        let div = document.createElement("div");
        let divCommentName = document.createElement("div");
        divCommentName.className = "commentName";
        divCommentName.innerHTML = dataContent.comments.name[i][j];
        let divCommentContent = document.createElement("div");
        divCommentContent.className = "commentContent";
        divCommentContent.innerHTML = dataContent.comments.content[i][j];
        div.appendChild(divCommentName);
        div.appendChild(divCommentContent);
        let divCommentReply = document.createElement("div");
        divCommentReply.className = "commentReply";
        divCommentReply.innerHTML = "回复";
        divComment.appendChild(div);
        divComment.appendChild(divCommentReply);
        commentsTotal[i].appendChild(divComment);
    }
}

window.addEventListener("scroll", () => {
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;
    if (scrollHeight - scrollTop == clientHeight) {
        addlist();
    }
}, false);