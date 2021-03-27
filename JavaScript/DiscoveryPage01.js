window.onload = function () {
    //瀑布流start
    /*function waterFall() {
        let contentItems = document.getElementsByClassName("item");
        let gap = 20;
        let pageWidth = document.getElementById("container").offsetWidth; //获取页面宽度 
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
        let mBcontent = document.getElementById("container");
        mBcontent.style.height = maxHeight + "px"; //记得加px
    }*/
    //瀑布流end
    //懒加载start
    let imgs = document.querySelectorAll("img");

    function lazyload() {
        let imgs = document.querySelectorAll("img");
        //获取可视区域高度
        let h = window.innerHeight;
        //获取滚动区域高度
        let s = document.documentElement.scrollTop;
        for (let i = 0; i < imgs.length; i++) {
            //图片距离顶部的距离小于可视区域和滚动区域之和时懒加载函数执行
            if ((h + s) * 3 > imgs[i].offsetTop) {
                imgs[i].src = imgs[i].getAttribute("data-src");
            }
        }
    }
    lazyload();
    //当滚动的时候懒加载函数执行
    window.onscroll = function () {
        lazyload();
    };
    //懒加载end
}




/*
function throttle(method, delay) {
    var timer = null;
    return function () {
        var context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            method.apply(context, args);
        }, delay);
    }
}
*/