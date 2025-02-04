console.log("JS file connected");

const imgSvg = document.querySelector("#main_logo_img");

function logImgSvgId() {
    console.log(this.id);
};

imgSvg.addEventListener("click", logImgSvgId);

const inlineSvg = document.querySelector("#grey_logo");

function logInlineSvgId() {
    console.log(this.id);
};

inlineSvg.addEventListener("click", logInlineSvgId);
