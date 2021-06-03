(function (modules) {
  function require(id) { //�
    const [fn, mapping] = modules[id];

    function localRequire(name) { //⏰
      return require(mapping[name]); //�
    }

    const module = {
      exports: {}
    };

    fn(localRequire, module, module.exports);

    return module.exports;
  }

  require(0);
})({
  0: [
    function (require, module, exports) {
      "use strict";

      require("./listPublishOut.js");

      require("./backToTop.js");

      require("./hidegrey.js");

      require("./menuAppear.js");

      require("./addlist.js");
    },
    {
      "./listPublishOut.js": 1,
      "./backToTop.js": 2,
      "./hidegrey.js": 3,
      "./menuAppear.js": 4,
      "./addlist.js": 5
    },
  ],
  1: [
    function (require, module, exports) {
      "use strict";

      var _addNewList = require("./addNewList.js");

      var _addNewList2 = _interopRequireDefault(_addNewList);

      var _likeChange = require("./likeChange.js");

      var _likeChange2 = _interopRequireDefault(_likeChange);

      var _imgSizeChange = require("./imgSizeChange.js");

      var _imgSizeChange2 = _interopRequireDefault(_imgSizeChange);

      var _commentPublishOut = require("./commentPublishOut.js");

      var _commentPublishOut2 = _interopRequireDefault(_commentPublishOut);

      var _commentsIsVisible = require("./commentsIsVisible.js");

      var _commentsIsVisible2 = _interopRequireDefault(_commentsIsVisible);

      var _lazyLoad = require("./lazyLoad.js");

      var _lazyLoad2 = _interopRequireDefault(_lazyLoad);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      var listPublishOut = function listPublishOut() {
        var list = (0, _addNewList2.default)();
        var mBL = document.querySelector("#mB-l");
        mBL.insertBefore(list, mBL.querySelector(".list"));
      };

      var addContent = function addContent() {
        var pbtitle = document.querySelector("#pb-title");
        var uCtitle = document.querySelector(".uC-title");
        if (pbtitle.value) {
          uCtitle.innerHTML = "【标题】" + pbtitle.value;
        }

        var pbcontent = document.querySelector("#pb-content");
        var uCcontentArticle = document.querySelector(".uC-contentArticle");
        uCcontentArticle.innerHTML = "<p>" + pbcontent.value + "</p>";

        var pbimg = document.querySelector("#pb-img");
        if (pbimg.value) {
          var img = document.createElement("img");
          img.className = "uC-contentImgMin";
          img.setAttribute("data-src", pbimg.value);
          var uCcontent = document.querySelector(".uC-content");
          uCcontent.insertBefore(img, uCcontent.firstChild);
        }

        var dock = document.querySelector(".uCb-tag .dock");
        var pbtag = document.querySelector("#pb-tag");
        if (pbtag.value) {
          var li = document.createElement("li");
          var a = document.createElement("a");
          a.innerHTML = pbtag.value;
          li.appendChild(a);
          dock.appendChild(li);
        }

        pbtitle.value = "";
        pbimg.value = "";
        pbcontent.value = "";
        pbtag.value = "";

        var likeChange = document.querySelector(".likeChange");
        likeChange.addEventListener("click", _likeChange2.default, false);

        var uCContentImg = document.querySelector(".uC-content img");
        uCContentImg.addEventListener("click", _imgSizeChange2.default, false);

        var userContentOut = document.querySelector(".userContentOut");
        userContentOut.addEventListener("click", function (event) {
          if (event.target.className == "commentsChange") {
            (0, _commentsIsVisible2.default)(this);
          }
          if (event.target.className == "publishOut") {
            (0, _commentPublishOut2.default)(this);
          }
        }, false);

        userContentOut.addEventListener("keyup", function (event) {
          if (event.code === "Enter") {
            (0, _commentPublishOut2.default)(this);
          }
        }, false);

        var cancel = document.querySelector("#cancel");
        cancel.click();
      };

      var publishList = document.querySelector("#publishList");
      publishList.addEventListener("click", function () {
        listPublishOut();
        addContent();
        (0, _lazyLoad2.default)();
      }, false);
    },
    {
      "./addNewList.js": 6,
      "./likeChange.js": 7,
      "./imgSizeChange.js": 8,
      "./commentPublishOut.js": 9,
      "./commentsIsVisible.js": 10,
      "./lazyLoad.js": 11
    },
  ],
  2: [
    function (require, module, exports) {
      "use strict";

      var _throttle = require("./throttle.js");

      var _throttle2 = _interopRequireDefault(_throttle);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      var backToTop = function backToTop() {
        var preScroll = document.documentElement.scrollTop;

        var back = function back() {
          var nowScroll = document.documentElement.scrollTop;
          if (nowScroll > preScroll) //向下滚动时打断
          {
            clearInterval(timmer);
            timmer = null;
            return;
          }

          nowScroll -= nowScroll / 80; //越接近顶部速度越慢

          if (nowScroll > 0) {
            window.scrollTo(0, nowScroll);
          } else {
            window.scrollTo(0, 0);
            clearInterval(timmer);
            timmer = null;
          }

          preScroll = nowScroll;
        };

        var timmer = setInterval(back, 1);
      };

      var backTop = document.querySelector("#backTop");
      backTop.addEventListener("click", backToTop, false);

      var buttonAppear = function buttonAppear() {
        var scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 500) {
          backTop.style.opacity = 1;
          backTopImg.style.opacity = 1;
        } else {
          backTop.style.opacity = 0;
          backTopImg.style.opacity = 0;
        }
      };

      var backTopImg = document.getElementById("backTopImg");
      window.addEventListener("scroll", (0, _throttle2.default)(buttonAppear, 1000), false);
    },
    {
      "./throttle.js": 12
    },
  ],
  3: [
    function (require, module, exports) {
      "use strict";

      var hidegrey = document.querySelector("#hideGrey");

      var hidegreyBack = function hidegreyBack() {
        var bodyHeight = document.documentElement.scrollHeight; //获取页面全部高度
        hidegrey.style.display = "block";
        hidegrey.style.height = bodyHeight + "px";

        var hidePublish = document.querySelector("#hidePublish");
        var publishBar = document.querySelector("#publishBar");
        hidePublish.id = "hidePublish-inv";
        publishBar.id = "publishBar-inv";
      };

      var hidegreyIcon = document.querySelectorAll(".icon");
      for (var i = 0; i < hidegreyIcon.length; i++) {
        hidegreyIcon[i].addEventListener("click", hidegreyBack, false);
      }

      var hidegreyCancel = function hidegreyCancel() {
        hidegrey.style.display = "none";
        var hidePublish = document.querySelector("#hidePublish-inv");
        var publishBar = document.querySelector("#publishBar-inv");
        hidePublish.id = "hidePublish";
        publishBar.id = "publishBar";
      };

      var cancel = document.querySelector("#cancel");
      cancel.addEventListener("click", hidegreyCancel, false);
    },
    {},
  ],
  4: [
    function (require, module, exports) {
      "use strict";

      var offsetHeight = 854;

      var menuAppear = function menuAppear() {
        var scrollTop = document.documentElement.scrollTop;
        var menu = document.querySelector("#menu");
        var mBL = document.querySelector("#mB-l");
        if (offsetHeight - scrollTop < 0) {
          menu.style.position = "fixed";
          menu.style.left = mBL.right + 20 + "px"; //获取实时左侧相对距离
          menu.style.top = 94 + "px";
        } else {
          menu.style.position = "static";
        }
      };

      window.addEventListener("scroll", menuAppear, false);
    },
    {},
  ],
  5: [
    function (require, module, exports) {
      "use strict";

      var _addNewList = require("./addNewList.js");

      var _addNewList2 = _interopRequireDefault(_addNewList);

      var _likeChange = require("./likeChange.js");

      var _likeChange2 = _interopRequireDefault(_likeChange);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      var addlist = function addlist() {
        var list = (0, _addNewList2.default)();
        var mBL = document.getElementById("mB-l");
        mBL.appendChild(list);
        var likeChange = document.querySelectorAll(".likeChange");
        likeChange[likeChange.length - 1].addEventListener("click", _likeChange2.default, false);
      };

      window.addEventListener("scroll", function () {
        var scrollHeight = document.documentElement.scrollHeight;
        var scrollTop = document.documentElement.scrollTop;
        var clientHeight = document.documentElement.clientHeight;
        if (scrollHeight - scrollTop === clientHeight) {
          setTimeout(addlist, 0);
        }
      }, false);
    },
    {
      "./addNewList.js": 13,
      "./likeChange.js": 14
    },
  ],
  6: [
    function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var addNewList = function addNewList() {
        var data = {
          listArray: ['<div class="user"><a href=""><img data-src=""></a></div>',
            '<div class="Triangle"></div>'
          ],
          userContentArray: ['<div class="uC-name"><a href=""></a></div>',
            '<div class="uC-title"></div>',
            '<div class="uC-content"><div class="uC-contentArticle"></div></div>'
          ],
          uCbottomArray: ['<div class="uCb-tag"><ul class="dock"><li style="padding-right: 6px;"><img src="../public/img/index-tag.svg" data-src="../public/img/index-tag.svg"></li></ul></div>',
            '<div class="uCb-like"><ul class="dock"><li > < span class = "popularity" > < /span></li > < li > < span class = "commentsChange" > < /span></li > < li > < span > 分享 < /span></li > < li > < span > 推荐 < /span></li > < li style = "padding-right: 0px;" > < span > < img class = "likeChange" src = "../public/img/index-like.svg " data-src=".. / public / img / index - like.svg "></span></li></ul></div>'
          ],
          commentsInvArray: ['<div class="publish"><input class="publishOutWrite" type="text"><input class="publishOut" type="submit" value="发布" /></div><div class="commentsTotal"></div>']
        };

        var list = document.createElement("div");
        list.className = "list";
        for (var i = 0; i < data.listArray.length; i++) {
          list.innerHTML += data.listArray[i];
        }
        var userContentOut = document.createElement("div");
        userContentOut.className = "userContentOut";

        var userContent = document.createElement("div");
        userContent.className = "userContent";
        for (var _i = 0; _i < data.userContentArray.length; _i++) {
          userContent.innerHTML += data.userContentArray[_i];
        }
        var uCbottom = document.createElement("div");
        uCbottom.className = "uC-bottom";
        for (var _i2 = 0; _i2 < data.uCbottomArray.length; _i2++) {
          uCbottom.innerHTML += data.uCbottomArray[_i2];
        }
        userContent.appendChild(uCbottom);

        var commentsInv = document.createElement("div");
        commentsInv.className = "comments-inv";
        for (var _i3 = 0; _i3 < data.commentsInvArray.length; _i3++) {
          commentsInv.innerHTML += data.commentsInvArray[_i3];
        }
        userContentOut.appendChild(userContent);
        userContentOut.appendChild(commentsInv);
        list.appendChild(userContentOut);

        return list;
      };

      exports.default = addNewList;
    },
    {},
  ],
  7: [
    function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var likeChangeFunc = function likeChangeFunc() {
        var reg = new RegExp("index-like.svg");
        if (reg.test(this.src)) {
          this.src = "../public/img/index-like(red).svg";
        } else {
          this.src = "../public/img/index-like.svg";
        }
      };

      exports.default = likeChangeFunc;
    },
    {},
  ],
  8: [
    function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var uCContentImg = document.querySelectorAll(".uC-content img");
      var imgSizeChange = function imgSizeChange() {
        if (this.className === "uC-contentImgMax") {
          this.className = "uC-contentImgMin";
        } else if (this.className == "uC-contentImgMin") {
          this.className = "uC-contentImgMax";
        }
      };

      for (var i = 0; i < uCContentImg.length; i++) {
        uCContentImg[i].addEventListener("click", imgSizeChange, false);
      }

      exports.default = imgSizeChange;
    },
    {},
  ],
  9: [
    function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var userContentOut = document.querySelectorAll(".userContentOut");

      var commentPublishOut = function commentPublishOut(target) {
        var publishOutWrite = target.querySelector(".publishOutWrite");
        var writing = publishOutWrite.value;

        var divComment = document.createElement("div");
        divComment.className = "comment";

        var div = document.createElement("div");

        var divCommentName = document.createElement("div");
        divCommentName.className = "commentName";
        divCommentName.innerHTML = "Elcfin";

        var divCommentContent = document.createElement("div");
        divCommentContent.className = "commentContent";
        divCommentContent.innerHTML = writing;

        div.appendChild(divCommentName);
        div.appendChild(divCommentContent);

        var divCommentReply = document.createElement("div");
        divCommentReply.className = "commentReply";
        divCommentReply.innerHTML = "回复";

        divComment.appendChild(div);
        divComment.appendChild(divCommentReply);

        target.querySelector(".commentsTotal").appendChild(divComment);
        publishOutWrite.value = "";
      };

      for (var i = 0; i < userContentOut.length; i++) {
        userContentOut[i].addEventListener("click", function (event) {
          if (event.target.className === "publishOut") {
            commentPublishOut(this);
          }
        }, false);

        userContentOut[i].addEventListener("keyup", function (event) {
          if (event.code === "Enter") {
            commentPublishOut(this);
          }
        }, false);
      }

      exports.default = commentPublishOut;
    },
    {},
  ],
  10: [
    function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var commentsIsVisible = function commentsIsVisible(target) {
        var commentsV = target.querySelector(".comments-v");
        var commentsInV = target.querySelector(".comments-inv");
        if (commentsInV) {
          commentsInV.className = "comments-v";
        } else if (commentsV) {
          commentsV.className = "comments-inv";
        }
      };

      var userContentOut = document.querySelectorAll(".userContentOut");
      for (var i = 0; i < userContentOut.length; i++) {
        userContentOut[i].addEventListener("click", function (event) {
          if (event.target.className === "commentsChange") {
            commentsIsVisible(this);
          }
        }, false);
      }

      exports.default = commentsIsVisible;
    },
    {},
  ],
  11: [
    function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _throttle = require("./throttle.js");

      var _throttle2 = _interopRequireDefault(_throttle);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      var lazyload = function lazyload() {
        var imgs = document.querySelectorAll("img");
        var clientHeight = document.documentElement.clientHeight; //获取可视区域高度
        var scrollTop = document.documentElement.scrollTop; //获取滚动区域高度

        for (var i = 0; i < imgs.length; i++) {
          if (clientHeight + scrollTop > imgs[i].offsetTop - 150) {
            //图片距离顶部的距离小于可视区域和滚动区域之和时懒加载函数执行
            imgs[i].src = imgs[i].getAttribute("data-src");
          }
        }
      };

      window.addEventListener("load", lazyload, false);
      window.addEventListener("scroll", (0, _throttle2.default)(lazyload, 1000), false);

      exports.default = lazyload;
    },
    {
      "./throttle.js": 15
    },
  ],
  12: [
    function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var throttle = function throttle(func, delay) {
        var pre = Date.now();
        return function () {
          var now = Date.now();
          if (now - pre >= delay) {
            func();
            pre = Date.now();
          }
        };
      };

      exports.default = throttle;
    },
    {},
  ],
  13: [
    function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var addNewList = function addNewList() {
        var data = {
          listArray: [
            '<div class="user"><a href=""><img data-src=""></a></div>',
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
        };

        var list = document.createElement("div");
        list.className = "list";
        for (var i = 0; i < data.listArray.length; i++) {
          list.innerHTML += data.listArray[i];
        }
        var userContentOut = document.createElement("div");
        userContentOut.className = "userContentOut";

        var userContent = document.createElement("div");
        userContent.className = "userContent";
        for (var _i = 0; _i < data.userContentArray.length; _i++) {
          userContent.innerHTML += data.userContentArray[_i];
        }
        var uCbottom = document.createElement("div");
        uCbottom.className = "uC-bottom";
        for (var _i2 = 0; _i2 < data.uCbottomArray.length; _i2++) {
          uCbottom.innerHTML += data.uCbottomArray[_i2];
        }
        userContent.appendChild(uCbottom);

        var commentsInv = document.createElement("div");
        commentsInv.className = "comments-inv";
        for (var _i3 = 0; _i3 < data.commentsInvArray.length; _i3++) {
          commentsInv.innerHTML += data.commentsInvArray[_i3];
        }
        userContentOut.appendChild(userContent);
        userContentOut.appendChild(commentsInv);
        list.appendChild(userContentOut);

        return list;
      };

      exports.default = addNewList;
    },
    {},
  ],
  14: [
    function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var likeChangeFunc = function likeChangeFunc() {
        var reg = new RegExp("index-like.svg");
        if (reg.test(this.src)) {
          this.src = "../public/img/index-like(red).svg";
        } else {
          this.src = "../public/img/index-like.svg";
        }
      };

      exports.default = likeChangeFunc;
    },
    {},
  ],
  15: [
    function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var throttle = function throttle(func, delay) {
        var pre = Date.now();
        return function () {
          var now = Date.now();
          if (now - pre >= delay) {
            func();
            pre = Date.now();
          }
        };
      };

      exports.default = throttle;
    },
    {},
  ],
})