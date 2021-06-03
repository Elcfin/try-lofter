const hideGrey = document.querySelector("#hideGrey");

const hideGreyBack = function () {
  const bodyHeight = document.documentElement.scrollHeight; //获取页面全部高度
  hideGrey.style.display = "block";
  hideGrey.style.height = bodyHeight + "px";

  const hidePublish = document.querySelector("#hidePublish");
  const publishBar = document.querySelector("#publishBar");
  hidePublish.id = "hidePublish-inv";
  publishBar.id = "publishBar-inv";
}

const hideGreyIcon = document.querySelectorAll(".icon");
for (let i = 0; i < hideGreyIcon.length; i++) {
  hideGreyIcon[i].addEventListener("click", hideGreyBack, false);
}

const hideGreyCancel = function () {
  hideGrey.style.display = "none";
  const hidePublish = document.querySelector("#hidePublish-inv");
  const publishBar = document.querySelector("#publishBar-inv");
  hidePublish.id = "hidePublish";
  publishBar.id = "publishBar";
}

const cancel = document.getElementById("cancel");
cancel.addEventListener("click", hideGreyCancel, false);