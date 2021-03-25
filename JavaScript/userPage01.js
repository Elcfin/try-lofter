window.onload = function () {
    waterFall();
    /*let next = document.getElementById("next");
    let nextBlack = document.getElementById("next-black");
    next.onmouseover = function () {
        nextBlack.style.height = 30 + "px";
        next.style.height = 0 + "px";
        next.innerHTML = "";
        nextBlack.innerHTML = "下一页";
    }
    nextBlack.onmouseout = function () {
        nextBlack.style.height = 0 + "px";
        next.style.height = 30 + "px";
        next.innerHTML = "下一页";
        nextBlack.innerHTML = "";
    }*/
}

function waterFall() {
    let contentItems = document.getElementsByClassName("contentItem");
    let gap = 20;
    let pageWidth = document.getElementById("mB-content").offsetWidth; //获取页面宽度 
    let contentItemWidth = contentItems[0].offsetWidth; //获取宽度
    let columns = parseInt(pageWidth / (contentItemWidth + gap)); //计算出列数
    let contentItemHeight = new Array(); //存储元素的高度
    for (let i = 0; i < contentItems.length; i++) {
        if (i < columns) //如果在第一行
        {
            contentItems[i].style.top = 0;
            contentItems[i].style.left = (contentItemWidth + gap) * i + 'px';
            contentItemHeight.push(contentItems[i].offsetHeight);
        } else {
            let minHeight = contentItemHeight[0];
            let index = 0;
            for (let j = 0; j < contentItemHeight.length; j++) //找出最小列的高度和最小列在数组中所占的位置
            {
                if (minHeight > contentItemHeight[j]) {
                    minHeight = contentItemHeight[j];
                    index = j;
                }
            }
            contentItems[i].style.top = contentItemHeight[index] + gap + 'px';
            contentItems[i].style.left = (contentItemWidth + gap) * index + 'px';
            //修改最小列的高度
            contentItemHeight[index] = contentItemHeight[index] + contentItems[i].offsetHeight + gap;
        }
    }
    let maxHeight = contentItemHeight[0];
    for (let j = 0; j < contentItemHeight.length; j++) //找出最大列的高度和最大列在数组中所占的位置
    {
        if (maxHeight < contentItemHeight[j]) {
            maxHeight = contentItemHeight[j];
        }
    }
    let mBcontent = document.getElementById("mB-content");
    mBcontent.style.height = maxHeight + "px"; //记得加px
}