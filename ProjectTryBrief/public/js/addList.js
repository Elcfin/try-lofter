import addNewList from './addNewList.js';
import likeChangeFunc from './likeChange.js';

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
        setTimeout(addlist, 0);
    }
}, false);