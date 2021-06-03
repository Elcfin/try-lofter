const uCContentImg = document.querySelectorAll(".uC-content img");
const imgSizeChange = function () {
  if (this.className === "uC-contentImgMax") {
    this.className = "uC-contentImgMin";
  } else if (this.className == "uC-contentImgMin") {
    this.className = "uC-contentImgMax";
  }
}

for (let i = 0; i < uCContentImg.length; i++) {
  uCContentImg[i].addEventListener("click", imgSizeChange, false);
}

export default imgSizeChange;