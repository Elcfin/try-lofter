import addNewList from './addNewList.js';
import likeChangeFunc from './likeChange.js';
import imgSizeChange from './imgSizeChange.js';
import commentPublishOut from './commentPublishOut.js';
import commentsIsVisible from './commentsIsVisible.js';
import lazyload from './lazyLoad.js';

const listPublishOut = function () {
    const list = addNewList();
    const mBL = document.querySelector("#mB-l");
    mBL.insertBefore(list, mBL.querySelector(".list"));
}

const addContent = function () {
    const pbtitle = document.querySelector("#pb-title");
    const uCtitle = document.querySelector(".uC-title");
    if (pbtitle.value) {
        uCtitle.innerHTML = "【标题】" + pbtitle.value;
    }

    const pbcontent = document.querySelector("#pb-content");
    const uCcontentArticle = document.querySelector(".uC-contentArticle");
    uCcontentArticle.innerHTML = "<p>" + pbcontent.value + "</p>";

    const pbimg = document.querySelector("#pb-img");
    if (pbimg.value) {
        const img = document.createElement("img");
        img.className = "uC-contentImgMin";
        img.setAttribute("data-src", pbimg.value);
        const uCcontent = document.querySelector(".uC-content");
        uCcontent.insertBefore(img, uCcontent.firstChild);
    }

    const dock = document.querySelector(".uCb-tag .dock");
    const pbtag = document.querySelector("#pb-tag");
    if (pbtag.value) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.innerHTML = pbtag.value;
        li.appendChild(a);
        dock.appendChild(li);
    }

    pbtitle.value = "";
    pbimg.value = "";
    pbcontent.value = "";
    pbtag.value = "";

    const likeChange = document.querySelector(".likeChange");
    likeChange.addEventListener("click", likeChangeFunc, false);

    const uCContentImg = document.querySelector(".uC-content img");
    uCContentImg.addEventListener("click", imgSizeChange, false);

    const userContentOut = document.querySelector(".userContentOut");
    userContentOut.addEventListener("click", function (event) {
        if (event.target.className == "commentsChange") {
            commentsIsVisible(this);
        }
        if (event.target.className == "publishOut") {
            commentPublishOut(this);
        }
    }, false);

    userContentOut.addEventListener("keyup",
        function (event) {
            if (event.code === "Enter") {
                commentPublishOut(this);
            }
        }, false);

    const cancel = document.querySelector("#cancel");
    cancel.click();
}

const publishList = document.querySelector("#publishList");
publishList.addEventListener("click", function () {
    listPublishOut();
    addContent();
    lazyload();
}, false);