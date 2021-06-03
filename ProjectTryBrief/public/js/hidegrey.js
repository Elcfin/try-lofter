const hidegrey = document.querySelector("#hideGrey");

const hidegreyBack = function () {
  const bodyHeight = document.documentElement.scrollHeight; //获取页面全部高度
  hidegrey.style.display = "block";
  hidegrey.style.height = bodyHeight + "px";

  const hidePublish = document.querySelector("#hidePublish");
  const publishBar = document.querySelector("#publishBar");
  hidePublish.id = "hidePublish-inv";
  publishBar.id = "publishBar-inv";
}

const hidegreyIcon = document.querySelectorAll(".icon");
for (let i = 0; i < hidegreyIcon.length; i++) {
  hidegreyIcon[i].addEventListener("click", hidegreyBack, false);
}

const hidegreyCancel = function () {
  hidegrey.style.display = "none";
  const hidePublish = document.querySelector("#hidePublish-inv");
  const publishBar = document.querySelector("#publishBar-inv");
  hidePublish.id = "hidePublish";
  publishBar.id = "publishBar";
}

const cancel = document.querySelector("#cancel");
cancel.addEventListener("click", hidegreyCancel, false);