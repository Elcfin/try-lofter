import likeChangeFunc from './likeChange.js';
import dataContent from './indexData.js';
import addNewList from './addNewList.js';
import lazyload from './lazyLoad.js';

const addlist = function () {
    const list = addNewList();
    const mBL = document.getElementById("mB-l");
    mBL.appendChild(list);
    const likeChange = document.querySelectorAll(".likeChange");
    likeChange[likeChange.length - 1].addEventListener("click", likeChangeFunc, false);
}

window.addEventListener("scroll", () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollHeight - scrollTop === clientHeight) {
        addlist();
    }
}, false);

const addContent = function (i) {

    const userA = document.querySelectorAll(".user a");
    userA[i].href = dataContent.userA[i];

    const userImg = document.querySelectorAll(".user img");
    userImg[i].setAttribute("data-src", dataContent.userImg[i]);

    const uCnameA = document.querySelectorAll(".uC-name a");
    uCnameA[i].href = dataContent.uCnameA[i];
    uCnameA[i].innerHTML = dataContent.uCname[i];

    const uCtitle = document.querySelectorAll(".uC-title");
    uCtitle[i].innerHTML = dataContent.uCtitle[i];

    if (dataContent.uCcontentImg[i]) {
        const img = document.createElement("img");
        img.className = "uC-contentImgMin";
        img.setAttribute("data-src", dataContent.uCcontentImg[i]);
        const uCcontent = document.querySelectorAll(".uC-content");
        uCcontent[i].insertBefore(img, uCcontent[i].firstChild);
    }

    const uCcontentArticle = document.querySelectorAll(".uC-contentArticle");
    uCcontentArticle[i].innerHTML = dataContent.uCcontentArticle[i];

    const dock = document.querySelectorAll(".uCb-tag .dock");
    for (let j = 0; j < dataContent.tag[i].length; j++) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.innerHTML = dataContent.tag[i][j];
        li.appendChild(a);
        dock[i].appendChild(li);
    }

    const popularity = document.querySelectorAll(".popularity");
    popularity[i].innerHTML = dataContent.popularity[i];

    const commentsNum = document.querySelectorAll(".commentsChange");
    commentsNum[i].innerHTML = dataContent.commentsNum[i];

    const commentsTotal = document.querySelectorAll(".commentsTotal");
    for (let j = 0; j < dataContent.comments.itemsIndex[i].length; j++) {
        const divComment = document.createElement("div");
        divComment.className = "comment";

        const div = document.createElement("div");
        const divCommentName = document.createElement("div");
        divCommentName.className = "commentName";
        divCommentName.innerHTML = dataContent.comments.name[i][j];

        const divCommentContent = document.createElement("div");
        divCommentContent.className = "commentContent";
        divCommentContent.innerHTML = dataContent.comments.content[i][j];

        div.appendChild(divCommentName);
        div.appendChild(divCommentContent);

        const divCommentReply = document.createElement("div");
        divCommentReply.className = "commentReply";
        divCommentReply.innerHTML = "回复";

        divComment.appendChild(div);
        divComment.appendChild(divCommentReply);
        commentsTotal[i].appendChild(divComment);
    }
}

for (let i = 0; i < dataContent.itemsIndex.length; i++) {
    addlist();
    addContent(i);
}

lazyload();