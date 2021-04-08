function addContent() {
    let mBContent = document.querySelector("#mB-content");

    for (let j = 0; j < dataContent.itemsIndex.length; j++) {
        let divOut = document.createElement("div");
        divOut.className = "contentItem";
        let divImg = document.createElement("div");
        divImg.className = "contentItemImg";
        let a = document.createElement("a");
        a.href = "userDetailPage01.html?item=" + j;
        let img = document.createElement("img");
        img.setAttribute("data-src", dataContent.contentImg[j][0]);
        a.appendChild(img);
        divImg.appendChild(a);
        let divArticle = document.createElement("div");
        divArticle.className = "contentItemArticle";
        divArticle.innerHTML = dataContent.contentArticle[j];
        let divBottom = document.createElement("div");
        divBottom.className = "contentItemBottom";
        let aB = document.createElement("a");
        aB.href = "userDetailPage01.html?item=" + j;
        let imgB = document.createElement("img");
        imgB.setAttribute("data-src", "..\\Images\\userPage\\userPage01\\add.svg");
        aB.appendChild(imgB);
        divBottom.appendChild(aB);
        divOut.appendChild(divImg);
        divOut.appendChild(divArticle);
        divOut.appendChild(divBottom);
        mBContent.appendChild(divOut);
    }
}

addContent();

window.addEventListener("scroll", () => {
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;
    if (scrollHeight - scrollTop == clientHeight) {
        addContent();
    }
}, false);