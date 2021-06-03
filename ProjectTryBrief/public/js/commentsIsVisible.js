const commentsIsVisible = function (target) {
  const commentsV = target.querySelector(".comments-v");
  const commentsInV = target.querySelector(".comments-inv");
  if (commentsInV) {
    commentsInV.className = "comments-v";
  } else if (commentsV) {
    commentsV.className = "comments-inv";
  }
}

const userContentOut = document.querySelectorAll(".userContentOut");
for (let i = 0; i < userContentOut.length; i++) {
  userContentOut[i].addEventListener("click", function (event) {
    if (event.target.className === "commentsChange") {
      commentsIsVisible(this);
    }
  }, false);
}

export default commentsIsVisible;