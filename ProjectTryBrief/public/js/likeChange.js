const likeChangeFunc = function () {
  const reg = new RegExp("index-like.svg");
  if (reg.test(this.src)) {
    this.src = "../public/img/index-like(red).svg";
  } else {
    this.src = "../public/img/index-like.svg";
  }
}

export default likeChangeFunc;