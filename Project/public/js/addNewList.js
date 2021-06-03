const addNewList = function () {
  const data = {
    listArray: [
      '<div class="user"><a href="./UserHomePage02.html"><img src="../public/img/index-dragon.jpg" data-src="../public/img/index-dragon.jpg"></a></div>',
      '<div class="Triangle"></div>'
    ],
    userContentArray: [
      '<div class="uC-name"><a href=""></a></div>',
      '<div class="uC-title"></div>',
      '<div class="uC-content"><div class="uC-contentArticle"></div></div>'
    ],
    uCbottomArray: [
      '<div class="uCb-tag"><ul class="dock"><li style="padding-right: 6px;"><img src="../public/img/index-tag.svg" data-src="../public/img/index-tag.svg"></li></ul></div>',
      '<div class="uCb-like"><ul class="dock"><li><span class="popularity"></span></li><li><span class="commentsChange"></span></li><li><span>分享</span></li><li><span>推荐</span></li><li style="padding-right: 0px;"><span><img class="likeChange" src="../public/img/index-like.svg" data-src="../public/img/index-like.svg"></span></li></ul></div>'
    ],
    commentsInvArray: [
      '<div class="publish"><input class="publishOutWrite" type="text"><input class="publishOut" type="submit" value="发布" /></div><div class="commentsTotal"></div>'
    ]
  }

  const list = document.createElement("div");
  list.className = "list";
  for (let i = 0; i < data.listArray.length; i++)
    list.innerHTML += data.listArray[i];

  const userContentOut = document.createElement("div");
  userContentOut.className = "userContentOut";

  const userContent = document.createElement("div");
  userContent.className = "userContent";
  for (let i = 0; i < data.userContentArray.length; i++)
    userContent.innerHTML += data.userContentArray[i];

  const uCbottom = document.createElement("div");
  uCbottom.className = "uC-bottom";
  for (let i = 0; i < data.uCbottomArray.length; i++)
    uCbottom.innerHTML += data.uCbottomArray[i];

  userContent.appendChild(uCbottom);

  const commentsInv = document.createElement("div");
  commentsInv.className = "comments-inv";
  for (let i = 0; i < data.commentsInvArray.length; i++)
    commentsInv.innerHTML += data.commentsInvArray[i];

  userContentOut.appendChild(userContent);
  userContentOut.appendChild(commentsInv);
  list.appendChild(userContentOut);

  return list;
}

export default addNewList;